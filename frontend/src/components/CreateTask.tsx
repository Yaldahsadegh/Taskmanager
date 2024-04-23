import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Card, Container } from "react-bootstrap";

const CreateTask = () => {
  return (
    <Container className="mt-3">
      <Card style={{ width: "35rem" }}>
        <Card.Body>
          <Card.Title>Create Task</Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Task Name</Form.Label>
              <Form.Control type="text" placeholder="enter task name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Task content</Form.Label>
              <Form.Control type="text" placeholder="enter task content" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Task start date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Task end date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CreateTask;
