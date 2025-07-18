import express, { NextFunction, Request, Response } from "express";
import cors, { CorsOptions, CorsOptionsDelegate } from 'cors';
import router from "./routes";
import morgan from "morgan";
import { FRONTEND_URL, CRONJOB_URL } from "./config/envs";

const app = express();

const corsOptions = {
  origin: "https://hyteria-3d-shop.vercel.app",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));

app.use(router);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).send({
    statusCode: err.statusCode || 500,
    message: err.message || "Internal Server Error",
  });
});

export default app;
