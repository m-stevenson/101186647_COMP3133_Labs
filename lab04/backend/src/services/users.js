import { User } from "../models/User.js";

export async function createUser(userData) {
  const user = new User(userData);
  return await user.save();
}

export async function getAllUsers() {
  return await User.find();
}
