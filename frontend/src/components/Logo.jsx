import React from "react";
import LogoGitPush from "../assets/LogoGitPushForce.png";
import Styles from "../styles/Logo.css";

function Logo() {
  return <img className={Styles.logo} src={LogoGitPush} alt="logo" />;
}

export default Logo;
