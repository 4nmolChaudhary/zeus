import config from '../../drizzle.config'
import { drizzle } from 'drizzle-orm/node-postgres'
import { migrate } from 'drizzle-orm/node-postgres/migrator'
import { Pool } from 'pg'

const pool = new Pool({ connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}` })
const db = drizzle(pool)

async function main() {
  if (config.out) {
    await migrate(db, { migrationsFolder: config.out })
    console.log('Migration done!')
  }
}

main()
  .catch(e => {
    console.error(e)
  })
  .finally(async () => {
    await pool.end()
  })
