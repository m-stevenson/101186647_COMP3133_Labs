import {
  getAllRestaurants,
  getRestaurantsByCuisine,
  getRestaurantsById,
  getDelicatessenNotBrooklyn,
} from "../services/restaurants.js";

export function restaurantRoutes(app) {
  app.get("/restaurants/Delicatessen", async (req, res) => {
    try {
      const data = await getDelicatessenNotBrooklyn();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.get("/restaurants/cuisine/:cuisine", async (req, res) => {
    try {
      const cuisine = req.params.cuisine;
      const data = await getRestaurantsByCuisine(cuisine);
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.get("/restaurants", async (req, res) => {
    try {
      const { sortBy } = req.query;

      if (!sortBy) {
        const data = await getAllRestaurants();
        return res.json(data);
      }

      const dir = String(sortBy).toUpperCase();
      if (dir !== "ASC" && dir !== "DESC") {
        return res.status(400);
      }

      const data = await getRestaurantsById(dir);
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
}
