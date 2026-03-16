import { getAllUsers, createUser } from "../services/users.js";

export function userRoutes(app) {
  app.get("/users", async (req, res) => {
    try {
      const users = await getAllUsers();
      return res.json(users);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  });

  app.post("/users", async (req, res) => {
    try {
      const user = await createUser(req.body);
      return res.status(201).json(user);
    } catch (err) {
      // Better error payload:
      return res.status(400).json({
        message: err.message,
        errors: err.errors, // field-by-field validation errors
      });
    }
  });
}
