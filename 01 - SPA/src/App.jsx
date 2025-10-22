import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Destacado from './components/Destacado';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/juego" element={<Destacado />} />
      </Routes>
    </Router>
  );
}

export default App;
