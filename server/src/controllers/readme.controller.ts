import { type Request, type Response } from "express";
import { generateReadme } from "../services/readme.service.js";

export function generateReadmeController(
  req: Request,
  res: Response
) {
  console.log("BODY:");
  console.dir(req.body, { depth: null });

  const markdown = generateReadme(req.body);

  res.status(200).json({
    success: true,
    markdown,
  });
}