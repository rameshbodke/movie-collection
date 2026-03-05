import { useContext } from "react";
import { MovieContext } from "./MovieContext";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

function MovieList() {
  const { movieList } = useContext(MovieContext);

  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold mb-5 movie-heading">
        🎬 Movie Collection
      </h2>

      <div className="row g-4">
        {movieList.map((movie) => (
          <div key={movie.id} className="col-sm-6 col-md-4">
            <div className="card movie-card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <h5 className="fw-semibold mb-2">
                  <Link
                    to={`/movie/${movie.id}`}
                    className="text-decoration-none movie-title"
                  >
                    {movie.title}
                  </Link>
                </h5>

                <StarRating rating={movie.rating} />

                <p className="text-muted small mt-2">Click to view details</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;