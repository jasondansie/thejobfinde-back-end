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

app.use('/api/v1/jobs', jobRouter);


// app.get('/api/v1/jobs/:id', (req: Request, res: Response) => {
//   console.log('finding one job');
//   Job.findOneAndUpdate({ _id: '123' }, { job: 'Frontend Developer' })
//     .then((job) => {
//       console.log(job);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// });

app.delete('/api/v1/jobs/:id', (req: Request, res: Response) => {
  Job.findOneAndDelete({ _id: '123' })
    .then(() => {
      console.log('Job deleted successfully');
    })
    .catch((err) => {
      console.error(err);
    });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
