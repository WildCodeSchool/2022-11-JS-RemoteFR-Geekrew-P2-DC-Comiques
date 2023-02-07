import React, { useState } from "react";

import HomeButton from "../components/HomeButton";
import Footer from "../components/Footer";
import HomeText from "../components/HomeText";
import Curtain from "../components/Curtain";
import data from "../data/homecredits.json";
import Pseudo from "../components/Pseudo";
import logo from "../assets/LogoGitPushForce.png";
import styles from "../styles/Home.module.css";

function Home() {
  const { credits } = data;
  const { welcomeMessage } = data;

  const localPseudo = localStorage.getItem("pseudo") || "Agent 404";
  const [pseudo, setPseudo] = useState(localPseudo);

  const [active, setActive] = useState(false);

  const handleChange = () => {
    setActive(!active);
  };

  const buttonChoices = {
    first: {
      id: 1,
      text: "Commencer l'aventure",
    },
    second: {
      id: 2,
      text: "Crédits",
    },
  };

  return (
    <div className={styles.home}>
      <Curtain />
      <Pseudo className="pseudo" pseudo={pseudo} setPseudo={setPseudo} />
      <main className={styles.main}>
        <div className={styles["logo-container"]}>
          <img src={logo} alt="Logo de l'application" className={styles.logo} />
        </div>
        <div className={styles["title-container"]}>
          <h1 className={styles.title}>Bienvenue dans la Git Push Force !</h1>
        </div>
        <HomeText
          active={active}
          credits={credits}
          welcomeMessage={welcomeMessage}
          pseudo={pseudo}
        />
        <div className={styles.buttonsContainer}>
          <HomeButton
            buttonChoices={buttonChoices.first}
            handleChange={handleChange}
          />
          <HomeButton
            buttonChoices={buttonChoices.second}
            handleChange={handleChange}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
