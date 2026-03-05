import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MovieProvider } from "./MovieContext";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import MovieDetails from "./MovieDetails";

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <div className="container app-container ">

          <div className=" d-flex justify-content-between align-items-center mb-4 bg-light rounded">
            <span className="text-dark fw-bold fs-4">🎬 Movie Collection</span>

            <div>
              <Link to="/" className="btn btn-outline-dark me-2">
                Movie List
              </Link>

              <Link to="/add" className="btn btn-warning">
                Add Movie
              </Link>
            </div>
          </div>
          <h1 className="text-center text-dark mb-4">Welcome to Movie Collection</h1>

          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/add" element={<AddMovie />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>

        </div>   
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;