import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '@/db'
import { user, verification, session, account } from '@/db/schemas/auth'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: { user, verification, session, account },
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
})
