import React from "react";
import { FaSearch, FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const DropDown = () => {
  return (
    <NavDropdown title="Sort By" id="navbarScrollingDropdown">
      <NavDropdown.Item href="#action3">Movie Title <FaCheck/></NavDropdown.Item>
      <NavDropdown.Item href="#action4">Genre <FaCheck/></NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action5">ASC <FaCheck/></NavDropdown.Item>
      <NavDropdown.Item href="#action5">DESC <FaCheck/></NavDropdown.Item>
    </NavDropdown>
  );
};

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Movie Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <DropDown />
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button>
              <FaSearch />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
