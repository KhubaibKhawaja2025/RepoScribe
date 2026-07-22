import { type Request, type Response } from 'express';
import { generateReadme } from '../services/readme.service.js';

export function generateReadmeController(
    req: Request,
    res: Response
) {
    const markdown = generateReadme(req.body);

    res.status(200).json({
        success: true,
        markdown,
    });
}