# Database Setup Guide

This guide explains how to set up the PostgreSQL database for the Kiro CRM application using AWS Aurora PostgreSQL and Prisma ORM.

## Prerequisites

1. AWS Account with Aurora PostgreSQL cluster set up
2. Database connection string from AWS RDS
3. Node.js and npm installed
4. Prisma CLI installed globally: `npm install -g prisma`

## Database Architecture

The CRM uses a PostgreSQL database with the following main entities:

- **Contacts**: Customer contact information
- **Leads**: Potential customers in the sales pipeline
- **Activities**: Tasks, calls, meetings, and notes related to contacts/leads

All data is scoped to individual users using AWS Cognito User IDs for multi-tenant security.

## Setup Steps

### 1. Configure Environment Variables

Copy the example environment file and configure your database connection:

```bash
cp .env.example .env
```

Edit `.env` and set your DATABASE_URL:

```env
DATABASE_URL="postgresql://username:password@your-aurora-cluster.cluster-xxxxx.us-east-1.rds.amazonaws.com:5432/kirocrm?schema=public"
```

### 2. Run Database Setup

Use the automated setup script:

```bash
npm run db:setup
```

This script will:
- Test the database connection
- Generate the Prisma client
- Push the schema to your database
- Create all necessary tables

### 3. Alternative Manual Setup

If you prefer manual setup:

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database (development)
npm run db:push

# Or run migrations (production)
npm run db:migrate
```

## Database Schema

### Contact Model
```prisma
model Contact {
  id        String   @id @default(cuid())
  firstName String
  lastName  String
  email     String   @unique
  phone     String?
  company   String?
  position  String?
  notes     String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  userId    String   // AWS Cognito User ID
  activities Activity[]
}
```

### Lead Model
```prisma
model Lead {
  id        String     @id @default(cuid())
  firstName String
  lastName  String
  email     String
  phone     String?
  company   String?
  status    LeadStatus @default(NEW)
  source    String?
  value     Float?
  notes     String?
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
  userId    String     // AWS Cognito User ID
  activities Activity[]
}
```

### Activity Model
```prisma
model Activity {
  id          String       @id @default(cuid())
  type        ActivityType
  title       String
  description String?
  dueDate     DateTime?
  completed   Boolean      @default(false)
  createdAt   DateTime     @default(now())
  updatedAt   DateTime     @updatedAt
  userId      String       // AWS Cognito User ID
  contactId   String?
  contact     Contact?     @relation(fields: [contactId], references: [id], onDelete: Cascade)
  leadId      String?
  lead        Lead?        @relation(fields: [leadId], references: [id], onDelete: Cascade)
}
```

## Available Scripts

- `npm run db:setup` - Complete database setup (recommended)
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema changes to database (development)
- `npm run db:migrate` - Run database migrations (production)
- `npm run db:studio` - Open Prisma Studio for database management

## Security Features

### Row-Level Security
All database operations are automatically scoped to the authenticated user through:
- `userId` field on all models linked to AWS Cognito User ID
- Repository pattern that enforces user-scoped queries
- Database service layer that automatically injects user context

### Data Isolation
- Each user can only access their own data
- Cascade deletes ensure data consistency
- Unique constraints prevent data conflicts

## Development Tools

### Prisma Studio
Launch the database browser:
```bash
npm run db:studio
```

Access at: http://localhost:5555

### Database Introspection
If you need to sync with an existing database:
```bash
npx prisma db pull
```

## Production Considerations

### Migrations
For production deployments, use migrations instead of `db push`:

```bash
# Create a new migration
npx prisma migrate dev --name your_migration_name

# Deploy migrations to production
npx prisma migrate deploy
```

### Connection Pooling
Consider using connection pooling for production:
- AWS RDS Proxy
- PgBouncer
- Prisma Data Proxy

### Backup Strategy
- Enable automated backups on Aurora PostgreSQL
- Consider point-in-time recovery
- Test backup restoration procedures

## Troubleshooting

### Connection Issues
1. Check your DATABASE_URL format
2. Verify Aurora cluster is running
3. Check security group rules (port 5432)
4. Verify VPC and subnet configuration

### Schema Issues
1. Run `npx prisma generate` after schema changes
2. Use `npx prisma db push` for development
3. Use migrations for production changes

### Performance Issues
1. Add database indexes for frequently queried fields
2. Use connection pooling
3. Monitor query performance with Prisma metrics

## Support

For database-related issues:
1. Check the Prisma documentation: https://www.prisma.io/docs
2. Review AWS Aurora PostgreSQL documentation
3. Check application logs for specific error messages