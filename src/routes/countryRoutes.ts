import { Router } from 'express';
import { getCountries } from '../controllers/getCountries';

const router = Router();

router.get('/', getCountries);

export default router;
