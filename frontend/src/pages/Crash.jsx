import React from "react";
import Header from "../components/Header";
import CrashHero from "../components/CrashHero";
import styles from "../styles/Crash.module.css";

function Crash() {
  return (
    <div className={styles.body}>
      <Header />
      <CrashHero />
    </div>
  );
}

export default Crash;
