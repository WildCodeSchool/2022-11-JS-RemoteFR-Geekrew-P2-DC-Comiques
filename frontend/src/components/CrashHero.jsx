import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Crash.module.css";
import crashData from "../data/crashData";

function CrashHero() {
  return (
    <div className={styles.background}>
      <div className={styles.greyBox}>
        <h2>{crashData[0].text}</h2>
      </div>
      <div>
        <Link to="/">
          <button type="button" className={styles.btnExit}>
            <span>Retour à l'accueil</span>
          </button>
        </Link>
        ;
      </div>
    </div>
  );
}

export default CrashHero;
