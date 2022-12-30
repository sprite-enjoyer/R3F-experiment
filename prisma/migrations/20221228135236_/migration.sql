/*
  Warnings:

  - You are about to drop the column `access_token` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `expires_at` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `id_token` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `refresh_token` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `scope` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `token_type` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `access_token`,
    DROP COLUMN `expires_at`,
    DROP COLUMN `id_token`,
    DROP COLUMN `refresh_token`,
    DROP COLUMN `scope`,
    DROP COLUMN `token_type`;
