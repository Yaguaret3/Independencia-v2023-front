import React, { useContext } from 'react'
import { Box } from '@mui/material';
import GobernadorRegionFrontground from './GobernadorRegionFrontground';
import { GobernadorContext } from '../Context';

const GobernadorRegionBackground = () => {

    const {playerData} = useContext(GobernadorContext);

    const backgroundSrc = "src/assets/img/map_independencia_recortado.jpg";

    return (
        <Box sx={{ overflow: 'hidden' }}>
            <img src={backgroundSrc}
                alt="BackgroundImage"
                style={{
                    position: 'relative',
                    top: playerData?.gameRegion?.bgTop,
                    left: playerData?.gameRegion?.bgLeft,
                    scale: playerData?.gameRegion?.bgScale
                }}
            />
            <GobernadorRegionFrontground gameRegion={playerData?.gameRegion}/>
        </Box>
    )
}

export default GobernadorRegionBackground