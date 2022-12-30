/*
  Warnings:

  - You are about to drop the column `emailVerified` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `account` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `account` DROP FOREIGN KEY `Account_userId_fkey`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `emailVerified`,
    ADD COLUMN `access_token` TEXT NULL,
    ADD COLUMN `expires_at` INTEGER NULL,
    ADD COLUMN `id_token` TEXT NULL,
    ADD COLUMN `refresh_token` TEXT NULL,
    ADD COLUMN `scope` VARCHAR(191) NULL,
    ADD COLUMN `session_state` VARCHAR(191) NULL,
    ADD COLUMN `token_type` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `account`;
