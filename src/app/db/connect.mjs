import mongoose from "mongoose";

const connectToDb = () => {
  const mongoUrl = process.env.MONGO_URI || "";
  mongoose
    .connect(mongoUrl)
    .then(() => {
      console.log("DB connected successfully");
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};

export default connectToDb;
