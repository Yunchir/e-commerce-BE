import express from "express";
import multerHandler from "../multer/multer-handler.js";

const productRouter = express.Router();

productRouter.post(
  "/addProduct",
  multerHandler.single(file),
  async (req, res) => {
    const { secure_url } = await uploadCloud.uploader.upload(req.file.path, {
      folder: "product",
    });
    const newProduct = {
      image: secure_url,
      ...JSON.parse(req.body.details),
    };
    console.log("newProduct: ", newProduct);
  }
);

export default productRouter;
