import React, {useContext} from 'react';
import { Grid, Box } from '@mui/material';
import Actions from './Actions';
import RegionBodyBackground from "../../common/virreinatoMap/regionBody/RegionBodyBackground.jsx";
import {GobernadorContext} from "../Context.jsx";


const Cuerpo = () => {

    const {playerData} = useContext(GobernadorContext);

    return (
        <Box sx={{ flexGrow: 1, padding: 0, height: '80vh', position: 'relative', overflow: 'hidden' }}>
            <Grid container spacing={5}>
                <Grid item xs={5} >
                    <RegionBodyBackground gameRegion={playerData?.gameRegion}/>
                </Grid>
                <Grid item xs={7}>
                    <Actions />
                </Grid>

            </Grid>
        </Box>
    )
}

export default Cuerpo