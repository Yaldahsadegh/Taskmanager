import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllTasks = () => {
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
      <Container>
        <div>
          {tasks ? (
            tasks.map((task, i) => (
              <Card style={{ width: "18rem" }} key={i} className="mt-3">
                <Card.Body>
                  <Card.Title>{task.name}</Card.Title>
                  <Card.Text>{task.content}</Card.Text>
                  <Link to={`/view/${task.id}`}>
                    <Button variant="primary">View</Button>
                  </Link>
                </Card.Body>
              </Card>
            ))
          ) : (
            <div>No data to display</div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default AllTasks;
