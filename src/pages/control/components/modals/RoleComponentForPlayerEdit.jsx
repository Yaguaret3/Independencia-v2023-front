import React from 'react';
import GobernadorComponentForPlayerEdit from "./gobernador/GobernadorComponentForPlayerEdit.jsx";

const RoleComponentForPlayerEdit = ({player} ) => {

    switch (player?.rol) {
        case 'GOBERNADOR':
            return <GobernadorComponentForPlayerEdit player ={player}/>
        case 'CAPITAN':
            return <CapitanComponentForPlayerEdit player ={player}/>
        case 'MERCADER':
            return <MercaderComponentForPlayerEdit player ={player} />
        case 'REVOLUCIONARIO':
            return <RevolucionarioComponentForPlayerEdit player ={player} />
        default:
            return;
    }
};

export default RoleComponentForPlayerEdit;