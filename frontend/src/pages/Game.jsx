import "../styles/Game.module.css";
import ClassicCard from "@components/ClassicCard";

import Logo from "../components/Logo";

function Game() {
  const cardTest = {
    id: "sc001",
    imageSource: "src/assets/scene_LaboFigma.png",
    title: "Initialisation",
    text: "Grâce au réducteur-reducer, vous êtes numérisé et injecté dans le code vérolé à sauver. Vous atterrissez sur la landing page mais une immense code-erreur terrifiante se dresse devant vous et vous menace. No need to panick ! Juste to react…",
    choices: [
      "Vous clonez le code",
      "Vous lui envoyez ctrl+alt+suppr dans son immense gueule dentée",
    ],
    popUpText: [],
  };

  return (
    <div>
      <Logo />
      <ClassicCard
        imageSource={cardTest.imageSource}
        title={cardTest.title}
        text={cardTest.text}
      />
    </div>
  );
}

export default Game;
