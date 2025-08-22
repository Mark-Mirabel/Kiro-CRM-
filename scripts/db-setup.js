#!/usr/bin/env node

/**
 * Database setup script for Kiro CRM
 * This script helps set up the database connection and run initial migrations
 */

import { PrismaClient } from '@prisma/client'
import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

async function setupDatabase() {
  console.log('🚀 Setting up Kiro CRM database...')

  try {
    // Check if .env file exists
    const envPath = path.join(process.cwd(), '.env')
    if (!fs.existsSync(envPath)) {
      console.log('⚠️  .env file not found. Please create one based on .env.example')
      console.log('   Make sure to set your DATABASE_URL with your Aurora PostgreSQL connection string')
      process.exit(1)
    }

    // Test database connection
    console.log('🔍 Testing database connection...')
    await prisma.$connect()
    console.log('✅ Database connection successful')

    // Generate Prisma client
    console.log('🔧 Generating Prisma client...')
    execSync('npx prisma generate', { stdio: 'inherit' })

    // Push schema to database (for development)
    console.log('📊 Pushing schema to database...')
    execSync('npx prisma db push', { stdio: 'inherit' })

    console.log('🎉 Database setup completed successfully!')
    console.log('')
    console.log('Next steps:')
    console.log('1. Run "npm run dev" to start the development server')
    console.log('2. Run "npm run db:studio" to open Prisma Studio for database management')

  } catch (error) {
    console.error('❌ Database setup failed:', error.message)
    
    if (error.message.includes('P1001')) {
      console.log('')
      console.log('💡 Connection failed. Please check:')
      console.log('   - Your DATABASE_URL in .env file')
      console.log('   - Your Aurora PostgreSQL cluster is running')
      console.log('   - Your security groups allow connections')
      console.log('   - Your VPC configuration is correct')
    }
    
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

// Run the setup
setupDatabase()