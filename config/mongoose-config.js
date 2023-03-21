import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://yunchir:89545650Yu@cluster0.gqhbgdd.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connect"));

export default mongoose.connection;
