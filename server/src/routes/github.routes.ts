import { Router } from "express";
import { importRepoController } from "../controllers/github.controller.js";

const router = Router();

router.post("/import-repo", importRepoController);

export default router;