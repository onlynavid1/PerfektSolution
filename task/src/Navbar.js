import React from 'react'
import {Navbar, Nav, Container, } from 'react-bootstrap'

    

function NavBar() {
    return (
        <div>
            <Container fluid>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#task">Task</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#contact">Contact Us</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Container>
        </div>
    )
}

export default NavBar
