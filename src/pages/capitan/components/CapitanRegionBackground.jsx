import React, { useContext } from 'react'
import { Box } from '@mui/material';
import { CapitanContext } from '../Context';
import CapitanRegionFrontground from "./CapitanRegionFrontground.jsx";

const CapitanRegionBackground = () => {

    const {playerData} = useContext(CapitanContext);

    const backgroundSrc = "src/assets/img/map_independencia_recortado.jpg";

    return (
        <Box sx={{ overflow: 'hidden' }}>
            <img src={backgroundSrc}
                alt="BackgroundImage"
                style={{
                    position: 'relative',
                    top: playerData && playerData.gameRegion && playerData.gameRegion.bgTop,
                    left: playerData && playerData.gameRegion && playerData.gameRegion.bgLeft,
                    scale: playerData && playerData.gameRegion && playerData.gameRegion.bgScale
                }}
            />
            <CapitanRegionFrontground gameRegion={playerData && playerData.gameRegion}/>
        </Box>
    )
}

export default CapitanRegionBackground