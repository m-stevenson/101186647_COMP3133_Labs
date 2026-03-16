import express from "express";
import { userRoutes } from "./routes/users.js";
const app = express();

app.use(express.json());
userRoutes(app);

app.get("/", (req, res) => {
  res.send("Pong");
});

export { app };
