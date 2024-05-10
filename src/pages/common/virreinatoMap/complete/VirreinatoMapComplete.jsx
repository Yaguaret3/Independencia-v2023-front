import React from 'react';
import Regiones from "./regiones/Regiones.jsx";
import {Grid} from "@mui/material";


const VirreinatoMapComplete = ({gameData, xs, xl}) => {
    const backgroundSrc = "src/assets/img/map_independencia_recortado.jpg";

    const backgroundMapComponent =
        <img src={backgroundSrc} alt="BackgroundImage" style={{maxHeight:'100%', maxWidth:'100%'}}/>;

    return (
        <Grid item xs={xs} xl={xl} maxHeight={'86vh'}>
            {backgroundMapComponent}
            <Regiones gameData={gameData}/>
        </Grid>
    )
};

export default VirreinatoMapComplete;