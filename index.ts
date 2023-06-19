import mongoose from 'mongoose';
import express, { Request, Response } from 'express';
import cors from 'cors';

import { port, host } from './serverConfig.json';

import Job from './models/jobs';

import connectDB from './db/dbConnection';

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

import jobRouter from './routes/jobs';
import userRouter from './routes/users';

app.use('/api/v1/jobs', jobRouter);
app.use('/api/v1/user', userRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
