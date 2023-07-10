import './App.css';

import img001 from './images/image01.png'
import img003 from './images/image03.png'
// import Button from 'react-bootstrap/Button'
import  { ScrollContainer, ScrollPage } from "react-scroll-motion"
import  { Navbar, Container, Nav, NavDropdown, Row, Col, Carousel, Card, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

import { useState } from 'react';


  function App() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
  <div className="App snap">
    <header>
      <Navbar expand="lg" className="bg-body-tertiary,  center-navbar" fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-center">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#link">THEMES</Nav.Link>
            <NavDropdown title="SHOP" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">CONTACT</Nav.Link>
            <Nav.Link href="#link">ABOUT US...</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  <ScrollContainer>
    <ScrollPage page={0}>
      <Container fluid="true">
          <Row>
            <Col>
              <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img001}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img
                  className="d-block w-100"
                  src={img003}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </Col>
          </Row>
        </Container>
    </ScrollPage>
    <ScrollPage page={1}>
        <Container>
          <Row className='px-4 my-5'>
            <Card className="text-center">
              <Card.Body>
                Pagina dois, testando layouts.
              </Card.Body>
            </Card>
          </Row>
          <Row  className='px-4 my-5'>
          <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/286/180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/id/203/286/180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/id/201/286/180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
           
          </Row>
        </Container>
    </ScrollPage>
    <ScrollPage page={3}>
      <Container>
          <Row>
            <Col>
              <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    </ScrollPage>
  </ScrollContainer>
</div>
  );
}

export default App;
