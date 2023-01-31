import { useState } from "react";
import styles from "../styles/Pseudo.module.css";

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const [isSaved, setSaved] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPopupOpen(false);
    setSaved(true);
  };

  return (
    <div className={styles.pseudo}>
      {pseudo}
      <button type="button" onClick={() => setPopupOpen(true)}>
        &nbsp;{isSaved ? "Modify Pseudo" : "Enter Pseudo"}
      </button>
      {isPopupOpen && (
        <div className="popup">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Pseudo"
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
            />
            <button type="submit"> </button>
            <button
              type="button"
              onClick={() => {
                setPopupOpen(false);
                setSaved(true);
              }}
            >
              &nbsp;Save & Close
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
