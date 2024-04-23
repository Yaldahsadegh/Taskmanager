import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Card } from "react-bootstrap";

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
        console.log(response.data.task[0]);
        setTask(response.data.task[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      {task ? (
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{task.name}</Card.Title>
            <Card.Text>{task.content}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ) : (
        <p>No task to display</p>
      )}
    </Container>
  );
};

export default TaskView;
