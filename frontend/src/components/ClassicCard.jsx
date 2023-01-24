import PropTypes from "prop-types";
import { useState } from "react";
import data from "../data/data.json";
import styles from "../styles/Game.module.css";

function ClassicCard({
  setEvent,
  setScenario,
  setType,
  imageSource,
  title,
  text,
  choices,
  visibility,
  setVisibility,
  setPopUpText,
}) {
  const [charabiaString, setCharabiaString] = useState(false);

  const direction = (goTo, type) => {
    if (type === "scenarioCard") {
      const newScenario = data.scenarioCards.find((obj) => obj.id === goTo);
      setScenario(newScenario);
    }
    if (type === "eventCard") {
      const newEvent = data.eventCards.find((obj) => obj.id === goTo);
      setEvent(newEvent);
    }
    setType(type);
  };

  const triggerPopup = (popUpText) => {
    setVisibility(!visibility);
    setPopUpText(popUpText);
  };

  const popUpDirection = (id, popUpText) => {
    if (id === "ch007") {
      triggerPopup(popUpText);
      setCharabiaString(true);
    }
  };

  const buttonStyle = (type) => {
    if (charabiaString && type === "popUp") {
      return styles["clicked-button"];
    } else {
      return styles.button;
    }
  };

  return (
    <div className={styles.main}>
      <img src={imageSource} className={styles.img} alt="Labo" />
      <h1>{title}</h1>
      <p>{text}</p>
      <div className={styles.choice}>
        {choices.map((choice) => (
          <button
            className={buttonStyle(choice.type)}
            type="button"
            key={choice.goTo}
            onClick={() => {
              if (choice.type === "popUp") {
                popUpDirection(choice.id, choice.popUpText);
              }
              if (
                choice.type === "eventCard" ||
                choice.type === "scenarioCard"
              ) {
                direction(choice.goTo, choice.type);
              }
            }}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}

ClassicCard.propTypes = {
  setScenario: PropTypes.func.isRequired,
  setEvent: PropTypes.func.isRequired,
  setType: PropTypes.func.isRequired,
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  visibility: PropTypes.bool.isRequired,
  setVisibility: PropTypes.func.isRequired,
  setPopUpText: PropTypes.func.isRequired,
  choices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      goTo: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ClassicCard;
