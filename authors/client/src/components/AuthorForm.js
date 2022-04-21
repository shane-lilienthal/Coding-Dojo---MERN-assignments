import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AuthorForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [errors, setErrors] = useState({});

  const handleAddAuthor = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/authors", {
        name,
      })
      .then((res) => {
        console.log("Success!", res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response);
        setErrors(err.response.data.errors);
      });
  };
  return (
    <div className="container">
      <div style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link>
      </div>
      <h3>Add a new author:</h3>
      <div style={{ backgroundColor: "lightGray", width: "50%" }}>
        <form onSubmit={handleAddAuthor} style={{ padding: "10px" }}>
          <div className="form-group" style={{ margin: "10px" }}>
            <label htmlFor="name">Author Name: </label>
            <input
              type="text"
              id="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p style={{ color: "red" }}>*{errors.name.message}</p>
            )}
          </div>
          <div className="d-flex justify-content-left">
            <button
              className="btn btn-success"
              type="submit"
              style={{ margin: "10px" }}
            >
              ADD AUTHOR
            </button>
            <button className="btn btn-secondary" style={{ margin: "10px" }}>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                CANCEL
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthorForm;
