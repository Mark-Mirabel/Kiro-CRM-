import { PrismaClient } from '@prisma/client'

// Global variable to store the Prisma client instance
declare global {
  var __prisma: PrismaClient | undefined
}

// Create a single instance of Prisma Client
export const prisma = globalThis.__prisma || new PrismaClient()

// In development, store the instance globally to prevent multiple instances
if (process.env.NODE_ENV === 'development') {
  globalThis.__prisma = prisma
}

// Helper function to get the current user ID from AWS Cognito
export const getCurrentUserId = async (): Promise<string> => {
  try {
    // Import here to avoid circular dependencies
    const { getCurrentUser } = await import('aws-amplify/auth')
    const user = await getCurrentUser()
    return user.userId
  } catch (error) {
    throw new Error('User not authenticated')
  }
}

// Database connection utility
export const connectDatabase = async () => {
  try {
    await prisma.$connect()
    console.log('Database connected successfully')
  } catch (error) {
    console.error('Database connection failed:', error)
    throw error
  }
}

// Database disconnection utility
export const disconnectDatabase = async () => {
  try {
    await prisma.$disconnect()
    console.log('Database disconnected successfully')
  } catch (error) {
    console.error('Database disconnection failed:', error)
    throw error
  }
}