import React, {useState} from 'react';
import GobernadorCard from "./GobernadorCard.jsx";
import CapitanCard from "./CapitanCard.jsx";
import MercaderCard from "./MercaderCard.jsx";
import RevolucionarioCard from "./RevolucionarioCard.jsx";

const PlayerCard = ({player}) => {

    const [component, setComponent] = useState(<></>)

    const card = () => {
        switch(player.rol) {
            case "GOBERNADOR":
                setComponent(<GobernadorCard gobernador={player}/>)
            case "CAPITAN":
                setComponent(<CapitanCard capitan={player} />)
            case "MERCADER":
                setComponent(<MercaderCard mercader={player} />)
            case "REVOLUCIONARIO":
                setComponent(<RevolucionarioCard revolucionario={player} />)
        }
    }

    return (
        component
    );
};

export default PlayerCard;