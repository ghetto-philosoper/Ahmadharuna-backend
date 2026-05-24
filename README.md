# Ahmadharuna Backend

Backend API for Slim General Merchant Nigeria Limited

## Overview

This is a Node.js backend application built with:
- **Express.js** - Web framework
- **Prisma ORM** - Database ORM
- **PostgreSQL** - Database
- **TypeScript** - Type safety
- **Docker** - Containerization

## Prerequisites

- Node.js 20+
- Docker & Docker Compose
- PostgreSQL 16 (if running locally without Docker)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ghetto-philosoper/Ahmadharuna-backend.git
   cd Ahmadharuna-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and update the `DATABASE_URL` with your PostgreSQL credentials.

## Running the Application

### Option 1: Using Docker Compose (Recommended)

```bash
# Start services in detached mode
docker compose up -d

# View logs
docker compose logs -f app

# Stop services
docker compose down
```

### Option 2: Running Locally

1. **Start PostgreSQL**
   ```bash
   # Make sure PostgreSQL is running locally
   ```

2. **Generate Prisma client**
   ```bash
   npx prisma generate
   ```

3. **Run migrations**
   ```bash
   npx prisma migrate dev --name init
   ```

4. **Seed the database (optional)**
   ```bash
   npm run db:seed
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

The server will start at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run db:generate` - Generate Prisma client
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with initial data
- `npm run db:studio` - Open Prisma Studio
- `npm run lint` - Run ESLint
- `npm run type-check` - Check TypeScript types

## Project Structure

```
Ahmadharuna-backend/
├── src/
│   └── index.ts              # Main application entry point
├── prisma/
│   ├── schema.prisma         # Database schema
│   └── seed.ts               # Database seeding script
├── dist/                     # Compiled JavaScript (generated)
├── docker-compose.yml        # Docker services configuration
├── Dockerfile                # Docker image configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies and scripts
├── .env.example              # Environment variables template
└── README.md                 # This file
```

## API Endpoints

### Health Check
- `GET /health` - API health status

### API Info
- `GET /api/v1` - API information and version

## Database Management

### View Database (Prisma Studio)
```bash
npm run db:studio
```

### Create Migrations
```bash
npx prisma migrate dev --name <migration_name>
```

### Reset Database (Development Only)
```bash
npx prisma migrate reset
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:password@localhost:5432/ahmadharuna_db?schema=public` |
| `PORT` | Server port | `3000` |
| `NODE_ENV` | Environment | `development`, `production` |

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Commit with clear messages
4. Push to your branch
5. Submit a pull request

## Branch Strategy

This project uses **Trunk-Based Development**:
- `main` branch contains production-ready code
- Feature branches are short-lived and merged frequently
- All deployments are from `main`

## Troubleshooting

### Docker Issues
```bash
# Remove all containers and volumes
docker compose down -v

# Rebuild images
docker compose up --build -d
```

### Database Connection Issues
- Verify `DATABASE_URL` in `.env`
- Ensure PostgreSQL is running and accessible
- Check database credentials

### Prisma Issues
```bash
# Regenerate Prisma client
npx prisma generate

# Reset and re-migrate
npx prisma migrate reset
```

## License

ISC

## Support

For issues and questions, please create a GitHub issue in the repository.

---

**Slim General Merchant Nigeria Limited** © 2026
