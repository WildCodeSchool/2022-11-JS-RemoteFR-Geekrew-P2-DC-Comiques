import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/PopupGame.module.css";

function PopupGame({ visibility, setVisibility, popUpText }) {
  return (
    <div className={styles["all-popup-container"]}>
      <div className={styles.uncliquable} />
      <div className={styles["popup-container"]}>
        <button
          type="button"
          className={styles["close-button"]}
          onClick={() => setVisibility(!visibility)}
        >
          <p className={styles.exit}>X</p>
        </button>
        <div>
          <p>{popUpText}</p>
        </div>
      </div>
    </div>
  );
}

PopupGame.propTypes = {
  visibility: PropTypes.bool.isRequired,
  setVisibility: PropTypes.func.isRequired,
  popUpText: PropTypes.string.isRequired,
};

export default PopupGame;
