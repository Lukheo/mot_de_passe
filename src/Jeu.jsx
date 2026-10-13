
import { useState } from "react";
import "./Jeu.css";
import Rebours from "./Rebours.jsx";

function Jeu() {
  const [compteur, setCompteur] = useState(1);
  const [phase, setPhase] = useState("preparation");
  const [isRevealed, setIsRevealed] = useState(false);

  const handlePreparationFinish = () => {
    setPhase("jeu");
  };

  const handleJeuFinish = () => {
    setCompteur((c) => c + 1);
    setPhase("preparation");
    setIsRevealed(false);
  };

  return (
    <section id="jeu">
      <div>
        <h2>Manche {compteur}</h2>
      </div>

      <div id="interface">
        {phase === "preparation" ? (
          <>
            <h3 className="rebours">
              Début dans...

              <Rebours
                key={`prep-${compteur}`}
                duree={10}
                onFinish={handlePreparationFinish}
              />
            </h3>
          </>
        ) : (
          <>
            <div className="mot-de-passe" onClick={() => setIsRevealed(true)}>
              <h3 className={isRevealed ? "mot-visible" : "mot-floute"}>ÉLÉPHANT</h3>
            </div>

            <h3 className="rebours">
              Temps restant

              <Rebours
                key={`jeu-${compteur}`}
                duree={30}
                onFinish={handleJeuFinish}
              />
            </h3>
          </>
        )}
      </div>
    </section>
  );
}

export default Jeu;
