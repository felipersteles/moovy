import React, { useEffect, useState } from "react";
import Auth from "../hoc/Auth";

import LibraryAddSharpIcon from "@mui/icons-material/LibraryAddSharp";
import Modal from "react-modal";
import ModalComponent from "../modal/ModalComponent";
import UserService from "../../services/UserService";
import MovieReviewList from "../movie-review/MovieReviewList";

type Props = {};

const userService = new UserService();

const Home = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [movieReviews, setMovieReviews] = useState([]);

  // open modal
  const openModal = () => {
    // console.log("abrir o modal");
    setIsOpen(true);
  };

  // close modal
  const closeModal = () => {
    // console.log("fechar o modal");
    setIsOpen(false);
  };

  useEffect(() => {
    const getMovies = async () => {
      userService.getProfile().then((res) => {
        setMovieReviews(res.data.movieReviews);
      });
    };

    getMovies();
  }, []);

  return (
    <div className="containerHome">
      <header>
        <h1>My Library</h1>
        <LibraryAddSharpIcon onClick={openModal} fontSize="large" />
      </header>

      {!isOpen && <MovieReviewList movieReviews={movieReviews} />}

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Add movie"
        overlayClassName="modal-overlay"
        className="modalNewMovie"
        ariaHideApp={false}
      >
        <ModalComponent closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default Auth(Home);
