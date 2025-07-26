ALTER TABLE "preferences" DROP CONSTRAINT "preferences_id_users_table_id_fk";
--> statement-breakpoint
ALTER TABLE "preferences" ADD CONSTRAINT "preferences_id_user_id_fk" FOREIGN KEY ("id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;