import React, { useEffect, useState } from "react";
import qs from "qs";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Card, Container, Alert } from "react-bootstrap";
import axios from "axios";

const UpdateTask = () => {
  //FORM DATA ONCE PAGE LOAD
  const defaultFormData = {
    name: "",
    content: "",
    startdate: "",
    enddate: "",
    status: "",
  };

  const [formData, setFormData] = useState(defaultFormData); // FORM DATA
  const [message, setMessage] = useState(""); // MESSAGE TO USER

  const handleInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prevSate) => ({
      ...prevSate,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //ADD A HANDLER FOR CHECK START DATE NO CHECK YET
    if (formData.startdate > formData.enddate) {
      setMessage("Date is invalid");
      return;
    }
    console.log("submit done");
    console.log(formData);
    //Making a query string
    const data = qs.stringify(formData);
    axios
      .post("http://localhost:4000/task/create", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
    setMessage("Task added successfully!");
    setFormData(defaultFormData);

    //THE MESSAGE WILL BE GONE IN 3S
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/task/${params.id}`)
      .then((response) => {
        const taskData = response.data.task[0];

        const startDate = taskData.startdate.split("T")[0];
        const endDate = taskData.enddate.split("T")[0];

        setFormData({
          ...taskData,
          startdate: startDate,
          enddate: endDate,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container className="mt-3">
      <Card style={{ width: "35rem" }}>
        <Card.Body>
          <Card.Title>Update Task</Card.Title>
          <Form onSubmit={handleSubmit} method="POST">
            <Form.Group className="mb-3">
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter task name"
                name="name"
                onChange={handleInput}
                required
                value={formData.name}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Task content</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                type="text"
                placeholder="enter task content"
                name="content"
                onChange={handleInput}
                required
                value={formData.content}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="staus"
                value={formData.status}
                onChange={handleInput}
              >
                <option value="1">New</option>
                <option value="2">In Process</option>
                <option value="3">Completed</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Task start date</Form.Label>
              <Form.Control
                type="date"
                name="startdate"
                onChange={handleInput}
                required
                value={formData.startdate}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Task end date</Form.Label>
              <Form.Control
                type="date"
                name="enddate"
                onChange={handleInput}
                required
                value={formData.enddate}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          {message && (
            <Alert
              className="mt-3"
              variant={
                message && message === "Date is invalid" ? "danger" : "success"
              }
            >
              {message}
            </Alert>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UpdateTask;
