import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/Home.module.css";

function HomeButton({ buttonChoices, handleChange }) {
  function buttonChange() {
    if (buttonChoices.id === 2) {
      handleChange();
    }
  }

  return (
    <div className={styles["button-container"]}>
      <button type="button" onClick={buttonChange} id={buttonChoices.id}>
        {buttonChoices.text}
      </button>
    </div>
  );
}

HomeButton.propTypes = {
  buttonChoices: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default HomeButton;
