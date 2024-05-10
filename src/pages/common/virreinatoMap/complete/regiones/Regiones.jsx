import React, {useContext} from 'react';
import Region from "./Region.jsx";
import {ControlContext} from "../../../../control/Context.jsx";

const Regiones = ({gameData}) => {

    return (
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 1069 1238.48" xmlSpace="preserve" style={{
            position: 'absolute',
            left: '1vh',
            width: '71vh'
        }}>

            {gameData?.gameRegions?.map((r) => (
                <Region key={r.id}
                    region={r}
                />
            ))}

        </svg>
    );
};

export default Regiones;