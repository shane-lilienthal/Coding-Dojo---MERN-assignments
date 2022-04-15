import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState({});

  const handleAddProduct = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products", {
        name,
        price,
        description,
      })
      .then((response) => {
        console.log("Success!", response);
      })
      .catch((err) => {
        console.log("Error!", err.response);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div className="container">
      <div style={{ marginBottom: "20px" }}>
        <h1>Add New Product</h1>
        <Link to="/">Home</Link>
      </div>
      <div
        className="container"
        style={{ backgroundColor: "lightGray", width: "50%" }}
      >
        <form
          onSubmit={handleAddProduct}
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
            />
            {errors.name && <p style={{ color: "red" }}>*{errors.name.message}</p>}
          </div>
          <div className="form-group" style={{ margin: "20px" }}>
            <label htmlFor="price">Price: </label>
            <input
              type="number"
              id="price"
              step="0.01"
              className="form-control"
              onChange={(e) => setPrice(e.target.value)}
            />
            {errors.price && <p style={{ color: "red" }}>*{errors.price.message}</p>}
          </div>
          <div className="form-group" style={{ margin: "20px" }}>
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              id="description"
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
            />
            {errors.description && <p style={{ color: "red" }}>*{errors.description.message}</p>}
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            style={{ margin: "10px" }}
          >
            ADD PRODUCT
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

export default ProductForm;
