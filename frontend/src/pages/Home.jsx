import React from "react";
import HomeButton from "@components/HomeButton";
import Footer from "@components/Footer";
import HomeText from "@components/HomeText";
import styles from "../styles/Home.module.css";

function Home() {
  const buttonChoices = ["Commencer l'aventure", "Crédits"];

  return (
    <div className={styles.home}>
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
        <HomeText />
        <HomeButton text={buttonChoices[0]} />
        <HomeButton text={buttonChoices[1]} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
