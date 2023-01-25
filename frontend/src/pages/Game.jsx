import "../styles/Game.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ClassicCard from "../components/ClassicCard";
import CrashHero from "../components/CrashHero";
import Logo from "../components/Logo";
import PopupGame from "../components/PopupGame";

function Game() {
  const [scenarios, setScenarios] = useState([]);
  const [scenario, setScenario] = useState(null);
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/scenario_cards").then((res) => {
      const formatedData = res.data.map((elem) => ({
        ...elem,
        choices: JSON.parse(decodeURIComponent(elem.choices)),
      }));
      setScenarios(formatedData);
      setScenario(formatedData.find((obj) => obj.id === "sc001"));
    });

    axios.get("http://localhost:8000/event_cards").then((res) => {
      setEvents(res.data);
      setEvent(res.data.find((obj) => obj.id === "ec001"));
    });
  }, []);

  const [type, setType] = useState("scenarioCard");

  const [visibility, setVisibility] = useState(false);

  const [popUpText, setPopUpText] = useState("");

  return (
    <div>
      <Logo />
      {visibility && (
        <PopupGame
          visibility={visibility}
          setVisibility={setVisibility}
          choices={scenario.choices}
          popUpText={popUpText}
        />
      )}
      {scenario && type === "scenarioCard" && (
        <ClassicCard
          setScenario={setScenario}
          setEvent={setEvent}
          setType={setType}
          id={scenario.id}
          imageSource={scenario.image_source}
          title={scenario.title}
          text={scenario.text}
          choices={scenario.choices}
          visibility={visibility}
          setVisibility={setVisibility}
          setPopUpText={setPopUpText}
          dataScenarios={scenarios}
          dataEvents={events}
        />
      )}
      {event && type === "eventCard" && (
        <CrashHero
          setScenario={setScenario}
          setEvent={setEvent}
          setType={setType}
          id={event.id}
          imageSource={event.image_source}
          text={event.text}
          buttonText={event.button_text}
          goTo={event.go_to}
          type={event.type}
          dataScenarios={scenarios}
          dataEvents={events}
        />
      )}
    </div>
  );
}

export default Game;
