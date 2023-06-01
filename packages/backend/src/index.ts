import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";
import { StatusCodes } from "http-status-codes";

require("express-async-errors");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.raw());
app.use(morgan("dev"));

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  return res.status(StatusCodes.OK).json({ msg: `Working on port: ${port}.` });
});

const startServer = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
