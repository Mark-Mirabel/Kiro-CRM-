import { Contact, Prisma } from '@prisma/client'
import { prisma } from '../database'

export class ContactRepository {
  // Create a new contact
  async create(data: Omit<Contact, 'id' | 'createdAt' | 'updatedAt'>) {
    return await prisma.contact.create({
      data,
      include: {
        activities: true,
      },
    })
  }

  // Get all contacts for a user
  async findByUserId(userId: string) {
    return await prisma.contact.findMany({
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

  // Get a single contact by ID
  async findById(id: string, userId: string) {
    return await prisma.contact.findFirst({
      where: { id, userId },
      include: {
        activities: {
          orderBy: { createdAt: 'desc' },
        },
      },
    })
  }

  // Update a contact
  async update(id: string, userId: string, data: Partial<Omit<Contact, 'id' | 'createdAt' | 'updatedAt' | 'userId'>>) {
    return await prisma.contact.update({
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

  // Delete a contact
  async delete(id: string, userId: string) {
    return await prisma.contact.delete({
      where: { id },
    })
  }

  // Search contacts
  async search(userId: string, query: string) {
    return await prisma.contact.findMany({
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

  // Get contacts with pagination
  async findWithPagination(userId: string, page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit

    const [contacts, total] = await Promise.all([
      prisma.contact.findMany({
        where: { userId },
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
      prisma.contact.count({
        where: { userId },
      }),
    ])

    return {
      contacts,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    }
  }
}