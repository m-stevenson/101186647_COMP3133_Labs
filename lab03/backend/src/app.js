import express from "express";
import { restaurantRoutes } from "./routes/restaurants.js";
const app = express();

app.use(express.json());
restaurantRoutes(app);

app.get("/", (req, res) => {
  res.send("Pong");
});

export { app };
