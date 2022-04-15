import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const DisplayAll = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDeleteProduct = (id) => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res);
        const filteredProducts = products.filter((product, index) => {
          return product._id !== id;
        });
        console.log(filteredProducts);
        setProducts(filteredProducts);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div style={{ marginBottom: "20px" }}>
        <h1>Product Manager</h1>
        <Link to="/new-product">Add Product</Link>
      </div>
      {products.map((product, index) => {
        return (
          <div className="d-flex justify-content-center align-items-center">
            <h3 style={{ padding: "15px" }}>
              <Link to={`/product/${product._id}`} style={{ color: "black" }}>
                {product.name}
              </Link>
            </h3>
            <button
              className="btn btn-danger"
              style={{ margin: "0px 10px" }}
              onClick={() => handleDeleteProduct(product._id)}
            >
              DELETE
            </button>
            <button className="btn btn-primary" style={{ margin: "0px 10px" }}>
              <Link to={`/product/${product._id}/edit`} style={{textDecoration: "none", color: "white"}}>EDIT</Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayAll;
