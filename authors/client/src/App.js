import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AuthorForm from './components/AuthorForm';
import DisplayAll from './components/DisplayAll';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <h1>Favorite Authors</h1>
        <Routes>
          <Route path="/" element ={<DisplayAll />} />
          <Route path="/new-author" element={<AuthorForm />} />
          <Route path="/authors/:id/edit" element={<EditAuthor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
