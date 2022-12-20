import React, { useEffect } from "react";
import { NoMovies } from "../home/NoMovies";
import MovieCard from "../movie/MovieCard";
import PlayAudio from "./PlayAudio";

import StarIcon from '@mui/icons-material/Star';
import yellow from "@mui/material/colors/yellow";

type Props = {
  movieReviews: any;
};

const MovieReviewList = (props: Props) => {
  useEffect(() => {
    console.log(props.movieReviews);
  }, []);

  if (props.movieReviews.length > 0)
    return (
      <div className="movieReviewsContainer">
        {props.movieReviews.map((movieReview: any) => (
          <div className="movieReviewCard">
            <MovieCard
              img={movieReview.movie.img}
              title={movieReview.movie.title}
            />
            <div className="function">
              <div className="rating"><StarIcon sx={{ color: yellow[500] }}/>{movieReview.rating}</div>
              <PlayAudio />
            </div>
          </div>
        ))}
      </div>
    );
  else return <NoMovies />;
};

export default MovieReviewList;
