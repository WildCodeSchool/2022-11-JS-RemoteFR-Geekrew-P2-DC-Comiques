import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../styles/Crash.module.css";
import data from "../data/data.json";

function CrashHero({
  setSelectedCard,
  setType,
  id,
  text,
  buttonText,
  goTo,
  type,
}) {
  const navigate = useNavigate();
  const direction = (pathTo, buttonType) => {
    if (buttonType === "game over") {
      navigate(`/`);
    }
    if (buttonType === "turn back") {
      const newSelectedCard = data.scenarioCards.find(
        (obj) => obj.id === "sc002"
      );
      setSelectedCard(newSelectedCard);
      setType("scenarioCard");
    }
    if (buttonType === "transition") {
      const newSelectedCard = data.eventCards.find((obj) => obj.id === pathTo);
      setSelectedCard(newSelectedCard);
      setType("scenarioCard");
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.greyBox}>
        <h2>{text}</h2>
      </div>
      <div>
        <button
          className={styles.button}
          type="button"
          key={id}
          onClick={() => direction(goTo, type)}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

CrashHero.propTypes = {
  setSelectedCard: PropTypes.func.isRequired,
  setType: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  goTo: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default CrashHero;
