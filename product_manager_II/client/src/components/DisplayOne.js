import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DisplayOne = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>{product.name}</h1>
      <h3>Price: ${product.price}</h3>
      <h3>Description: {product.description}</h3>
      <Link to="/" style={{margin: "20px"}}>Home</Link>
    </div>
  );
};

export default DisplayOne;
