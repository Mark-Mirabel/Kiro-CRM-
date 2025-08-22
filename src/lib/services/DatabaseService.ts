import { getCurrentUser } from 'aws-amplify/auth'
import { contactRepository, leadRepository, activityRepository } from '../repositories'
import type { Contact, Lead, Activity, LeadStatus, ActivityType } from '@prisma/client'

/**
 * Database service that integrates with AWS Cognito authentication
 * All operations are scoped to the current authenticated user
 */
export class DatabaseService {
  private async getCurrentUserId(): Promise<string> {
    try {
      const user = await getCurrentUser()
      return user.userId
    } catch (error) {
      throw new Error('User not authenticated')
    }
  }

  // Contact operations
  async createContact(data: Omit<Contact, 'id' | 'createdAt' | 'updatedAt' | 'userId'>) {
    const userId = await this.getCurrentUserId()
    return contactRepository.create({ ...data, userId })
  }

  async getContacts() {
    const userId = await this.getCurrentUserId()
    return contactRepository.findByUserId(userId)
  }

  async getContact(id: string) {
    const userId = await this.getCurrentUserId()
    return contactRepository.findById(id, userId)
  }

  async updateContact(id: string, data: Partial<Omit<Contact, 'id' | 'createdAt' | 'updatedAt' | 'userId'>>) {
    const userId = await this.getCurrentUserId()
    return contactRepository.update(id, userId, data)
  }

  async deleteContact(id: string) {
    const userId = await this.getCurrentUserId()
    return contactRepository.delete(id, userId)
  }

  async searchContacts(query: string) {
    const userId = await this.getCurrentUserId()
    return contactRepository.search(userId, query)
  }

  async getContactsWithPagination(page: number = 1, limit: number = 10) {
    const userId = await this.getCurrentUserId()
    return contactRepository.findWithPagination(userId, page, limit)
  }

  // Lead operations
  async createLead(data: Omit<Lead, 'id' | 'createdAt' | 'updatedAt' | 'userId'>) {
    const userId = await this.getCurrentUserId()
    return leadRepository.create({ ...data, userId })
  }

  async getLeads() {
    const userId = await this.getCurrentUserId()
    return leadRepository.findByUserId(userId)
  }

  async getLeadsByStatus(status: LeadStatus) {
    const userId = await this.getCurrentUserId()
    return leadRepository.findByStatus(userId, status)
  }

  async getLead(id: string) {
    const userId = await this.getCurrentUserId()
    return leadRepository.findById(id, userId)
  }

  async updateLead(id: string, data: Partial<Omit<Lead, 'id' | 'createdAt' | 'updatedAt' | 'userId'>>) {
    const userId = await this.getCurrentUserId()
    return leadRepository.update(id, userId, data)
  }

  async updateLeadStatus(id: string, status: LeadStatus) {
    const userId = await this.getCurrentUserId()
    return leadRepository.updateStatus(id, userId, status)
  }

  async convertLeadToContact(id: string) {
    const userId = await this.getCurrentUserId()
    return leadRepository.convertToContact(id, userId)
  }

  async deleteLead(id: string) {
    const userId = await this.getCurrentUserId()
    return leadRepository.delete(id, userId)
  }

  async searchLeads(query: string) {
    const userId = await this.getCurrentUserId()
    return leadRepository.search(userId, query)
  }

  async getLeadsWithPagination(page: number = 1, limit: number = 10, status?: LeadStatus) {
    const userId = await this.getCurrentUserId()
    return leadRepository.findWithPagination(userId, page, limit, status)
  }

  async getLeadStatistics() {
    const userId = await this.getCurrentUserId()
    return leadRepository.getStatistics(userId)
  }

  // Activity operations
  async createActivity(data: Omit<Activity, 'id' | 'createdAt' | 'updatedAt' | 'userId'>) {
    const userId = await this.getCurrentUserId()
    return activityRepository.create({ ...data, userId })
  }

  async getActivities() {
    const userId = await this.getCurrentUserId()
    return activityRepository.findByUserId(userId)
  }

  async getContactActivities(contactId: string) {
    const userId = await this.getCurrentUserId()
    return activityRepository.findByContactId(contactId, userId)
  }

  async getLeadActivities(leadId: string) {
    const userId = await this.getCurrentUserId()
    return activityRepository.findByLeadId(leadId, userId)
  }

  async getActivity(id: string) {
    const userId = await this.getCurrentUserId()
    return activityRepository.findById(id, userId)
  }

  async updateActivity(id: string, data: Partial<Omit<Activity, 'id' | 'createdAt' | 'updatedAt' | 'userId'>>) {
    const userId = await this.getCurrentUserId()
    return activityRepository.update(id, userId, data)
  }

  async markActivityCompleted(id: string) {
    const userId = await this.getCurrentUserId()
    return activityRepository.markCompleted(id, userId)
  }

  async deleteActivity(id: string) {
    const userId = await this.getCurrentUserId()
    return activityRepository.delete(id, userId)
  }

  async getUpcomingActivities(days: number = 7) {
    const userId = await this.getCurrentUserId()
    return activityRepository.getUpcoming(userId, days)
  }

  async getOverdueActivities() {
    const userId = await this.getCurrentUserId()
    return activityRepository.getOverdue(userId)
  }

  async getRecentActivities(limit: number = 10) {
    const userId = await this.getCurrentUserId()
    return activityRepository.getRecent(userId, limit)
  }

  async searchActivities(query: string) {
    const userId = await this.getCurrentUserId()
    return activityRepository.search(userId, query)
  }

  async getActivitiesWithPagination(page: number = 1, limit: number = 10, type?: ActivityType) {
    const userId = await this.getCurrentUserId()
    return activityRepository.findWithPagination(userId, page, limit, type)
  }

  async getActivityStatistics() {
    const userId = await this.getCurrentUserId()
    return activityRepository.getStatistics(userId)
  }
}

// Export singleton instance
export const databaseService = new DatabaseService()