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
const allowedOrigins = [
    'https://happypawsbd.onrender.com',  // Production origin
    // 'http://localhost:5173'            // Development origin
];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = `The CORS policy for this site does not allow access from the specified origin: ${origin}`;
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],      // Allow only specified HTTP methods
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow only specified headers
}));

app.use('/', Routes);

const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';  // Ensures the server is accessible from outside the local environment
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

// Or if you have an "images" directory
// app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', (req, res) => {
    res.send('Hello Paws!')
})

app.listen(PORT, HOST, () => console.log(`Happy Paws BD Server is running successfully on PORT ${PORT} & HOST ${HOST}`));