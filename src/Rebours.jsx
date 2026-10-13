import { useState, useEffect } from "react";

function Rebours({ duree = 10, onFinish }) {
    const [secondes, setSecondes] = useState(duree);

    useEffect(() => {
        if (secondes <= 0) {
            onFinish("temps écoulé");
            return;
        }

        const timer = setTimeout(() => {
            setSecondes((s) => s - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [secondes]);

    return <p id="rebours">{secondes}</p>
}


export default Rebours