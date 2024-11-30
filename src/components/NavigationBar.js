import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Navigation Bar in dark theme
// Links to the home, create and read pages
const NavigationBar = () => {
  return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create">Add New Counter</Nav.Link>
              <Nav.Link href="/read">Read All Counters</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
  );
};

export default NavigationBar;