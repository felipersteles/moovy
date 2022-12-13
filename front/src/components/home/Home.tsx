import React from "react";
import Auth from "../hoc/Auth";

import SearchIcon from "@mui/icons-material/Search";
import LibraryAddSharpIcon from '@mui/icons-material/LibraryAddSharp';

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="containerHome">
      <header>
        <h1>My Library</h1>
        <LibraryAddSharpIcon fontSize="large" />
      </header>

      <div className="noMovies">
        <SearchIcon sx={{ fontSize: 150 }}/>
        <p>
          It looks like there are no movies in your library! Go to you web
          application and add some!
        </p>
      </div>
    </div>
  );
};

export default Auth(Home);
