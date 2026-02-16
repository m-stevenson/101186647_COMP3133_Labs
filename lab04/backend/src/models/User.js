import mongoose, { Schema } from "mongoose";
import validator from "validator";

const userSchema = new Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, match: [/.+\@.+\..+/] },
  address: {
    street: { type: String, required: true },
    suite: { type: String, required: true },
    city: { type: String, required: true, match: /^[A-Za-z0-9\s]+$/ },
    zipcode: {
      type: String,
      required: true,
      match: /^[0-9]{5}(?:-[0-9]{4})?$/,
    },
    geo: {
      lat: { type: String, required: true },
      lng: { type: String, required: true },
    },
  },
  website: {
    type: String,
    required: true,
    validate: {
      validator: (value) =>
        validator.isURL(value, {
          protocols: ["http", "https"],
          require_tld: true,
          require_protocol: true,
        }),
      message: "Must be a Valid URL",
    },
  },

  phone: {
    type: String,
    required: true,
    match: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  },
  company: {
    name: { type: String, required: true },
    catchPhrase: { type: String, required: true },
    bs: { type: String, required: true },
  },
});

export const User = mongoose.model("User", userSchema);
