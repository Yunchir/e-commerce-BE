let productSchema = new mongoose.Schema(
  {
    name: String,
    id: Number,
    sale: Number,
    price: Number,
    stock: Number,
    discription: String,
    catecory: String,
  },
  {
    collection: "product",
  }
);

const Product = mongoose.model("image", productSchema, "product");

export default Product;
