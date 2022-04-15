import logo from './logo.svg';
import './App.css';
import{ BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductForm from './components/ProductForm';
import DisplayAll from './components/DisplayAll';
import DisplayOne from './components/DisplayOne';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayAll />} />
          <Route path = "/new-product" element = {<ProductForm />} />
          <Route path = "/product/:id" element = {<DisplayOne />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
