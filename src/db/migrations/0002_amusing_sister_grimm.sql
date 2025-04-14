CREATE TABLE "preferences" (
	"id" serial NOT NULL,
	"weight" integer,
	"length" integer,
	"restTimer" integer,
	"height" integer,
	"bodyWeight" integer
);
--> statement-breakpoint
ALTER TABLE "preferences" ADD CONSTRAINT "preferences_id_users_table_id_fk" FOREIGN KEY ("id") REFERENCES "public"."users_table"("id") ON DELETE no action ON UPDATE no action;