import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import PieChart from "./PieChart";
import { UserData } from "./Data";

const Home = () => {
  interface Task {
    id: number;
    name: string;
    content: string;
    startdate: string;
    enddate: string;
    status: number;
  }

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.status),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        // backgroundColor: ["red", "blue"],
        backgroundColor: ["rgba(75,192,192,1)", "#ecf0f1", "#50AF95"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const [tasks, setTasks] = useState<Task[] | null>(null);

  useEffect(() => {
    //API END POINT
    axios
      .get("http://localhost:4000/task/home")
      .then((response) => {
        console.log(response.data.allTasks);
        setTasks(response.data.allTasks as Task[]);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:4000/task/status/count")
      .then((response) => {
        console.log(response.data);
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
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Statistics</Card.Title>
          </Card.Body>
          <div className="pie" style={{ width: 300 }}>
            <PieChart chartData={userData} />
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Home;
