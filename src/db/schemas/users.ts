import { integer, pgTable, serial, text, timestamp, AnyPgColumn } from 'drizzle-orm/pg-core'

export const usersTable = pgTable('users_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  age: integer('age').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at', { mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string' }).notNull().defaultNow(),
})

export const preferences = pgTable('preferences', {
  id: serial('id').references((): AnyPgColumn => usersTable.id),
  weight: integer('weight'),
  length: integer('length'),
  restTimer: integer('rest_timer'),
  height: integer('height'),
  bodyWeight: integer('body_weight'),
})
