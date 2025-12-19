/** @type {import('prisma/config').PrismaConfig} */
module.exports = {
  migrate: {
    datasourceUrl: process.env.DATABASE_URL,
  },
}
