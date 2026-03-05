import { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";
import { useNavigate } from "react-router-dom";

function AddMovie() {
  const { addMovie } = useContext(MovieContext);
  const navigate = useNavigate();

  const [movie, setMovie] = useState({
    title: "",
    description: "",
    rating: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ ...movie, id: Date.now() });
    navigate("/");
  };

  return (
    <div className="container">
  <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px" }}>
    <h3 className="text-center mb-3">➕ Add Movie</h3>

    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Movie Title</label>
        <input
          className="form-control"
          required
          onChange={(e) =>
            setMovie({ ...movie, title: e.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          rows="3"
          required
          onChange={(e) =>
            setMovie({ ...movie, description: e.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Rating</label>
        <select
          className="form-select"
          onChange={(e) =>
            setMovie({ ...movie, rating: Number(e.target.value) })
          }
        >
          {[1,2,3,4,5].map(r => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>

      <button className="btn btn-success w-100">
        Add Movie
      </button>
    </form>
  </div>
</div>
  );
}

export default AddMovie;