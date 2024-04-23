import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TaskView = () => {
  interface Task {
    id: number;
    name: string;
    content: string;
    startdate: string;
    enddate: string;
    status: number;
  }

  const params = useParams();
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/task/${params.id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div>TaskView</div>;
};

export default TaskView;
