import mongoose from "mongoose";

let user = new mongoose.Schema({
  name: String,
  email: String,
  number: Number,
});
