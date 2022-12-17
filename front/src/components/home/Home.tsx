import React, { useState } from "react";
import Auth from "../hoc/Auth";

import SearchIcon from "@mui/icons-material/Search";
import LibraryAddSharpIcon from "@mui/icons-material/LibraryAddSharp";
import Modal from "react-modal";
import ModalComponent from "../modal/ModalComponent";

type Props = {};

const Home = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="containerHome">
      <header>
        <h1>My Library</h1>
        <LibraryAddSharpIcon onClick={openModal} fontSize="large" />
      </header>

      {!isOpen && (
        <div className="noMovies">
          <SearchIcon sx={{ fontSize: 150 }} />
          <p>
            It looks like there are no movies in your library! Go to you web
            application and add some!
          </p>
        </div>
      )}

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
