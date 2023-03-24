import mongoose from "mongoose";

let productSchema = new mongoose.Schema(
  {
    name: String,
    id: Number,
    sale: Number,
    price: Number,
    stock: Number,
    description: String,
    catecory: String,
    image: String,
  },
  {
    collection: "products",
  }
);

const Product = mongoose.model("product", productSchema, "products");

export default Product;
