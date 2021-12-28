import express, {Request, Response} from 'express';
import {statModel} from '../models/statModel';
export const router = express.Router();
import cors from 'cors';

import * as apiManager from '../models/apiModel';

router.use(cors());

router.get('/', async (req: Request, res: Response) => {
  const result = await statModel.findAll();
  res.status(200).json(result);
});

router.get('/test', async (req: Request, res: Response) => {
  await apiManager.saveCovidStats();
  res.status(200).json({});
});
