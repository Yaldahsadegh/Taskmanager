import express from "express";
import bodyParser from "body-parser";
import { createTask, allTasks, viewTasks } from "../services/task_service.js";

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

//API FOR home TASK
taskRouter.get("/all", async (req, res) => {
  try {
    const tasks = await allTasks();
    res.status(200).json({
      message: "success",
      allTasks: tasks.rows,
    });
  } catch (error) {
    console.log(error);
  }
});

//API FOR task view
taskRouter.get("/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await viewTasks(taskId);
    if (task.rowCount > 0) {
      res.status(200).json({
        message: "success",
        task: task.rows,
      });
    } else {
      res.status(200).json({
        message: "false",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

export default taskRouter;
