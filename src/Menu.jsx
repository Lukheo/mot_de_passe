
import { useState } from "react";
import viteLogo from "./assets/logo-adapei72-2x.webp";
import "./Menu.css";
import GlitchTitle from "./GlitchTitle";

function Menu({ isPlaying, onNewGame, onBack }) {
  const [isTop, setIsTop] = useState(false);

  const handleClick = () => {
    if (isPlaying) {
      setIsTop(false);
      onBack();
    } else {
      setIsTop(true);
      onNewGame();
    }
  };

  return (
    <section id="center">
      <div id="hero" className={isTop ? "top" : ""}>
        <img src={viteLogo} className="base" alt="" />

        <GlitchTitle text="Mot de passe" />

        <button className="btn" onClick={handleClick}>
          {isPlaying ? "Retour" : "Nouvelle partie"}
        </button>
      </div>
    </section>
  );
}

export default Menu;