import React, { useState } from "react";
import qs from "qs";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Card, Container, Alert } from "react-bootstrap";

const CreateTask = () => {
  //FORM DATA ONCE PAGE LOAD
  const defaultFormData = {
    name: "",
    content: "",
    startdate: "",
    enddate: "",
    status: 1,
  };

  const [formData, setFormData] = useState(defaultFormData); // FORM DATA
  const [message, setMessage] = useState(""); // MESSAGE TO USER

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    setMessage("Task added successfully!");
    setFormData(defaultFormData);

    //THE MESSAGE WILL BE GONE IN 3S
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };
  return (
    <Container className="mt-3">
      <Card style={{ width: "35rem" }}>
        <Card.Body>
          <Card.Title>Create Task</Card.Title>
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

export default CreateTask;
