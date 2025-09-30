import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function MyNav() {
  return (
    <Navbar expand="lg" className=" bg-warning">
      <Container>
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">About</Nav.Link>
            <NavDropdown title="Browse Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Sci-Fi</NavDropdown.Item>
              <NavDropdown.Item href="#">Romance</NavDropdown.Item>
              <NavDropdown.Item href="#">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#">History</NavDropdown.Item>
              <NavDropdown.Item href="#">Fantasy</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
