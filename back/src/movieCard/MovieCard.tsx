type Props = {
  poster: string;
  Title: string;
};

const MovieCard = (props: Props) => {
  return (
    <div className="movieCardContainer">
      <img src={props.poster} alt="Poster" />
      <h3>{props.Title}</h3>
    </div>
  );
};

export default MovieCard;
