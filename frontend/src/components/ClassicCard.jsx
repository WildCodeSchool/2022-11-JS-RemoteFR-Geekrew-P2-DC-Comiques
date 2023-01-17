import PropTypes from "prop-types";
import data from "../data/data.json";
import styles from "../styles/Game.module.css";

function ClassicCard({ setSelectedCard, imageSource, title, text, choices }) {
  const direction = (goTo) => {
    const newSelectedCard = data.scenarioCards.find((obj) => obj.id === goTo);
    setSelectedCard(newSelectedCard);
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
            onClick={() => direction(choice.goTo)}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}

ClassicCard.propTypes = {
  setSelectedCard: PropTypes.func.isRequired,
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
