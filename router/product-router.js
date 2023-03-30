import express from "express";
import cloudinary from "../config/cloudinary-config.js";
import multerHandler from "../multer/multer-handler.js";
import { addProduct, getProduct } from "../service/product-service.js";

const prodRouter = express.Router();

prodRouter.get("/products", async (req, res) => {
  console.log("product GET huselt");
  const result = await getProduct();
  try {
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ error: "not found" });
  }
});

// prodRouter.delete("/delete", () => {});

prodRouter.post(
  "/products/add",
  multerHandler.single("file"),
  async (req, res) => {
    console.log("post request", req.body.details);
    console.log("post file", req.file);
    const { secure_url } = await cloudinary.v2.uploader.upload(req.file.path, {
      folder: "product",
    });
    const newproduct = {
      image: secure_url,
      ...JSON.parse(req.body.details),
    };
    const result = await addProduct(newproduct);
    try {
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send({ error: "not working" });
    }
  }
);

export default prodRouter;
