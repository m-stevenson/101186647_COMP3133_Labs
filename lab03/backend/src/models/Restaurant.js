import mongoose, { mongo, Schema } from "mongoose";

const restaurantSchema = new Schema({
  restaurant_id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  cuisine: { type: String, required: true },
  city: { type: String, required: true },
  address: {
    building: String,
    street: String,
    zipcode: String,
  },
});

export const Restaurant = mongoose.model("Restaurant", restaurantSchema);