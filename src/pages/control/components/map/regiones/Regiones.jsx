import React, {useContext} from 'react';
import Region from "../../../../control/components/map/regiones/Region.jsx";
import {ControlContext} from "../../../Context.jsx";

const Regiones = () => {

    const {gameData} = useContext(ControlContext);

    return (
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 1069 1238.48" xmlSpace="preserve" style={{
            position: 'absolute',
            left: '-2px',
            width: 'auto',
            top: '-2px',
            height: '96%'
        }}>

            {gameData?.gameRegions?.map((r) => (
                <Region
                    region={r}
                />
            ))}

        </svg>
    );
};

export default Regiones;