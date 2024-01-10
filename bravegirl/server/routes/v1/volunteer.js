// add routes for creating volunteers

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();


//  add routes for creating volunteers

// create volunteer
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, address, city, state,  availability, skills, interests, profession, opportunity } = req.body;
        const volunteerSkills = skills.split(',');
        const skillObjects = volunteerSkills.map(skill => ({
           where: {name: skill},
            create: {name: skill},
          }));
        const volunteerInterests = interests.split(',');

        const interestObjects = volunteerInterests.map(interest => ({
           where: { name: interest },
           create: { name: interest },
          }));
        // validate request
        if (!name || !email || !phone || !city  || !availability ) {
            return res.status(400).json({ error: 'Please provide all required information' });
        }
        const volunteerData = {
            name,
            email,
            phone,
            address,
            city,
            state,
            availability,
            skills: {
              connectOrCreate: skillObjects,
            },
            interests: {
              connectOrCreate: interestObjects,
            },
            profession,
          };
          
          if (opportunity) {
            volunteerData.opportunity = {
              connect: {
                id: opportunity.id,
              },
            };
          }

        // create a new volunteer
        const volunteer = await prisma.volunteer.create({
            data: volunteerData,
            include: {
              skills: true,
              interests: true,
            },
        });
        res.status(200).json(volunteer);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Failed to create a new volunteer' });
    }
});

// update a volunteer

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone, address, city, state,  availability, skills, interests, profession, opportunity } = req.body;
        const updatedVolunteer = await prisma.volunteer.update({
            where: {
                id: parseInt(id),
            },
            data: {
                name,
                email,
                phone,
                address,
                city,
                state,
                availability,
                skills,
                interests,
                profession,
                opportunity,
            },
        });
        res.status(200).json(updatedVolunteer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update volunteer' });
    }
});

// Get all volunteers
router.get('/', async (req, res) => {
    try {
        const volunteers = await prisma.volunteer.findMany();
        res.status(200).json(volunteers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to get all volunteers' });
    }
});

// Get a volunteer
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const volunteer = await prisma.volunteer.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        res.status(200).json(volunteer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to get volunteer' });
    }
});
module.exports = router;