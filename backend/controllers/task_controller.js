import express from "express";
import bodyParser from "body-parser";
import { createTask } from "../services/task_service.js";

const taskRouter = express.Router();
taskRouter.use(bodyParser.urlencoded({ extended: false }));

//API FOR CREATE TASK
taskRouter.post("/create", async (req, res) => {
  try {
    const { name, content, startdate, enddate, status } = req.body;
    const task = await createTask(name, content, startdate, enddate, status);
    res.status(200).json({
      message: "success",
    });
  } catch (error) {
    console.log(error);
  }
});

export default taskRouter;
