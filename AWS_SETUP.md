# AWS Setup Instructions

This document provides step-by-step instructions for setting up AWS services for the Kiro CRM application.

## Prerequisites

1. AWS Account with appropriate permissions
2. AWS CLI installed and configured
3. Amplify CLI installed globally: `npm install -g @aws-amplify/cli`

## Setup Steps

### 1. Configure Amplify CLI

```bash
amplify configure
```

Follow the prompts to:
- Sign in to your AWS console
- Create an IAM user with appropriate permissions
- Configure the CLI with your access keys

### 2. Initialize Amplify Project

```bash
amplify init
```

Configuration options:
- Project name: `kiro-crm`
- Environment name: `dev`
- Default editor: Your preferred editor
- App type: `javascript`
- Framework: `react`
- Source directory: `src`
- Distribution directory: `dist`
- Build command: `npm run build`
- Start command: `npm run dev`

### 3. Add Authentication (Cognito)

```bash
amplify add auth
```

Configuration options:
- Default configuration with username
- Sign-in method: Email
- Advanced settings: No

### 4. Add GraphQL API (AppSync)

```bash
amplify add api
```

Configuration options:
- GraphQL
- API name: `kirocrm`
- Authorization type: Amazon Cognito User Pool
- Additional authorization types: No
- Conflict resolution: Auto Merge
- Schema template: Single object with fields

### 5. Add Database (Aurora PostgreSQL)

```bash
amplify add storage
```

Configuration options:
- SQL Database
- PostgreSQL
- Database name: `kirocrm`
- Advanced settings as needed

### 6. Deploy Backend

```bash
amplify push
```

This will:
- Create CloudFormation stacks
- Deploy Cognito User Pool
- Deploy AppSync GraphQL API
- Deploy Aurora PostgreSQL database
- Generate `aws-exports.js` file

### 7. Update Configuration

After deployment, the `aws-exports.js` file will be automatically generated with your actual AWS resource IDs. Replace the placeholder values in `src/aws-exports.ts` with the generated configuration.

## Environment Variables

Create a `.env` file in the project root with any additional configuration:

```env
VITE_AWS_REGION=us-east-1
VITE_APP_NAME=Kiro CRM
```

## Testing

1. Start the development server: `npm run dev`
2. Navigate to `http://localhost:5173`
3. Test authentication flow
4. Verify GraphQL API connectivity

## Troubleshooting

### Common Issues

1. **Authentication not working**: Check Cognito User Pool configuration
2. **GraphQL errors**: Verify AppSync API permissions and schema
3. **Database connection issues**: Check Aurora PostgreSQL security groups and VPC settings

### Useful Commands

- `amplify status` - Check current backend status
- `amplify console` - Open Amplify console in browser
- `amplify pull` - Pull latest backend configuration
- `amplify env list` - List all environments

## Security Notes

- Never commit `aws-exports.js` or `.env` files to version control
- Use IAM roles with minimal required permissions
- Enable MFA for production environments
- Regularly rotate access keys and secrets