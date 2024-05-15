import React from 'react'
import { Box } from '@mui/material';
import Subregiones from "../complete/regiones/Subregiones.jsx";

const RegionBodyBackground = ({gameRegion}) => {

    const plainURL = 'src/assets/img/%s.jpg'.replace("%s", gameRegion?.jpg)

    const backgroundRegion =  encodeURI(plainURL);

    return (
        <Box style={{
            position: 'absolute',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 3,
            height:'95vh',
            overflow:"hidden"

        }}>
            <img src={backgroundRegion} height={'100%'}/>
            <Subregiones region={gameRegion}/>
        </Box>
    )
}

export default RegionBodyBackground