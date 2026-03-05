import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MovieContext } from "./MovieContext";
import StarRating from "./StarRating";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movieList, deleteMovie } = useContext(MovieContext);

  const movie = movieList.find((m) => m.id === Number(id));

  if (!movie) return <div className="container mt-4">Movie not found</div>;

  return (
    <div className="container mt-5">
      <div className="card border-0 shadow-lg p-5 movie-detail-card">
        <h2 className="text-center fw-bold mb-3 fade-in">{movie.title}</h2>

        <div className="text-center mb-3 fade-in delay-1">
          <StarRating rating={movie.rating} />
        </div>

        <p className="lead text-center text-muted fade-in delay-2">
          {movie.description}
        </p>

        <div className="d-flex justify-content-center gap-3 mt-4 fade-in delay-3">
          <button
            className="btn btn-outline-danger px-4"
            onClick={() => {
              deleteMovie(movie.id);
              navigate("/");
            }}
          >
            Delete
          </button>

          <button
            className="btn btn-dark px-4"
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;