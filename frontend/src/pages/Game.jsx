import "../styles/Game.module.css";
import { useState } from "react";
import ClassicCard from "../components/ClassicCard";
import CrashHero from "../components/CrashHero";
import data from "../data/data.json";
import Logo from "../components/Logo";
import PopupGame from "../components/PopupGame";

function Game() {
  const [scenario, setScenario] = useState(
    data.scenarioCards.find((obj) => obj.id === "sc001")
  );

  const [event, setEvent] = useState(
    data.eventCards.find((card) => card.id === "ec001")
  );

  const [type, setType] = useState("scenarioCard");

  const [visibility, setVisibility] = useState(false);

  return (
    <div>
      <Logo />
      {visibility && (
        <PopupGame visibility={visibility} setVisibility={setVisibility} />
      )}
      {type === "scenarioCard" && (
        <ClassicCard
          setScenario={setScenario}
          setEvent={setEvent}
          setType={setType}
          id={scenario.id}
          imageSource={scenario.imageSource}
          title={scenario.title}
          text={scenario.text}
          choices={scenario.choices}
          visibility={visibility}
          setVisibility={setVisibility}
        />
      )}
      {type === "eventCard" && (
        <CrashHero
          setScenario={setScenario}
          setEvent={setEvent}
          setType={setType}
          id={event.id}
          imageSource={event.imageSource}
          text={event.text}
          buttonText={event.buttonText}
          goTo={event.goTo}
          type={event.type}
        />
      )}
    </div>
  );
}

export default Game;
