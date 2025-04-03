'use server'
import { db } from '@/db'
import { usersTable } from '@/db/schemas'

export const getUsers = async () => {
  return await db.select().from(usersTable)
}
