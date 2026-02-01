import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


const BasicExample = () => {
    return (
        <Navbar className='bg-secondary '>
            <Container>
            <Navbar.Brand href="#home" className='fs-4 fw-bold' >NAVIGATER</Navbar.Brand>
            <Navbar.Collapse >
                <Nav className="m-auto fw-bold fs-5">
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="About" as={NavLink}>About</Nav.Link>
                    <Nav.Link to="Services" as={NavLink}>Services</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default BasicExample
