import { Restaurant } from "../models/Restaurant.js";

export async function getAllRestaurants() {
  return Restaurant.find();
}

export async function getRestaurantsByCuisine(cuisine) {
  return Restaurant.find({ cuisine });
}

export async function getRestaurantsById(sortBy) {
  const q = String(sortBy || "").toUpperCase();
  const sortDir = q === "DESC" ? -1 : 1;

  return Restaurant.find(
    {},
    { _id: 1, cuisine: 1, name: 1, city: 1, restaurant_id: 1 },
  ).sort({ restaurant_id: sortDir });
}

export function getDelicatessenNotBrooklyn() {
  return Restaurant.find(
    { cuisine: "Delicatessen", city: { $ne: "Brooklyn" } },
    { _id: 0, cuisine: 1, name: 1, city: 1 },
  ).sort({ name: 1 });
}

export function seedRestaurants(seedData) {
  return Restaurant.insertMany(seedData, { ordered: true });
}
