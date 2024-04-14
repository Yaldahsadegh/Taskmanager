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
