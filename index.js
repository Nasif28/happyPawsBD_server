import express from 'express';
// import multer from 'multer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

import Routes from './server/route.js';
import Connection from './database/db.js';

const app = express();
dotenv.config();

// To handle HTTP POST requests in Express.js version 4 and above, 
// you need to install the middleware module called body-parser.
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// app.use("/uploads", express.static("uploads"));

// Set up Multer for handling file uploads
// const storage = multer.diskStorage({
//     destination: (request, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (request, file, cb) => {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//         cb(null, uniqueSuffix + '-' + file.originalname);
//     },
// });
// export const upload = multer({ storage });

app.use('/', Routes);

const PORT = '5000';
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT, () => console.log(`Happy Paws BD Server is running successfully on PORT ${PORT}`));