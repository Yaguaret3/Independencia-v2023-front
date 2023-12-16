import React from 'react';
import Regiones from "../../../control/components/map/regiones/Regiones.jsx";


const VirreinatoMap = () => {
    const backgroundSrc = "src/assets/img/map_independencia_recortado.jpg";

    const backgroundMapComponent =
        <img src={backgroundSrc} alt="BackgroundImage" style={{ position:'absolute', top:0, left:0, maxHeight: '100%', width: 'auto' }} />;

    return (
        <>
            {backgroundMapComponent}
            <Regiones/>
        </>
    )
};

export default VirreinatoMap;