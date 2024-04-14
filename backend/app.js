import express from "express";
import "dotenv/config";
import db from "./db/db.js";

const app = express();
const port = process.env.PORT;

db.connect()
  .then(() => {
    console.log("DB connected !");
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
