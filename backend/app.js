import express from "express";
import "dotenv/config";
import cors from "cors";
import db from "./db/db.js";
import taskRouter from "./controllers/task_controller.js";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use("/task", taskRouter);

db.connect()
  .then(() => {
    console.log("DB connected !");
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
