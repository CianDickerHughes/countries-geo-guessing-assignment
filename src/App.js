import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Content from './components/Content';
import Read from './components/Read';
import Create from './components/Create';
import Edit from './components/Edit';
import Game from './components/Game';
import GameRunner from './components/GameRunner';


function App() {
  return (
    <Router>
      <NavigationBar /* navbar with routing *//>
      <Routes>
        <Route path="/" element={<Content /> /* The Content page */} />
        <Route path="/create" element={<Create />/* The Create page */} />
        <Route path="/read" element={<Read />/* The Read page */} />
        <Route path="/Game" element={<Game />/* The Game page */} />
        <Route path="/GameRunner" element={<GameRunner />} />
        <Route path='/edit/:id' element={<Edit /> /* The Edit Movies page */} />
      </Routes>
    </Router>
  );
}

export default App;

// <Route path="/Game" element={<Game />/* The Game page */} />