import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import dotenv from "dotenv";
import connectDB from "./db/index.js";
// require("dotenv").config({ path: "./env" });

dotenv.config({
  path: "./.env",
});

connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(` Server is running at port: ${process.env.PORT}`);
    
  })
})
.catch((err) => {
  console.error("MONGODB CONNECTION FAILED ", err);
})

/*

import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.error("Error", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });

  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();

*/
