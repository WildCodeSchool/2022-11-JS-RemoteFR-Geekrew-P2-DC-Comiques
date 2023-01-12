import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "../styles/Popup.module.css";

// eslint-disable-next-line react/prop-types
function Popup({ open, onClose }) {
  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.PopupContainer}>
        <div className={styles.popupRight}>
          <button type="button" className={styles.closeBtn} onClick={onClose}>
            <p className={styles.croix}>X</p>
          </button>
          <div className={styles.content}>
            <h1>Attention</h1>
            <p className={styles.boldX}>
              voulez vous vraiment quitter la partie ?
            </p>
          </div>
          <div className={styles.btnContainer}>
            <button type="button" className={styles.btnExit} onClick={onClose}>
              <span>revenir au jeu</span>
            </button>
            <Link to="/">
              <button type="button" className={styles.btnExit}>
                <span>Quitter la partie</span>
              </button>
            </Link>
            ;
          </div>
        </div>
      </div>
    </div>
  );
}

Popup.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Popup;
