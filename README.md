cd /mnt/agents/output/sgm-app
npm install
cp .env.example .env
# Edit .env with your database credentials
npm run db:generate
npm run db:migrate
npm run db:seed
npm run dev