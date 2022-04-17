import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth)
        navigate('/')
    }


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
                    {
                        user ? <Button onClick={handleLogOut} className=" fs-5" as={Link} to="/" variant="outline-success mx-2">Log Out</Button>
                            :
                            <Button className=" fs-5" as={Link} to="/login" variant="outline-success mx-2">Login</Button>
                    }
                    <Button className=" fs-5" as={Link} to="/signup" variant="outline-success">SignUp</Button>
                </Form>
            </Container>
        </Navbar>
    );
};

export default Header;