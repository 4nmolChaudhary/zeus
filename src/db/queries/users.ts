'use server'
import { db } from '@/db'
import { usersTable, preferences } from '@/db/schemas'

export const getUsers = async () => {
  return await db.select().from(usersTable)
}

export const addPreferences = async user => {
  return db.insert(preferences).values(user)
}
