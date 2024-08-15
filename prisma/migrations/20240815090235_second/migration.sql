/*
  Warnings:

  - The primary key for the `reserve` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `reserve` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "reserve" DROP CONSTRAINT "reserve_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "reserve_pkey" PRIMARY KEY ("author_id");
