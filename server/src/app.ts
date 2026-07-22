import cors from "cors";
import express, { type Express } from "express";
import readmeRoutes from "./routes/readme.routes.js";

const app: Express = express();

app.disable("x-powered-by");

app.use(cors());
app.use(express.json());

app.use("/api", readmeRoutes);

app.get("/", (_req, res) => {
  res.json({
    message: "RepoScribe API is running 🚀",
  });
});

export default app;