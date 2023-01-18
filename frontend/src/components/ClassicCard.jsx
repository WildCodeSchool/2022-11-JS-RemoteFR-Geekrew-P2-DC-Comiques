import PropTypes from "prop-types";
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
}) {
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

  return (
    <div className={styles.main}>
      <img src={imageSource} className={styles.img} alt="Labo" />
      <h1>{title}</h1>
      <p>{text}</p>
      <div className={styles.choice}>
        {choices.map((choice) => (
          <button
            className={styles.button}
            type="button"
            key={choice.goTo}
            onClick={() => direction(choice.goTo, choice.type)}
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
