import React from "react";
import PropTypes from "prop-types";

import styles from "../styles/PopupGame.module.css";

function PopupGame({ visibility, setVisibility }) {
  return (
    <div>
      <div className={styles["popup-container"]}>
        <button
          type="button"
          className={styles["close-button"]}
          onClick={() => setVisibility(!visibility)}
        >
          <p className={styles.exit}>X</p>
        </button>
        <div>
          <h1>Attention</h1>
          <p>voulez vous vraiment quitter la partie ?</p>
        </div>
      </div>
    </div>
  );
}

PopupGame.propTypes = {
  visibility: PropTypes.bool.isRequired,
  setVisibility: PropTypes.func.isRequired,
};

export default PopupGame;
