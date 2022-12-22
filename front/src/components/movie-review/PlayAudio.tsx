import React, { useRef, useState } from "react";

import IconButton from "@mui/material/IconButton";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { orange } from "@mui/material/colors";
import MovieReviewService from "../../services/MovieReviewService";

type Props = {
  audio: string;
};

const movieReviewService = new MovieReviewService();

const PlayAudio = ({ audio }: Props) => {
  const ref = useRef<any | null>(null);

  const [click, setClick] = useState<Boolean>(false);

  const handleClick = async () => {
    const som = await movieReviewService.playAudio(audio);

    setClick(!click);

    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <IconButton
      onClick={() => handleClick()}
      aria-label="fingerprint"
      sx={{ color: orange[500] }}
    >
      <PlayCircleIcon sx={{ fontSize: 50 }} />
      <audio src={`http://localhost:3333/moviereview/${audio}`} ref={ref} loop />
    </IconButton>
  );
};

export default PlayAudio;
