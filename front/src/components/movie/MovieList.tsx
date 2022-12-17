import React from "react";
import MovieCard from "./MovieCard";

type Props = {
  inputTextHandler: any;
  handleClick: any;
  movies: any;
  setIsAddingMovie?: any;
  addToBackend?: any
};

const MovieList = (props: Props) => {

  return (
    <div>
      <input
        onChange={props.inputTextHandler}
        placeholder="No country for old man"
      />

      <button onClick={props.handleClick}>Buscar filme</button>
      {props.movies?.map((movie: any) => {
        return (
          <div className="searchMovieContainer">
            <MovieCard
              img={movie.Poster}
              title={movie.Title}
              key={movie.imdbID} />
            <button onClick={() => {
              props.addToBackend(movie)
            }}>
              Add
              <br />
              movie
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
