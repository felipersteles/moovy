import React, { useState } from "react";
import SearchMovieService from "../../services/SearchMovieService";
import MovieList from "../movie/MovieList";
import NewMovie from "./NewMovie";

type Props = {
  closeModal: any;
};

type Movie = {
  img: string;
  title: string;
  imdbID: string;
};

const serachMovieService = new SearchMovieService();

const Modal = (props: Props) => {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({} as Movie);
  const [isAddingMovie, setIsAddingMovie] = useState(false);

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setMovieName(value);
  };

  const addToBackend = (movie: any) => {
    setMovie({
      img: movie.Poster,
      title: movie.Title,
      imdbID: movie.imdbID,
    } as Movie);
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
