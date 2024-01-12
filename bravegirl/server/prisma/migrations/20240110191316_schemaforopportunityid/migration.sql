-- DropForeignKey
ALTER TABLE "Volunteer" DROP CONSTRAINT "Volunteer_opportunityId_fkey";

-- AlterTable
ALTER TABLE "Volunteer" ALTER COLUMN "opportunityId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Volunteer" ADD CONSTRAINT "Volunteer_opportunityId_fkey" FOREIGN KEY ("opportunityId") REFERENCES "VolunteerOpportunity"("id") ON DELETE SET NULL ON UPDATE CASCADE;
