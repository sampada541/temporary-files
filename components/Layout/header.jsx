import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { NavLink, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../styles/header.css";

function NavScrollExample() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand>
          <NavLink to="/">
            <img src="images/logo.png" alt="Logo" className="custom-logo" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <NavDropdown title="Register" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/patient-register">
                Register as Patient
              </NavDropdown.Item>
              <NavDropdown.Item href="/doctor-register">
                Register as Doctor
              </NavDropdown.Item>
            </NavDropdown>{" "}
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
