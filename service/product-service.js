import Product from "../model/productModel.js";

export const addProduct = async (productDetails) => {
  const newProduct = new Product(productDetails);
  const result = await newProduct.save();
  return result;
};

export const getProduct = async () => {
  const result = await Product.find({});
  return result;
};
