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

  const handleDelete = () => {
    axios
      .delete(`http://localhost:4000/task/${params.id}`)
      .then((response) => {
        console.log(response);
        setTask(null);
      })
      .catch((err) => console.log(err));
  };
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
  }, [params.id]);

  return (
    <Container>
      {task ? (
        <Card style={{ width: "18rem" }} className="mt-3">
          <Card.Body>
            <Card.Title>{task.name}</Card.Title>
            <Card.Text>{task.content}</Card.Text>
            <Card.Text>{task.startdate}</Card.Text>
            <Card.Text>{task.enddate}</Card.Text>
            <Card.Text>
              {task &&
                (task.status === 1
                  ? "New Task"
                  : task.status === 2
                  ? "In Process"
                  : task.status === 3
                  ? "Task Completed"
                  : task.status === 4
                  ? "Task Canceled"
                  : "Unknown Status")}
            </Card.Text>
            <Button variant="warning" className="me-1">
              Edit
            </Button>

            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <p>No task to display</p>
      )}
    </Container>
  );
};

export default TaskView;
