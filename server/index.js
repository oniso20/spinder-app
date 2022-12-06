'use strict';

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || 'localhost';

const express = require('express');
const { MongoClient } = require('mongodb');
const { v1: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');
require('dotenv').config();

const uri = process.env.URI;

const app = express();
app.use(cors());
app.use(express.json());

app.post('/login', async (req, res) => {
    const client = new MongoClient(uri);
    const { email, password } = req.body;

    try {
        await client.connect();
        const database = client.db('spinder-data');
        const users = database.collection('users');

        const user = await users.findOne({ email });

        const correctPassword = await bcrypt.compare(password, user.hashedPassword);

        if (user && correctPassword) {
            const token = jwt.sign(user, email, {
                expiresIn: 60 * 24
            });
            res.status(201).json({ token, userId: user.user_id, email });
        }
        res.status(400).send('Invalid Credentials');
    } catch (error) {
        console.log(error);
    }
});

app.get('/', (req, res) => {
    res.json('Hello to my Spinder App');
});

app.post('/signup', async (req, res) => {
    const client = new MongoClient(uri);
    const { email, password } = req.body;

    const generatedUserId = uuidv4();
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await client.connect();
        const database = client.db('spinder-data');
        const users = database.collection('users');

        const existingUser = await users.findOne({ email });

        if (existingUser) {
            return res.status(409).send('User already exists. Please login');
        }

        const sanitizedEmail = email.toLowerCase();

        const data = {
            user_id: generatedUserId,
            email: sanitizedEmail,
            hashedPassword: hashedPassword
        };

        const insertedUser = await users.insertOne(data);

        const token = jwt.sign(insertedUser, sanitizedEmail, { expiresIn: 60 * 24 });

        res.status(201).json({
            token,
            userId: generatedUserId,
            email: sanitizedEmail
        });


    } catch (error) {
        console.log(error);
    }

});

app.get('/users', async (req, res) => {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('spinder-data');
        const users = database.collection('users');

        const returnedUsers = await users.find().toArray();
        res.send(returnedUsers);
    } finally {
        await client.close();
    }
});


app.listen(PORT, HOST, () => {
    console.log(`Server at ${HOST}:${PORT} is listening...`);
})

