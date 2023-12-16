import React from 'react';
import GobernadorCard from "./GobernadorCard.jsx";
import CapitanCard from "./CapitanCard.jsx";
import MercaderCard from "./MercaderCard.jsx";
import RevolucionarioCard from "./RevolucionarioCard.jsx";

const PlayerCard = ({player}) => {


    const card = () => {
        switch(player.rol) {
            case "GOBERNADOR":
                return <GobernadorCard gobernador={player} />
            case "CAPITAN":
                return <CapitanCard capitan={player} />
            case "MERCADER":
                return <MercaderCard mercader={player} />
            case "REVOLUCIONARIO":
                return <RevolucionarioCard revolucionario={player} />
        }
    }

    return (
        card
    );
};

export default PlayerCard;