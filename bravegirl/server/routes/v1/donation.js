//  add routes for  donations FULLNAME EMAIL ADDRESS PHONE ADDRESS CITY STATE
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();


// create donation
router.post('/', async (req, res) => {
    try {
        const { fullname, email, phone, address, city, state, amount } = req.body;
        // validate request
        if (!fullname || !email || !phone || !address || !amount) {
            return res.status(400).json({ error: 'Please provide all required information' });
        }
        // create a new donation
        const donation = await prisma.donation.create({
            data: {
                fullname,
                email,
                phone,
                address,
                city,
                state,
                amount
            },
        });
        res.status(200).json(donation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create a new donation' });
    }
});


// get all donations
router.get('/', async (req, res) => {
    try {
        const donations = await prisma.donation.findMany();
        res.status(200).json(donations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to get all donations' });
    }
});

// get a single donation
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const donation = await prisma.donation.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        res.status(200).json(donation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to get donation' });
    }
});

// update a donation
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { fullname, email, phone, address, city, state } = req.body;
        // validate request
        if (!fullname || !email || !phone || !address) {
            return res.status(400).json({ error: 'Please provide all required information' });
        }
        const updatedDonation = await prisma.donation.update({
            where: {
                id: parseInt(id),
            },
            data: {
                fullname,
                email,
                phone,
                address,
                city,
                state,
            },
        });
        res.status(200).json(updatedDonation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update donation' });
    }
});

module.exports = router;


