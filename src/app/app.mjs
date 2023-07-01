import dotenv from "dotenv";
import express from "express";
import connectToDb from "./db/connect.mjs";
import topMiddleware from "./middlewares/toplevel.mjs";
import router from "./router/index.mjs";

dotenv.config();

connectToDb();
const app = express();
topMiddleware(app, express);

app.use("/project", router);

app.get("/", async (req, res, next) => {
  try {
    res.send("Hello from cloud 🌏");
  } catch (error) {
    next(error);
  }
});

//handle not created route
app.use("*", async (req, res, next) => {
  res.status(404);
  res.json({
    msg: "Not Found",
    success: false,
  });
});

//listen app to define PORT
app.listen(5000, () => {
  console.log(`Server running on port ${5000} 🌏`);
});
