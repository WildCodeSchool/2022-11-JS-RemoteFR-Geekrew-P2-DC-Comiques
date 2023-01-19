import React from "react";
import PropTypes from "prop-types";

import styles from "../styles/PopupGame.module.css";

function PopupGame({ visibility, setVisibility }) {
  if (!visibility) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.PopupContainer}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={() => setVisibility(!visibility)}
        >
          <p className={styles.croix}>X</p>
        </button>
        <div className={styles.content}>
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
