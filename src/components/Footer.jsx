import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FooterNavBar() {
  return (
    <Container className="text-light bg-primary py-3" fluid>
      <Row>
        <Navbar expand="lg">
          <Container className="justify-content-center">
            <h5>My Portfolio Website</h5>
          </Container>
        </Navbar>
      </Row>
      <Row className="justify-content-center">
        <Col xs={6} md={3} lg={1} className="text-center my-2 my-md-0">Facebook</Col>
        <Col xs={6} md={3} lg={1} className="text-center my-2 my-md-0">Instagram</Col>
        <Col xs={6} md={3} lg={1} className="text-center my-2 my-md-0">Twitter</Col>
        <Col xs={6} md={3} lg={1} className="text-center my-2 my-md-0">YouTube</Col>
      </Row>
    </Container>
  );
}

export default FooterNavBar;