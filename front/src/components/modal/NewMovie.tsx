import React, { useState } from "react";

type Props = {
  img: string;
  title: string;
};

const NewMovie = (props: Props) => {
  const [audio, setAudio] = useState('');

  const uploadAudio = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(audio)
  }

  return (
    <div className="newMovieContainer">
      <img src={props.img} alt="" />
      <h2>{props.title}</h2>
      <form onSubmit={uploadAudio}>
        <input type="number" placeholder="de 0 a 5" />
        <input
          type="file"
          name="audioReview"
          id="audioReview"
          onChange={(e) => setAudio(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default NewMovie;
