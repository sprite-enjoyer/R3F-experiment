-- CreateTable
CREATE TABLE `User` (
    `email` VARCHAR(127) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `dob` DATETIME(3) NOT NULL,

    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Room` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ownerEmail` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Room_ownerEmail_key`(`ownerEmail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FurnitureType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `height` VARCHAR(191) NOT NULL,
    `width` VARCHAR(191) NOT NULL,
    `capacity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Furniture` (
    `id` INTEGER NOT NULL,
    `roomID` INTEGER NOT NULL,
    `type` INTEGER NOT NULL,
    `positionX` INTEGER NOT NULL,
    `positionY` INTEGER NOT NULL,
    `locked` BOOLEAN NOT NULL,
    `color` VARCHAR(63) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_ownerEmail_fkey` FOREIGN KEY (`ownerEmail`) REFERENCES `User`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Furniture` ADD CONSTRAINT `Furniture_type_fkey` FOREIGN KEY (`type`) REFERENCES `FurnitureType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Furniture` ADD CONSTRAINT `Furniture_roomID_fkey` FOREIGN KEY (`roomID`) REFERENCES `Room`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
