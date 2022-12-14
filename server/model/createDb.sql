CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(255) NOT NULL,
	email VARCHAR(255),
	password VARCHAR(255),
	org_id INT);

CREATE TABLE org (
	id SERIAL PRIMARY KEY,
	org_name VARCHAR(255) NOT NULL);

CREATE TABLE todos (
	id SERIAL PRIMARY KEY,
	todos VARCHAR(255),
  complete BOOLEAN,
  org_id INT NOT NULL,
  users_id INT);



ALTER TABLE "todos" ADD CONSTRAINT "todos_fk0" FOREIGN KEY ("org_id") REFERENCES "org"("id");
ALTER TABLE "todos" ADD CONSTRAINT "todos_fk1" FOREIGN KEY ("users_id") REFERENCES "users"("id");
