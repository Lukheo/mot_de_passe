
import { useCallback, useState } from "react";
import "./Jeu.css";
import Rebours from "./Rebours.jsx";

function Jeu() {
  const [manche, setManche] = useState(1);
  const [essai, setEssai] = useState(1);
  const [phase, setPhase] = useState("preparation");
  const [isRevealed, setIsRevealed] = useState(false);
  const [points, setPoints] = useState(0);
  const [victoire, setVictoire] = useState(false);

  const mot = "Test"

  const handlePreparationFinish = useCallback(() => {
    setEssai(1);
    setIsRevealed(false);
    setPhase("jeu");
  }, []);

  const handleMancheSuivante = () => {
    setManche((m) => m + 1);
    setEssai(1);
    setPhase("preparation");
    setIsRevealed(false);
  };

  const handleMotDevine = () => {
    setPoints((p) => p + (5 - essai));
    setPhase("fin");
    setVictoire(true);
  };

  const handleTempsEcoule = useCallback(() => {
    if (essai < 4) {
      setEssai((e) => e + 1);
    } else {
      setPhase("fin");
      setVictoire(false);
    }
  }, [essai])

  return (
    <section id="jeu">
      <div id="hud">
        <h2>Manche {manche}</h2>
        <p>Score : {points} points</p>
      </div>

      <div id="interface">
        {phase === "preparation" && (
          <>
            <h3 className="rebours">
              Début dans...

              <Rebours
                key={`prep-${manche}`}
                duree={10}
                onFinish={handlePreparationFinish}
              />
            </h3>
          </>
        )}
        {phase === "jeu" && (
          <>
            <div className="mot-de-passe" onClick={() => setIsRevealed(true)}>
              <div className="spots">
                {[0, 1, 2, 3].map((spot) => (
                  <span
                    key={spot}
                    className={`spot ${spot < essai - 1 ? "eteint" : ""}`}
                  />
                ))}
              </div>
              <h3 className={`pixel ${isRevealed ? "mot-floute visible" : "mot-floute"}`}>{mot}</h3>
              <div className="spots">
                {[3, 2, 1, 0].map((spot) => (
                  <span
                    key={spot}
                    className={`spot ${spot < essai - 1 ? "eteint" : ""}`}
                  />
                ))}
              </div>
            </div>

            <button className="btn" onClick={handleMotDevine}>
              Mot deviné !
            </button>

            <h3 className="rebours">
              Essai {essai}/4 <br />
              Temps restant

              <Rebours
                key={`essai-${manche}-${essai}`}
                duree={15}
                onFinish={handleTempsEcoule}
              />
            </h3>
          </>
        )}
        {phase === "fin" && (
          <>
            <div id="fin">
              {victoire ? (<>
                <h3 className="pixel">Victoire !</h3>
                <p>"{mot}" trouvé en {essai} essai{essai == 1 ? "" : "s"}.</p>
                <p>Points gagnés : {5 - essai}</p>
              </>
              ) : (<>
                <h3 className="pixel">Défaite...</h3>
                <p>Le mot était "{mot}".</p>
                <p>Vous ferez mieux la prochaine fois</p>
              </>)}

              <button className="btn" onClick={handleMancheSuivante}>Manche suivante</button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Jeu;
