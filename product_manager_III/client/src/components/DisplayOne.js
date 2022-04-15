import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const DisplayOne = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDeleteProduct = (id) => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <h3>Price: ${product.price}</h3>
      <h3>Description: {product.description}</h3>
      <div className="d-flex justify-content-center align-items-center" style={{padding: "20px"}}>
        <button
          className="btn btn-danger"
          style={{margin: "0px 10px"}}
          onClick={() => handleDeleteProduct(product._id)}
        >
          DELETE
        </button>
        <button
          className="btn btn-primary"
          style={{margin: "0px 10px"}}
        >
          <Link to={`/product/${product._id}/edit`} style={{textDecoration: "none", color: "white"}}>EDIT</Link>
        </button>
      </div>
      <Link to="/" style={{ margin: "20px" }}>
        Home
      </Link>
    </div>
  );
};

export default DisplayOne;
