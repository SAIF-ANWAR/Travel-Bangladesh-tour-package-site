import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='py-3 fs-5' sticky='top'>
            <Container>
                <Navbar.Brand as={Link} to="/" href="#home">TWB</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" href="#features">Home</Nav.Link>
                        <Nav.Link as={Link} to="/destinations" href="#destinations">Destinations</Nav.Link>
                        <Nav.Link as={Link} to="/services" href="#pricing">Services</Nav.Link>
                        <Nav.Link as={Link} to="/blogs" href="#pricing">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/contact" href="#pricing">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Form className="d-flex fs-5">
                    <Button className=" fs-5" as={Link} to="/login" variant="outline-success mx-2">Login</Button>
                    <Button className=" fs-5" as={Link} to="/signup" variant="outline-success">SignUp</Button>
                </Form>
            </Container>
        </Navbar>
    );
};

export default Header;