import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HeaderNavBar() {
  return (
    <Navbar fixed="top" bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">My Portfolio Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '10%' }}
          >
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About Me</Nav.Link>
            <Nav.Link href="#">My Projects</Nav.Link>
            <Nav.Link href="#">Contact Me</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Type Here"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNavBar;