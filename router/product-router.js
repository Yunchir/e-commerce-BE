import express from "express";
import multerHandler from "../multer/multer-handler.js";

const Product = express.Router();

Product.get("/product", multerHandler.single(file), async (req, res) => {
  const { secure_url } = await uploadCloud.uploader.upload(req.file.path, {
    folder: "product",
  });
  const newproduct = {
    image: secure_url,
    ...JSON.parse(req.body.details),
  };
});

export default productRouter;
