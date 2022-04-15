import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setName(res.data.name);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEditProduct = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/products/${id}`, {
        name,
        price,
        description,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
    <div style={{ marginBottom: "20px" }}>
      <h1>Edit Product</h1>
      <Link to="/">Home</Link>
    </div>
    <div
      className="container"
      style={{ backgroundColor: "lightGray", width: "50%" }}
    >
      <form
        onSubmit={handleEditProduct}
        className="container"
        style={{ padding: "10px" }}
      >
        <div className="form-group" style={{ margin: "20px" }}>
          <label htmlFor="name">Product Name: </label>
          <input
            type="text"
            id="name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group" style={{ margin: "20px" }}>
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            id="price"
            step="0.01"
            className="form-control"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div className="form-group" style={{ margin: "20px" }}>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            id="description"
            className="form-control"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          style={{ margin: "10px" }}
        >
          SUBMIT
        </button>
        {/* {errors &&
          Object.keys(errors).map((errKey, index) => {
            return (
              <p style={{ color: "red" }} key={index}>
                {errors[errKey].message}
              </p>
            );
          })} */}
      </form>
    </div>
  </div>
  );
};

export default EditProduct;
