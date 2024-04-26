import React, { useContext } from 'react'
import { Box } from '@mui/material';
import { CapitanContext } from '../Context';
import CapitanRegionFrontground from "./CapitanRegionFrontground.jsx";

const CapitanRegionBackground = () => {

    const {gameData} = useContext(CapitanContext);

    const backgroundSrc = "src/assets/img/map_independencia_recortado.jpg";

    return (
        <Box sx={{ overflow: 'hidden' }}>
            <img src={backgroundSrc}
                alt="BackgroundImage"
                style={{
                    position: 'relative',
                    top: gameData?.gameRegion?.bgTop,
                    left: gameData?.gameRegion?.bgLeft,
                    scale: gameData?.gameRegion?.bgScale
                }}
            />
            <CapitanRegionFrontground gameRegion={gameData?.gameRegion}/>
        </Box>
    )
}

export default CapitanRegionBackground