/*
  Warnings:

  - You are about to drop the column `access_token` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `expires_at` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `id_token` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `refresh_token` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `scope` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `session_state` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `token_type` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `verificationtoken` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `session` DROP FOREIGN KEY `Session_userEmail_fkey`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `access_token`,
    DROP COLUMN `expires_at`,
    DROP COLUMN `id_token`,
    DROP COLUMN `refresh_token`,
    DROP COLUMN `scope`,
    DROP COLUMN `session_state`,
    DROP COLUMN `token_type`;

-- DropTable
DROP TABLE `session`;

-- DropTable
DROP TABLE `verificationtoken`;

-- CreateTable
CREATE TABLE `UnverifiedUser` (
    `email` VARCHAR(191) NOT NULL,
    `code` INTEGER NOT NULL,

    UNIQUE INDEX `UnverifiedUser_code_key`(`code`),
    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
