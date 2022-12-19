import React, { useState } from "react";
import MovieService from "../../services/MovieService";
import SearchMovieService from "../../services/SearchMovieService";
import { MovieType } from "../../types/MovieType";
import MovieList from "../movie/MovieList";
import NewMovie from "./NewMovie";

type Props = {
  closeModal: any;
};

const movieService = new MovieService()

const serachMovieService = new SearchMovieService();

const Modal = (props: Props) => {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({} as MovieType);
  const [isAddingMovie, setIsAddingMovie] = useState(false);

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setMovieName(value);
  };

  const addToBackend = async (movieSelected: any) => {
    const newMovie = {
      img: movieSelected.Poster,
      title: movieSelected.Title,
      imdbID: movieSelected.imdbID,
    } as MovieType

    setMovie(newMovie);

    try {
      movieService.create(newMovie)
    } catch (error) {
      console.log(error)
    }
    
    setIsAddingMovie(true);
  };

  const searchMovie = async () => {
    const res = await serachMovieService.get(movieName);
    setMovies(res.data.Search);
  };

  return (
    <div className="modalContainer">
      {isAddingMovie ? (
        <NewMovie img={movie.img} title={movie.title} />
      ) : (
        <MovieList
          handleClick={searchMovie}
          inputTextHandler={inputTextHandler}
          movies={movies}
          addToBackend={addToBackend}
        />
      )}

      <button onClick={props.closeModal}>X</button>
    </div>
  );
};

export default Modal;
