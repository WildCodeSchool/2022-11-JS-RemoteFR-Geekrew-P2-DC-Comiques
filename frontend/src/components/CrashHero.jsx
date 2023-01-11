import React from "react";
import styles from "../styles/Crash.module.css";
import crashData from "../data/crashData";

function CrashHero() {
  return (
    <div className={styles.background}>
      <div className={styles.greyBox}>
        <h2>{crashData[0].text}</h2>
      </div>
    </div>
  );
}

export default CrashHero;
