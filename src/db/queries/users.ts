'use server'
import { db } from '@/db'
import { usersTable, preferences, user } from '@/db/schemas'
import { UserPreference } from '@/types/preferences'
import { eq } from 'drizzle-orm'

export const getUsers = async () => {
  return await db.select().from(usersTable)
}

export const getPreferences = async ({ id }: { id: string }) => {
  const foundUser = await db.select().from(user).where(eq(user.id, id))
  return foundUser[0]
  //return db.insert(preferences).values(user)
}
