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

const path = require('path');

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
            res.status(201).json({ token, userId: user.user_id });
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
            //email: sanitizedEmail
        });


    } catch (error) {
        console.log(error);
    }

});

app.get('/user', async (req, res) => {
    const client = new MongoClient(uri);
    const userId = req.query.userId;

    try {
        await client.connect();
        const database = client.db('spinder-data');
        const users = database.collection('users');

        const query = { user_id: userId };
        const user = await users.findOne(query);
        res.send(user);

    } finally {
        await client.close();
    }
});


app.get('/users', async (req, res) => {
    const client = new MongoClient(uri);
    const userIds = req.query.userIds;

    try {
        await client.connect();
        const database = client.db('spinder-data');
        const users = database.collection('users');

        const pipeline = [
            {
                $match: {
                    user_id: {
                        $in: userIds,
                    },
                },
            },
        ];

        const usersFound = await users.aggregate(pipeline).toArray();

        res.json(usersFound);
    } catch (error) {
        // Handle the error here
        console.error(error);
    } finally {
        await client.close();
    }
});

app.get('/all-users', async (req, res) => {
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

app.get('/gendered-users', async (req, res) => {
    const client = new MongoClient(uri);
    const gender = req.query.gender;



    try {
        await client.connect();
        const database = client.db('spinder-data');
        const users = database.collection('users');
        const query = { gender_identity: { $eq: gender } };
        const foundUsers = await users.find(query).toArray();

        res.send(foundUsers);
    } finally {
        await client.close();
    }
});

// ml => melody/lyrics
app.get('/ml-preference-users', async (req, res) => {
    const client = new MongoClient(uri);
    const ml = req.query.ml;

    try {
        await client.connect();
        const database = client.db('spinder-data');
        const users = database.collection('users');
        const query = { lyrics_melody_preference: { $eq: ml } };
        const foundUsers = await users.find(query).toArray();

        res.send(foundUsers);
    } finally {
        await client.close();
    }
});

app.get('/mood-preference-users', async (req, res) => {
    const client = new MongoClient(uri);
    const mood = req.query.mood;

    try {
        await client.connect();
        const database = client.db('spinder-data');
        const users = database.collection('users');
        const query = { mood_song_preference: { $eq: mood } };
        const foundUsers = await users.find(query).toArray();

        res.send(foundUsers);
    } finally {
        await client.close();
    }
});

app.get('/credit-preference-users', async (req, res) => {
    const client = new MongoClient(uri);
    const credit = req.query.credit;

    try {
        await client.connect();
        const database = client.db('spinder-data');
        const users = database.collection('users');
        const query = { credit_song_preference: { $eq: credit } };
        const foundUsers = await users.find(query).toArray();

        res.send(foundUsers);
    } finally {
        await client.close();
    }
});


app.put('/user', async (req, res) => {
    const client = new MongoClient(uri);
    const formData = req.body.formData;

    try {
        await client.connect();
        const database = client.db('spinder-data');
        const users = database.collection('users');

        const query = { user_id: formData.user_id };
        const updateDocument = {
            $set: {
                first_name: formData.first_name,
                dob_day: formData.dob_day,
                dob_month: formData.dob_month,
                dob_year: formData.dob_year,
                location: formData.location,
                show_gender: formData.show_gender,
                gender_identity: formData.gender_identity,
                gender_interest: formData.gender_interest,
                url: formData.url,
                about: formData.about,
                lyrics_melody_preference: formData.lyrics_melody_preference,
                credit_song_preference: formData.credit_song_preference,
                mood_song_preference: formData.mood_song_preference,
                eras: formData.eras,
                matches: formData.matches
            },
        };
        const insertedUser = await users.updateOne(query, updateDocument);
        res.send(insertedUser);
    } finally {
        await client.close();
    }


});

app.put('/addmatch', async (req, res) => {
    const client = new MongoClient(uri);
    const { userId, matchedUserId } = req.body;

    try {
        await client.connect();
        const database = client.db('spinder-data');
        const users = database.collection('users');

        const query = { user_id: userId };
        const updateDocument = {
            $push: { matches: { user_id: matchedUserId } },
        };
        const match = await users.updateOne(query, updateDocument);
        res.send(match);
    } finally {
        await client.close();
    }

});

// Get Messages by from_userId and to_userId
app.get('/messages', async (req, res) => {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('spinder-data');
        const messages = database.collection('messages');

        const query = {
            from_userId: req.query.userId,
            to_userId: req.query.correspondingUserId
        };
        const foundMessages = await messages.find(query).toArray();
        res.send(foundMessages);
    } finally {
        await client.close();
    }
});

// Add a Message to our Database
app.post('/message', async (req, res) => {
    const client = new MongoClient(uri);
    const message = req.body.message;

    try {
        await client.connect();
        const database = client.db('spinder-data');
        const messages = database.collection('messages');

        const insertedMessage = await messages.insertOne(message);
        res.send(insertedMessage);
    } finally {
        await client.close();
    }
});

//  Serving the frontend
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});

app.listen(PORT, HOST, () => {
    console.log(`Server at ${HOST}:${PORT} is listening...`);
});




