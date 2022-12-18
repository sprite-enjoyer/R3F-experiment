/*
  Warnings:

  - A unique constraint covering the columns `[roomID]` on the table `Furniture` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Furniture_roomID_key` ON `Furniture`(`roomID`);
