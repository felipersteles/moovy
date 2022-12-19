import React, { ChangeEvent, useState } from "react";
import MovieReviewService from "../../services/MovieReviewService";
import { MovieReviewType } from "../../types/MovieReviewType";
import { MovieType } from "../../types/MovieType";
import InputPublico from "../shared/inputPublico";

type Props = {
  movie: MovieType
  closeModal: any
};

const movieReviewService = new MovieReviewService();

const NewMovie = (props: Props) => {
  const [audio, setAudio] = useState<File>();
  const [rate, setRate] = useState(0)

  const newMovieReview = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(props.movie)
    console.log(rate)
    console.log(audio)

    const newMovieReview: MovieReviewType = {
      movieID: props.movie.imdbID,
      audioReview: audio,
      rating: rate.toString()
    }

    movieReviewService.create(newMovieReview).then(() => {
      alert('Review criada!')
      props.closeModal()
    })
  }

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    else setAudio(e.target.files[0])
    
    
  }

  return (
    <div className="newMovieContainer">
      <img src={props.movie.img} alt="" />
      <h2>{props.movie.title}</h2>
      <form onSubmit={newMovieReview}>
        <InputPublico nome="rating" placeholder="0 a 5" setRate={setRate} rate={rate}/>
        <input
          type="file"
          name="audioReview"
          id="audioReview"
          onChange={handleUpload}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default NewMovie;
