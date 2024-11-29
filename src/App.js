import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';


function App() {
  return (
    <Router>
      <NavigationBar /* navbar with routing *//>
      <Routes>
        <Route path="/" element={<Content /> /* The Content page */} />
        <Route path="/read" element={<Header />/* The Read page */} />
        <Route path="/create" element={<Footer />/* The Create page */} />
        
      </Routes>
    </Router>
  );
}

export default App;

// <Route path='/edit/:id' element={<Edit /> /* The Edit Movies page */} />