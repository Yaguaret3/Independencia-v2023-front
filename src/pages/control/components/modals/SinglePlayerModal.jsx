import React from 'react';
import GobernadorModalViewForControl from "./gobernador/GobernadorModalViewForControl.jsx";
import CapitanModalViewForControl from "../CapitanModalViewForControl.jsx";
import MercaderModalViewForControl from "./mercader/MercaderModalViewForControl.jsx";
import RevolucionarioModalViewForControl from "../RevolucionarioModalViewForControl.jsx";

const SinglePlayerModal = ({open, handleClose, player} ) => {

    switch (player?.rol) {
        case 'GOBERNADOR':
            return <GobernadorModalViewForControl open ={open}
                                                  handleClose ={handleClose}
                                                  gobernador ={player}/>
        case 'CAPITAN':
            return <CapitanModalViewForControl open ={open}
                                               handleClose ={handleClose}
                                               capitan ={player}/>
        case 'MERCADER':
            return <MercaderModalViewForControl open ={open}
                                                handleClose ={handleClose}
                                                mercader ={player} />
        case 'REVOLUCIONARIO':
            return <RevolucionarioModalViewForControl open ={open}
                                                      handleClose ={handleClose}
                                                      revolucionario ={player} />
        default:
            return;
    }
};

export default SinglePlayerModal;