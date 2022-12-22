import { Button } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import MovieReviewService from "../../services/MovieReviewService";
import { MovieReviewType } from "../../types/MovieReviewType";
import { MovieType } from "../../types/MovieType";
import { NumberInput } from "../Inputs/NumberInput";

type Props = {
  movie: MovieType;
  closeModal: any;
};

const movieReviewService = new MovieReviewService();

const NewMovie = (props: Props) => {
  const [audio, setAudio] = useState<File>();
  const [rate, setRate] = useState(0);

  const newMovieReview = (e: React.FormEvent) => {
    e.preventDefault();

    const newMovieReview: MovieReviewType = {
      movieID: props.movie.imdbID,
      audioReview: audio,
      rating: rate.toString(),
    };

    movieReviewService.create(newMovieReview).then(() => {
      alert("Review criada!");
      props.closeModal();
      window.location.reload();
    });
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target

    setRate(Number(value))
  }

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    else setAudio(e.target.files[0]);
  };

  return (
    <div className="newMovieContainer">
      <img src={props.movie.img} alt="" />
      <h2>{props.movie.title}</h2>
      <form onSubmit={newMovieReview}>
        <input
          type="file"
          name="audioReview"
          id="audioReview"
          onChange={handleUpload}
        />
        <NumberInput onChangeHandler={onChangeHandler} type="number" />
        <Button type="submit" variant="contained">Enviar</Button>
      </form>
    </div>
  );
};

export default NewMovie;
