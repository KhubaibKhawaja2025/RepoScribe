import { type Request, type Response } from "express";
import { importRepository } from "../services/github.service.js";

export async function importRepoController(
  req: Request,
  res: Response
) {
  try {
    const repository = await importRepository(req.body.repoUrl);

    res.status(200).json(repository);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to import repository",
    });
  }
}