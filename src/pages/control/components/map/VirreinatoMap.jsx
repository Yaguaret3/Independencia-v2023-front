import React from 'react';
import Regiones from "../../../control/components/map/regiones/Regiones.jsx";
import {Grid} from "@mui/material";


const VirreinatoMap = () => {
    const backgroundSrc = "src/assets/img/map_independencia_recortado.jpg";

    const backgroundMapComponent =
        <img src={backgroundSrc} alt="BackgroundImage" style={{maxHeight:'100%', maxWidth:'100%'}}/>;

    return (
        <Grid item xs={9} maxHeight={'86vh'}>
            {backgroundMapComponent}
            <Regiones/>
        </Grid>
    )
};

export default VirreinatoMap;