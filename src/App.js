import './App.css';

import img001 from './images/image01.png'
// import Button from 'react-bootstrap/Button'
import  { ScrollContainer, ScrollPage } from "react-scroll-motion"
import  { Navbar, Container, Nav, NavDropdown, Row, Col, Carousel, Card } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

import { useState } from 'react';


  function App() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
  <div className="App">
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
                  src="https://picsum.photos/900/400"
                  alt="Second slide"
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
        <Container fluid="true">
          <Row>
            <Card>
              <Card.Body>

              slkjs
              </Card.Body>
            </Card>
          </Row>
        </Container>
    </ScrollPage>
      </ScrollContainer>
</div>
  );
}

export default App;
