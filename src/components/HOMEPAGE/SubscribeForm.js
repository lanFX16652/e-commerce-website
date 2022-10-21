import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./SubscribeForm.css";

function SubscribeForm() {
  return (
    <div className="subscribeForm-wrap">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div>
                <h1>LET'S BE FRIENDS!</h1>
                <h6>Nisi nisi consequer nissi</h6>
              </div>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Enter your email address"
                className="me-2 form"
                aria-label="Search"
              />
              <Button className="form-button" variant="outline-success">
                Subscribe
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default SubscribeForm;
