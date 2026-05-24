import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Add seed data here
  // Example:
  // const user = await prisma.user.create({
  //   data: {
  //     email: 'test@example.com',
  //     name: 'Test User',
  //   },
  // });

  console.log('✅ Database seed completed successfully');
}

main()
  .catch((e) => {
    console.error('❌ Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
