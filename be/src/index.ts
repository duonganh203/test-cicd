import express, { Express, Request, Response } from "express";
import cors from "cors";
const app: Express = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("App working!");
});
