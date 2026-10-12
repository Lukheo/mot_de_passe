import { useState, useEffect, useRef, useCallback } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&_-*";

function GlitchTitle({ text }) {
    const [display, setDisplay] = useState("");
    const [started, setStarted] = useState(false);

    const animating = useRef(false);
    const intervalRef = useRef(null);

    const reveal = useCallback(() => {
        if (animating.current) return;

        animating.current = true;
        setStarted(true);
        setDisplay("");

        let index = 0;
        let frame = 0;
        let revealed = "";

        intervalRef.current = setInterval(() => {
            const nextChar = text[index];

            if (nextChar === " ") {
                revealed += " ";
                index++;
                frame = 0;
                setDisplay(revealed);
            } else {
                const randomChar =
                    chars[Math.floor(Math.random() * chars.length)];

                setDisplay(revealed + randomChar);
                frame++;

                if (frame >= 4) {
                    revealed += nextChar;
                    index++;
                    frame = 0;
                    setDisplay(revealed);
                }
            }

            if (index >= text.length) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
                setDisplay(text);
                animating.current = false;
            }
        }, 35);
    }, [text]);

    useEffect(() => {
        const timeout = setTimeout(reveal, 300);

        return () => {
            clearTimeout(timeout);
            clearInterval(intervalRef.current);
        };
    }, [reveal]);

    return (
        <h1 onMouseEnter={reveal}>
            <span className="bracket">[ </span>
            {started && display} _
            <span className="bracket"> ]</span>
        </h1>
    );
}

export default GlitchTitle;
