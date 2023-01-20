import React, { useState } from "react";
import bruitPorte from "../assets/BruitPorte.mp3";
import styles from "../styles/Curtain.module.css";

function Curtain() {
  const [closed, setClosed] = useState(styles.buttonClosed);

  const handleChange = () => {
    setClosed(styles.buttonOpened);
   
    new Audio(bruitPorte).play();
  };

  return (
    <button type="button" className={closed} onClick={handleChange}>
      {" "}
    </button>
  );
}

export default Curtain;
