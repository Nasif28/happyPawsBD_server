import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

import Routes from './server/route.js';
import Connection from './database/db.js';

const app = express();
dotenv.config();

// app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(
    {
        origin: 'https://happypawsbd.vercel.app', // Allow requests from this origin
        methods: ['GET', 'POST'],      // Allow only specified HTTP methods
        credentials: true,
        allowedHeaders: ['application/json'], // Allow only specified headers
    }
));

app.use('/', Routes);

const PORT = '5000';
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT, () => console.log(`Happy Paws BD Server is running successfully on PORT ${PORT}`));