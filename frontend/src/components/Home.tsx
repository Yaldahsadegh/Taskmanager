import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Home = () => {
  interface Task {
    id: number;
    name: string;
    content: string;
    startdate: string;
    enddate: string;
    status: number;
  }

  const [tasks, setTasks] = useState<Task[] | null>(null);

  useEffect(() => {
    //API END POINT
    axios
      .get("http://localhost:4000/task/all")
      .then((response) => {
        console.log(response.data.allTasks);
        setTasks(response.data.allTasks as Task[]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      Home
      <div>
        {tasks ? (
          tasks.map((task, i) => (
            <div key={i}>
              <p>{task.name}</p>
              <p>{task.content}</p>
            </div>
          ))
        ) : (
          <div>No data to display</div>
        )}
      </div>
      <Button variant="primary">Primary</Button>
    </div>
  );
};

export default Home;
