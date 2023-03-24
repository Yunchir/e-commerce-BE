import express from "express";
import cors from "cors";
import prodRouter from "./router/product-router.js";
import mongooseConfig from "./config/mongoose-config.js";

const app = express();
const port = 6060;

app.use(cors());
app.use(express.json());
app.use(prodRouter);

app.listen(port, () => {
  console.log("localhost :", port);
});
