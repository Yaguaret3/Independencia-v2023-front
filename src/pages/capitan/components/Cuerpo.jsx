import React from 'react';
import { Grid, Box } from '@mui/material';
import Actions from './Actions';
import CapitanRegionBackground from './CapitanRegionBackground';


const Cuerpo = () => {
    return (
        <Box sx={{ flexGrow: 1, padding: 0, height: '80vh', position: 'relative', overflow: 'hidden' }}>
            <Grid container spacing={5}>
                <Grid item xs={5} >
                    <CapitanRegionBackground />
                </Grid>
                <Grid item xs={7}>
                    <Actions />
                </Grid>

            </Grid>
        </Box>
    )
}

export default Cuerpo