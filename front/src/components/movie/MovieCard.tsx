import React from "react";

type Props = {
  img: string;
  title: string;
};

const MovieCard = (props: Props) => {
  return (
    <div className="movieCardContainer">
      <img src={props.img} alt="Poster" />
      <h3>{props.title}</h3>
    </div>
  );
};

export default MovieCard;
