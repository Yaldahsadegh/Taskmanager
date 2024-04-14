import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

/*
git remote add origin https://github.com/Yaldahsadegh/Taskmanager.git
git branch -M main
git push -u origin main
*/
