import async_err from "express-async-errors";
import express from "express";
import { config } from "dotenv";
import notFoundHand from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";
import asyncWrapper from "./asyncWrapper.js";
import connectDB from "./DB/connectDB.js";
import authRouter from "./routes/authRoute.js";
import jobsRouter from "./routes/jobsRoute.js";
import userRouter from "./routes/userRoute.js";
import morgan from "morgan";

config();
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

const testController = (req, res) => {
  throw new Error("test error");
};

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);
app.use("/api/v1/user", userRouter);

app.use(notFoundHand);
app.use(errorHandler);

const run = async () => {
  const sequelize = connectDB();
  try {
    console.log("TESTING DB CONNECTION ...");
    await sequelize.authenticate();
    /* await sequelize.drop({
      supportsSearchPath:false
    }); */
    await sequelize.sync();
  } catch (err) {
    console.log("FATAL ERROR: ");
    console.log(err.message);
    process.exit(-1);
  }
  app.listen(port, () => {
    console.log(
      `Server starts and listens for incoming connection on port ${port}`
    );
  });
};

run();
