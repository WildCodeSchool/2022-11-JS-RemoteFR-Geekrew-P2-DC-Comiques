import PropTypes from "prop-types";
import Button from "./Button";
import styles from "../styles/Game.module.css";

function ClassicCard({ imageSource, title, text, choices }) {
  return (
    <div className={styles.main}>
      <img src={imageSource} className={styles.img} alt="Labo" />
      <h1>{title}</h1>
      <p>{text}</p>
      <div className={styles.choice}>
        <Button choice={choices[0]} />
        <Button choice={choices[0]} />
      </div>
    </div>
  );
}

ClassicCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  choices: PropTypes.shape.isRequired,
};

export default ClassicCard;
