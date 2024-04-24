import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      {" "}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/all">All Tasks</Nav.Link>
            <Nav.Link href="/create">Create Task</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
