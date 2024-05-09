import React from 'react';
import Regiones from "./regiones/Regiones.jsx";
import {Grid} from "@mui/material";


const VirreinatoMap = ({gameData, xs}) => {
    const backgroundSrc = "src/assets/img/map_independencia_recortado.jpg";

    const backgroundMapComponent =
        <img src={backgroundSrc} alt="BackgroundImage" style={{maxHeight:'100%', maxWidth:'100%'}}/>;

    return (
        <Grid item xs={xs} maxHeight={'86vh'}>
            {backgroundMapComponent}
            <Regiones gameData={gameData}/>
        </Grid>
    )
};

export default VirreinatoMap;