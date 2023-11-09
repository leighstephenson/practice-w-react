-- CREATE DATABASE "practice-w-react"
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "access_level" INT DEFAULT 0
);

CREATE TABLE "notelist" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "notetitle" VARCHAR(80) NOT NULL,
    "dateadded" DATE,
    "notecontent" VARCHAR (1000)
);

