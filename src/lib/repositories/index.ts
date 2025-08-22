export { ContactRepository } from './ContactRepository'
export { LeadRepository } from './LeadRepository'
export { ActivityRepository } from './ActivityRepository'

// Create singleton instances
export const contactRepository = new ContactRepository()
export const leadRepository = new LeadRepository()
export const activityRepository = new ActivityRepository()