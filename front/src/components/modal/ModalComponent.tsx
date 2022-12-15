import React, { useState } from "react";
import SearchMovieService from "../../services/SearchMovieService";
import InputPublico from "../shared/inputPublico";

type Props = {
  closeModal: any;
};

const serachMovieService = new SearchMovieService();

const Modal = (props: Props) => {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setMovieName(value);
  };

  const handleClick = async () => {
    const res = await serachMovieService.get(movieName);
    setMovies(res.data.Search)
    console.log(movies);
  };

  return (
    <div className="modalContainer">
      <input onChange={inputTextHandler} placeholder="No country for old man" />

      <button onClick={handleClick}>Buscar filme</button>
      <button onClick={props.closeModal}>X</button>
    </div>
  );
};

export default Modal;