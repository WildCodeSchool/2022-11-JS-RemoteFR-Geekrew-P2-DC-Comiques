import "../styles/Game.module.css";
import { useState } from "react";
import ClassicCard from "../components/ClassicCard";
import data from "../data/data.json";

import Logo from "../components/Logo";

function Game() {
  const [selectedCard, setSelectedCard] = useState(
    data.scenarioCards.find((obj) => obj.id === "sc001")
  );

  return (
    <div>
      <Logo />
      <ClassicCard
        setSelectedCard={setSelectedCard}
        id={selectedCard.id}
        imageSource={selectedCard.imageSource}
        title={selectedCard.title}
        text={selectedCard.text}
        choices={selectedCard.choices}
      />
    </div>
  );
}

export default Game;
