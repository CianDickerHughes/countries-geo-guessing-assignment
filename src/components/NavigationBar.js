import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import earth from '../img/earth-globe-tool-svgrepo-com.svg';

// Navigation Bar in secondary theme
// Links to the home, create, read pages and Guess Countres Game
const NavigationBar = () => {
  return (
        <Navbar bg="secondary" data-bs-theme="light" style ={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} sticky='top'>
          <Container>
            <Navbar.Brand href="/">
            <img src={earth} alt='world' style={{ width: '40px', height: 'auto' }} />
            <br></br>Countries Geo Guess
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/create">Add New Countre</Nav.Link>
              <Nav.Link href="/read">Read All Countres</Nav.Link>
              <Nav.Link href="/game">Guess Countres Game</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
  );
};

export default NavigationBar;