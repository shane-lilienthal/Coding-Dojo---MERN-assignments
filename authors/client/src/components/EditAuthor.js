import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const EditAuthor = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [name, setName] = useState("");

  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        setName(res.data.name);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleEditAuthor = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/authors/${id}`, {
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
      <h3>Edit author:</h3>
      <div style={{ backgroundColor: "lightGray", width: "50%" }}>
        <form onSubmit={handleEditAuthor} style={{ padding: "10px" }}>
          <div className="form-group" style={{ margin: "10px" }}>
            <label htmlFor="name">Author Name: </label>
            <input
              type="text"
              id="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            {errors.name && (<p style={{ color: "red" }}>*{errors.name.message}</p>)}
          </div>
          <div className="d-flex justify-content-left">
            <button
              className="btn btn-success"
              style={{ margin: "10px" }}
            >
              UPDATE
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

export default EditAuthor;
