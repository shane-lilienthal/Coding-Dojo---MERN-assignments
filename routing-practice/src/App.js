import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:input" element={<Display/>} />
          <Route path="/:input/:colorOne/:colorTwo" element={<Display />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
