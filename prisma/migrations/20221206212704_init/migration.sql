/*
  Warnings:

  - You are about to drop the column `roomID` on the `furniture` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `furniture` DROP FOREIGN KEY `Furniture_roomID_fkey`;

-- AlterTable
ALTER TABLE `furniture` DROP COLUMN `roomID`,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;

-- CreateTable
CREATE TABLE `FurnitureInRooms` (
    `roomID` INTEGER NOT NULL,
    `furnitureID` INTEGER NOT NULL,

    PRIMARY KEY (`roomID`, `furnitureID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FurnitureInRooms` ADD CONSTRAINT `FurnitureInRooms_roomID_fkey` FOREIGN KEY (`roomID`) REFERENCES `Room`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FurnitureInRooms` ADD CONSTRAINT `FurnitureInRooms_furnitureID_fkey` FOREIGN KEY (`furnitureID`) REFERENCES `Furniture`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
