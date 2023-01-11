import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/Home.module.css";

function HomeButton({ text }) {
  return (
    <div className={styles["button-container"]}>
      <button type="button">{text}</button>
    </div>
  );
}

HomeButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HomeButton;
