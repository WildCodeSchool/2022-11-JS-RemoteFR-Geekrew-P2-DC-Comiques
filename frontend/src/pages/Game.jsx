import "../styles/Game.module.css";
import ClassicCard from "../components/ClassicCard";
import data from "../data/data.json";

function Game() {
  return (
    <div>
      <ClassicCard
        imageSource={data.scenarioCards[0].imageSource}
        title={data.scenarioCards[0].title}
        text={data.scenarioCards[0].text}
        choices={data.scenarioCards[0].choices}
      />
    </div>
  );
}

export default Game;
