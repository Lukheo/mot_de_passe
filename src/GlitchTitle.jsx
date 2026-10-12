import { useState } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

function GlitchTitle({ text }) {
    const [display, setDisplay] = useState(text);

    const handleMouseEnter = () => {
        let iteration = 0;

        const interval = setInterval(() => {
            setDisplay(
                text
                    .split("")
                    .map((char, index) => {
                        if (char === " ") return " ";
                        if (index < iteration) return text[index];

                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            iteration += 0.5;

            if (iteration >= text.length) {
                clearInterval(interval);
                setDisplay(text);
            }
        }, 20);
    };

    return <h1 onMouseEnter={handleMouseEnter}>
        <span className="bracket">[ </span>
        {display}
        <span className="bracket"> ]</span>
    </h1>;
}

export default GlitchTitle;