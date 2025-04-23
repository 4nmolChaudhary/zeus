'use server'
import { db } from '@/db'
import { usersTable, preferences } from '@/db/schemas'
import { UserPreference } from '@/types/preferences'

export const getUsers = async () => {
  return await db.select().from(usersTable)
}

export const addPreferences = async (user: UserPreference) => {
  //return db.insert(preferences).values(user)
}
