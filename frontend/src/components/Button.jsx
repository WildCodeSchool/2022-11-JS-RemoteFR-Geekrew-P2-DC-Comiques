import PropTypes from "prop-types";
import styles from "../styles/Button.module.css";

function Button({ content }) {
  return (
    <button type="button" className={styles.button}>
      {content}
    </button>
  );
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Button;
