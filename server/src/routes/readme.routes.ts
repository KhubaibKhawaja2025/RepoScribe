import { Router } from 'express';
import { generateReadmeController } from '../controllers/readme.controller.js';

const router = Router();

router.post("/generate-readme", generateReadmeController);

export default router;