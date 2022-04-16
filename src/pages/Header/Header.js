import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">TWB</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Packages</Nav.Link>
                        <Nav.Link href="#pricing">Blogs</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
                <Form className="d-flex">
                    <Button variant="outline-success mx-2">Login</Button>
                    <Button variant="outline-success">SignUp</Button>
                </Form>
            </Container>
        </Navbar>
    );
};

export default Header;