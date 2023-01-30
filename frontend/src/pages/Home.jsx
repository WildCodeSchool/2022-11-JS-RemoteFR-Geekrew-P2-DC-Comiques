import React, { useState } from "react";

import HomeButton from "../components/HomeButton";
import Footer from "../components/Footer";
import HomeText from "../components/HomeText";
import Curtain from "../components/Curtain";
import data from "../data/homecredits.json";
import styles from "../styles/Home.module.css";

function Home() {
  const { credits } = data;
  const { welcomeMessage } = data;

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
      <main className={styles.main}>
        <div className={styles["logo-container"]}>
          <img
            className={styles.logo}
            src="src/assets/LogoGitPushForce.png"
            alt="Logo"
          />
        </div>
        <div className={styles["title-container"]}>
          <h1 className={styles.title}>Bienvenue dans la Git Push Force !</h1>
        </div>
        <HomeText
          active={active}
          credits={credits}
          welcomeMessage={welcomeMessage}
        />
        <HomeButton
          className={styles.button1}
          buttonChoices={buttonChoices.first}
          handleChange={handleChange}
        />
        <HomeButton
          className={styles.button2}
          buttonChoices={buttonChoices.second}
          handleChange={handleChange}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
