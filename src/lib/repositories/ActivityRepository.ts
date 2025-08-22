import { Activity, ActivityType, Prisma } from '@prisma/client'
import { prisma } from '../database'

export class ActivityRepository {
  // Create a new activity
  async create(data: Omit<Activity, 'id' | 'createdAt' | 'updatedAt'>) {
    return await prisma.activity.create({
      data,
      include: {
        contact: true,
        lead: true,
      },
    })
  }

  // Get all activities for a user
  async findByUserId(userId: string) {
    return await prisma.activity.findMany({
      where: { userId },
      include: {
        contact: true,
        lead: true,
      },
      orderBy: { createdAt: 'desc' },
    })
  }

  // Get activities by contact
  async findByContactId(contactId: string, userId: string) {
    return await prisma.activity.findMany({
      where: { contactId, userId },
      include: {
        contact: true,
      },
      orderBy: { createdAt: 'desc' },
    })
  }

  // Get activities by lead
  async findByLeadId(leadId: string, userId: string) {
    return await prisma.activity.findMany({
      where: { leadId, userId },
      include: {
        lead: true,
      },
      orderBy: { createdAt: 'desc' },
    })
  }

  // Get a single activity by ID
  async findById(id: string, userId: string) {
    return await prisma.activity.findFirst({
      where: { id, userId },
      include: {
        contact: true,
        lead: true,
      },
    })
  }

  // Update an activity
  async update(id: string, userId: string, data: Partial<Omit<Activity, 'id' | 'createdAt' | 'updatedAt' | 'userId'>>) {
    return await prisma.activity.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date(),
      },
      include: {
        contact: true,
        lead: true,
      },
    })
  }

  // Mark activity as completed
  async markCompleted(id: string, userId: string) {
    return await prisma.activity.update({
      where: { id },
      data: { completed: true, updatedAt: new Date() },
      include: {
        contact: true,
        lead: true,
      },
    })
  }

  // Delete an activity
  async delete(id: string, userId: string) {
    return await prisma.activity.delete({
      where: { id },
    })
  }

  // Get upcoming activities (tasks with due dates)
  async getUpcoming(userId: string, days: number = 7) {
    const futureDate = new Date()
    futureDate.setDate(futureDate.getDate() + days)

    return await prisma.activity.findMany({
      where: {
        userId,
        dueDate: {
          gte: new Date(),
          lte: futureDate,
        },
        completed: false,
      },
      include: {
        contact: true,
        lead: true,
      },
      orderBy: { dueDate: 'asc' },
    })
  }

  // Get overdue activities
  async getOverdue(userId: string) {
    return await prisma.activity.findMany({
      where: {
        userId,
        dueDate: {
          lt: new Date(),
        },
        completed: false,
      },
      include: {
        contact: true,
        lead: true,
      },
      orderBy: { dueDate: 'asc' },
    })
  }

  // Get recent activities
  async getRecent(userId: string, limit: number = 10) {
    return await prisma.activity.findMany({
      where: { userId },
      include: {
        contact: true,
        lead: true,
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
    })
  }

  // Search activities
  async search(userId: string, query: string) {
    return await prisma.activity.findMany({
      where: {
        userId,
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } },
        ],
      },
      include: {
        contact: true,
        lead: true,
      },
      orderBy: { createdAt: 'desc' },
    })
  }

  // Get activities with pagination
  async findWithPagination(userId: string, page: number = 1, limit: number = 10, type?: ActivityType) {
    const skip = (page - 1) * limit
    const where = type ? { userId, type } : { userId }

    const [activities, total] = await Promise.all([
      prisma.activity.findMany({
        where,
        include: {
          contact: true,
          lead: true,
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.activity.count({ where }),
    ])

    return {
      activities,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    }
  }

  // Get activity statistics
  async getStatistics(userId: string) {
    const typeCounts = await prisma.activity.groupBy({
      by: ['type'],
      where: { userId },
      _count: { type: true },
    })

    const completionStats = await prisma.activity.groupBy({
      by: ['completed'],
      where: { userId },
      _count: { completed: true },
    })

    const overdueCount = await prisma.activity.count({
      where: {
        userId,
        dueDate: { lt: new Date() },
        completed: false,
      },
    })

    return {
      typeCounts: typeCounts.reduce((acc, item) => {
        acc[item.type] = item._count.type
        return acc
      }, {} as Record<ActivityType, number>),
      completionStats: completionStats.reduce((acc, item) => {
        acc[item.completed ? 'completed' : 'pending'] = item._count.completed
        return acc
      }, {} as Record<string, number>),
      overdueCount,
    }
  }
}