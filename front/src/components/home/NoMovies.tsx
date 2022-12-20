import React from "react";
import SearchIcon from "@mui/icons-material/Search";

type Props = {};

export const NoMovies = (props: Props) => {
  return (
    <div className="noMovies">
      <SearchIcon sx={{ fontSize: 150 }} />
      <p>
        It looks like there are no movies in your library! Go to you web
        application and add some!
      </p>
    </div>
  );
};
