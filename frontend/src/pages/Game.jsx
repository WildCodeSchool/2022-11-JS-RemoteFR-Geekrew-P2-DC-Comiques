import "../styles/Game.module.css";
import { useState } from "react";
import ClassicCard from "../components/ClassicCard";
import data from "../data/data.json";

import Logo from "../components/Logo";

function Game() {
  const [content, setContent] = useState(data.scenarioCards[0]);
  return (
    <div>
      <Logo />

      <ClassicCard
        setContent={setContent}
        imageSource={content.imageSource}
        title={content.title}
        text={content.text}
        choices={content.choices}
      />
    </div>
  );
}

export default Game;
