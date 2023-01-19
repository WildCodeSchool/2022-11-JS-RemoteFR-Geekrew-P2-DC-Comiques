import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Win.css";
import logo from "../assets/LogoGitPushForce.png";

function Win() {
  return (
    <div className={styles.fond}>
      <img src={logo} alt="Logo de l'application" className={styles.logo} />

      <div className={styles["text-container"]}>
        <h1 className={styles.text}>Api end</h1>
        <p>
          Splendide ! L’ignominieuse code-erreur détale en voyant la propreté et
          la clareté de vos modifications du code-source. L’application est
          sauvée ! Encore une tâche accomplie avec bravoure par la git push
          force !
        </p>
      </div>
      <div>
        <Link to="/">
          <button type="button" className={styles.btnExit}>
            <span>retour à l'accueil</span>
          </button>
        </Link>
        ;
      </div>
    </div>
  );
}

export default Win;
