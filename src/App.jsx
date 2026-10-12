import { useState } from "react";
import Menu from "./Menu.jsx";
import Jeu from "./Jeu.jsx";

function App() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <>
            <Menu
                isPlaying={isPlaying}
                onNewGame={() => setIsPlaying(true)}
                onBack={() => setIsPlaying(false)}
            />

            {isPlaying && <Jeu />}
        </>
    );
}

export default App;