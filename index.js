import express from "express";
import cors from "cors";

const app = express();
const port = 6060;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log("localhost :", port);
});
