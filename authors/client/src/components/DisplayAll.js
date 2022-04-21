import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const DisplayAll = () => {
  const [authors, setAuthors] = useState([]);

  // Retrieve all authors from db. Set state variable to retrieved data
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        console.log(res);
        setAuthors(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Delete author handler
  const handleDeleteAuthor = (id) => {
    axios
      .delete(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        console.log(res);
        const filteredAuthors = authors.filter((author, index) => {
          return author._id !== id;
        });
        console.log(filteredAuthors);
        setAuthors(filteredAuthors);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div style={{marginBottom: "20px"}}>
        <Link to="/new-author">Add new author</Link>
      </div>
      <h3>We have quotes by:</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Author Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, index) => {
            return (
              <tr key={author._id}>
                <td>{author.name}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    style={{ margin: "0px 5px" }}
                  >
                    <Link
                      to={`/authors/${author._id}/edit`}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      EDIT
                    </Link>
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteAuthor(author._id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayAll;
