import React, {useContext} from 'react';
import { Grid, Box } from '@mui/material';
import Actions from './Actions';
import RegionBodyBackground from '../../common/virreinatoMap/regionBody/RegionBodyBackground.jsx';
import {CapitanContext} from "../Context.jsx";


const Cuerpo = () => {

    const {gameData} = useContext(CapitanContext);

    return (
        <Box sx={{ flexGrow: 1, padding: 0, height: '80vh', position: 'relative', overflow: 'hidden' }}>
            <Grid container spacing={5}>
                <Grid item xs={7} maxHeight={'86vh'} >
                    <RegionBodyBackground gameRegion={gameData?.gameRegion}/>
                </Grid>
                <Grid item xs={5}>
                    <Actions />
                </Grid>

            </Grid>
        </Box>
    )
}

export default Cuerpo