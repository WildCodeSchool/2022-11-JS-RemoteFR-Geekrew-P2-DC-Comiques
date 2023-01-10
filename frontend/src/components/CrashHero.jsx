import React from "react";
import styles from "../styles/Crash.module.css";
import crashData from "../data/crashData";

function CrashHero() {
  return (
    <div className={styles.background}>
      <div className={styles.greyBox}>{crashData[0].text}</div>
    </div>
  );
}

export default CrashHero;
