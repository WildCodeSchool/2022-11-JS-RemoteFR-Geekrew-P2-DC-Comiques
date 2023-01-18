import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../styles/Crash.module.css";
import data from "../data/data.json";

function CrashHero({
  setScenario,
  setEvent,
  setType,
  id,
  text,
  buttonText,
  goTo,
  type,
}) {
  const navigate = useNavigate();
  const direction = (pathTo, eventType) => {
    if (eventType === "game over") {
      navigate(`/`);
    }
    if (eventType === "turn back") {
      const newScenario = data.scenarioCards.find((obj) => obj.id === "sc002");
      setScenario(newScenario);
      setType("scenarioCard");
    }
    if (eventType === "transition") {
      if (pathTo.charAt(0) === "e") {
        const newEventCard = data.eventCards.find((obj) => obj.id === pathTo);
        setEvent(newEventCard);
        setType("eventCard");
      }
      if (pathTo.charAt(0) === "s") {
        const newScenario = data.scenarioCards.find((obj) => obj.id === pathTo);
        setScenario(newScenario);
        setType("scenarioCard");
      }
      if (pathTo.charAt(0) === "H") {
        navigate(`/`);
      }
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
  setScenario: PropTypes.func.isRequired,
  setEvent: PropTypes.func.isRequired,
  setType: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  goTo: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default CrashHero;
