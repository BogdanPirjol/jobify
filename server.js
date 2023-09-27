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
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

config();
const app = express();
app.use(express.json());
app.use(express.static(resolve(__dirname, './front-end/build')));

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);
app.use("/api/v1/user", userRouter);

app.get('*',  (req, res) => {
  res.sendFile(resolve(__dirname, './front-end/build', 'index.html'));
});

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
