import 'dotenv/config';
import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import { router } from './routes';
import ErrorMiddleware from './middlewares/error.middleware';

const app: Application = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api', router);
app.use(ErrorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL || '');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
