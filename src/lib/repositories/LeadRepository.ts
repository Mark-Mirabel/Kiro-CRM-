import { Lead, LeadStatus, Prisma } from '@prisma/client'
import { prisma } from '../database'

export class LeadRepository {
  // Create a new lead
  async create(data: Omit<Lead, 'id' | 'createdAt' | 'updatedAt'>) {
    return await prisma.lead.create({
      data,
      include: {
        activities: true,
      },
    })
  }

  // Get all leads for a user
  async findByUserId(userId: string) {
    return await prisma.lead.findMany({
      where: { userId },
      include: {
        activities: {
          orderBy: { createdAt: 'desc' },
          take: 5, // Latest 5 activities
        },
      },
      orderBy: { createdAt: 'desc' },
    })
  }

  // Get leads by status
  async findByStatus(userId: string, status: LeadStatus) {
    return await prisma.lead.findMany({
      where: { userId, status },
      include: {
        activities: {
          orderBy: { createdAt: 'desc' },
          take: 3,
        },
      },
      orderBy: { createdAt: 'desc' },
    })
  }

  // Get a single lead by ID
  async findById(id: string, userId: string) {
    return await prisma.lead.findFirst({
      where: { id, userId },
      include: {
        activities: {
          orderBy: { createdAt: 'desc' },
        },
      },
    })
  }

  // Update a lead
  async update(id: string, userId: string, data: Partial<Omit<Lead, 'id' | 'createdAt' | 'updatedAt' | 'userId'>>) {
    return await prisma.lead.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date(),
      },
      include: {
        activities: true,
      },
    })
  }

  // Update lead status
  async updateStatus(id: string, userId: string, status: LeadStatus) {
    return await prisma.lead.update({
      where: { id },
      data: { status, updatedAt: new Date() },
      include: {
        activities: true,
      },
    })
  }

  // Convert lead to contact
  async convertToContact(id: string, userId: string) {
    const lead = await this.findById(id, userId)
    if (!lead) {
      throw new Error('Lead not found')
    }

    // Start a transaction to convert lead to contact
    return await prisma.$transaction(async (tx) => {
      // Create contact from lead data
      const contact = await tx.contact.create({
        data: {
          firstName: lead.firstName,
          lastName: lead.lastName,
          email: lead.email,
          phone: lead.phone,
          company: lead.company,
          notes: lead.notes,
          userId: lead.userId,
        },
      })

      // Update lead status to CLOSED_WON
      await tx.lead.update({
        where: { id },
        data: { status: LeadStatus.CLOSED_WON, updatedAt: new Date() },
      })

      // Transfer activities to the new contact
      await tx.activity.updateMany({
        where: { leadId: id },
        data: { contactId: contact.id, leadId: null },
      })

      return { contact, lead }
    })
  }

  // Delete a lead
  async delete(id: string, userId: string) {
    return await prisma.lead.delete({
      where: { id },
    })
  }

  // Search leads
  async search(userId: string, query: string) {
    return await prisma.lead.findMany({
      where: {
        userId,
        OR: [
          { firstName: { contains: query, mode: 'insensitive' } },
          { lastName: { contains: query, mode: 'insensitive' } },
          { email: { contains: query, mode: 'insensitive' } },
          { company: { contains: query, mode: 'insensitive' } },
        ],
      },
      include: {
        activities: {
          orderBy: { createdAt: 'desc' },
          take: 3,
        },
      },
      orderBy: { createdAt: 'desc' },
    })
  }

  // Get leads with pagination
  async findWithPagination(userId: string, page: number = 1, limit: number = 10, status?: LeadStatus) {
    const skip = (page - 1) * limit
    const where = status ? { userId, status } : { userId }

    const [leads, total] = await Promise.all([
      prisma.lead.findMany({
        where,
        include: {
          activities: {
            orderBy: { createdAt: 'desc' },
            take: 3,
          },
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.lead.count({ where }),
    ])

    return {
      leads,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    }
  }

  // Get lead statistics
  async getStatistics(userId: string) {
    const statusCounts = await prisma.lead.groupBy({
      by: ['status'],
      where: { userId },
      _count: { status: true },
    })

    const totalValue = await prisma.lead.aggregate({
      where: { userId, value: { not: null } },
      _sum: { value: true },
    })

    return {
      statusCounts: statusCounts.reduce((acc, item) => {
        acc[item.status] = item._count.status
        return acc
      }, {} as Record<LeadStatus, number>),
      totalValue: totalValue._sum.value || 0,
    }
  }
}