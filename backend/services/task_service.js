import db from "../db/db.js";

//CREATE TASK SQL
export const createTask = async (name, content, startdate, enddate, status) => {
  //console.log(name, content, startDate, endDate, tags, status);

  const res = await db.query(
    "insert into task (name, content, startdate, enddate, status) values ($1, $2, $3, $4, $5)",
    [name, content, startdate, enddate, status]
  );
  return res;
};

//ALL TASK SQL
export const allTasks = async () => {
  const res = await db.query("SELECT * FROM task");
  return res;
};

//HOME TASK SQL
export const homeTasks = async () => {
  const res = await db.query(
    "SELECT * FROM task WHERE task.status = 1 OR  task.status = 2"
  );
  return res;
};

//VIEW TASK SQL
export const viewTasks = async (taskId) => {
  const res = await db.query(`SELECT * FROM task WHERE task.id = ${taskId}`);
  return res;
};

//DELETE TASK SQL
export const deleteTasks = async (taskId) => {
  const res = await db.query(`DELETE FROM task WHERE task.id = ${taskId}`);
  return res;
};

//UPDATE TASK SQL
export const updateTask = async (
  id,
  name,
  content,
  startdate,
  enddate,
  status
) => {
  //console.log(name, content, startDate, endDate, tags, status);

  const res = await db.query(
    "UPDATE task SET name = $2, content = $3, startdate = $4, enddate = $5, status = $6 WHERE id = $1",
    [id, name, content, startdate, enddate, status]
  );
  return res;
};

//NEW TASK COUNT SQL
export const newTasksCount = async () => {
  const res = await db.query(
    "SELECT COUNT(*) AS taskcount FROM task WHERE status = 1;"
  );
  return res;
};

//INPROGRESS TASK COUNT SQL
export const inProcessTasksCount = async () => {
  const res = await db.query(
    "SELECT COUNT(*) AS taskcount FROM task WHERE status = 2;"
  );
  return res;
};

//COMPLETED TASK COUNT SQL
export const completedTasksCount = async () => {
  const res = await db.query(
    "SELECT COUNT(*) AS taskcount FROM task WHERE status = 3;"
  );
  return res;
};
