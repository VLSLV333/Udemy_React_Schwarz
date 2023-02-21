import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);



  // =========================       Fetch style (with Promises) of sending a HTTP request

  // function fetchMoviesHandler() {
  //   fetch("https://swapi.dev/api/films")
  //     .then((responce) => {
  //       return responce.json(); // this method parses our JSON into real object and then returns promise!
  //     })
  //     .catch(error => setError(error))
  //     .then((data) => {
  //       const transformedMovies = data.results.map((movie) => {
  //         return {
  //           id: movie["episode_id"],
  //           title: movie["title"],
  //           releaseDate: movie["release_date"],
  //           openingText: movie["opening_crawl"],
  //         };
  //       });
  //       setMovies(transformedMovies);
  //     });
  // }

  // =================================      Async Await style of sending HTTP request
  const fetchMoviesHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const responce = await fetch("https://swapi.dev/api/films");
      if (!responce.ok) {
        throw new Error("Error occured!");
      }
      const data = await responce.json();

      const transformedMovies = data.results.map((movie) => {
        return {
          id: movie["episode_id"],
          title: movie["title"],
          releaseDate: movie["release_date"],
          openingText: movie["opening_crawl"],
        };
      });
      setIsLoading(false);
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [])

  useEffect(() => {
   fetchMoviesHandler()
  }, [fetchMoviesHandler]);


  let content = <p>No movies yet!</p>;
  if (!isLoading && movies.length > 0) {
    content = <MoviesList movies={movies} />;
  } else if (!isLoading && error) {
    content = <p>{error}</p>;
  } else if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />} */}
        {/* {!isLoading && !error && movies.length === 0 && <p>No movies yet!</p>} */}
        {/* {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>} */}
      </section>
    </React.Fragment>
  );
}

export default App;
