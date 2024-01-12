/*
  Warnings:

  - Added the required column `address` to the `Donation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Donation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `Donation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Donation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Donation" DROP CONSTRAINT "Donation_donorId_fkey";

-- AlterTable
ALTER TABLE "Donation" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "state" TEXT,
ALTER COLUMN "donorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
