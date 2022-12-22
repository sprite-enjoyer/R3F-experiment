/*
  Warnings:

  - Added the required column `dob` to the `UnverifiedUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `UnverifiedUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `UnverifiedUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `unverifieduser` ADD COLUMN `dob` INTEGER NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(127) NOT NULL;
