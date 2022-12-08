import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function NavBar(props){
        return (
            <div>
                <Navbar bg="" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="">गृहप्रिष्ट</Nav.Link>
                            <Nav.Link href="">सम्पर्क </Nav.Link>
                            <Nav.Link href="">सपोर्ट </Nav.Link>
                            <Nav.Link href="">स्रोत-नक्शा </Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
export default NavBar;