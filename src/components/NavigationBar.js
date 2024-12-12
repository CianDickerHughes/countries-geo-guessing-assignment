import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import earth from '../img/earth-globe-tool-svgrepo-com.svg';

// Navigation Bar in secondary theme
// Links to the home, create, read pages and Guess Countres Game
// Links Show Which Page is Active
const NavigationBar = () => {
  return (
        <Navbar bg="secondary" data-bs-theme="light" style ={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} sticky='top'>
          <Container>
            <Navbar.Brand href="/">
            <img src={earth} alt='world' style={{ width: '40px', height: 'auto' }} />
            <br></br>Countries Geo Guess
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/create" style={window.location.pathname === '/create' ? activeNavLinkStyle : navLinkStyle}>Add New Countre</Nav.Link>
              <Nav.Link href="/read" style={window.location.pathname === '/read' ? activeNavLinkStyle : navLinkStyle}>Read All Countres</Nav.Link>
              <Nav.Link href="/game" style={window.location.pathname === '/game' ? activeNavLinkStyle : navLinkStyle}>Guess Countres Game</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
  );
};

// Default Nav link Style
const navLinkStyle = {
  textDecoration: 'none',  
  color: 'inherit',  
  fontSize: '18px' 
};

// Active Nav link Style
const activeNavLinkStyle = {
  textDecoration: 'underline',  
  color: 'inherit',  
  fontSize: '20px',
  fontWeight: 'bold'
};

export default NavigationBar;