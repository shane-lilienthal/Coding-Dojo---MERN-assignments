import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const DisplayAll = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div style={{ marginBottom: "20px" }}>
        <h1>Product Manager</h1>
        <Link to="/new-product">
          Add Product
        </Link>
      </div>
      {products.map((product, index) => {
        return (
          <h3 style={{padding: "15px"}}>
            <Link to={`/product/${product._id}`} style={{color: "black"}}>{product.name}</Link>
          </h3>
        );
      })}
    </div>
  );
};

export default DisplayAll;
