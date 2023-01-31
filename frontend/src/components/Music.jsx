import React, { useState } from "react";
import MeydnSynthwaveVibe from "../assets/MeydnSynthwaveVibe.mp3";

function Music() {
  const [setPlay] = useState(true);

  const Play = () => {
    setPlay(false);
  };

  return (
    <div>
      <audio src={MeydnSynthwaveVibe} autoPlay loop onPlay={Play} hidden>
        <track kind="captions" />{" "}
      </audio>
    </div>
  );
}

export default Music;
