import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <Navbar expand="lg" sticky="top">
         <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-bav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about"> About</Nav.Link>
                    <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
                    <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
         </Container>
        </Navbar>
    );
};

export default NavigationBar;