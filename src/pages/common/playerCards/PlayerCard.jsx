import React, {useEffect, useState} from 'react';
import GobernadorCard from "./GobernadorCard.jsx";
import CapitanCard from "./CapitanCard.jsx";
import MercaderCard from "./MercaderCard.jsx";
import RevolucionarioCard from "./RevolucionarioCard.jsx";
import service from "../../revolucionario/Service.js";

const PlayerCard = ({player}) => {

    const [component, setComponent] = useState(<></>)

    useEffect(() => {
        function draw() {
            switch(player.rol) {
                case "GOBERNADOR":
                    setComponent(<GobernadorCard gobernador={player}/>)
                    break;
                case "CAPITAN":
                    setComponent(<CapitanCard capitan={player} />)
                    break;
                case "MERCADER":
                    setComponent(<MercaderCard mercader={player} />)
                    break;
                case "REVOLUCIONARIO":
                    setComponent(<RevolucionarioCard revolucionario={player} />)
                    break;
            }
        }
        draw();
    }, []);

    return (
        component
    );
};

export default PlayerCard;