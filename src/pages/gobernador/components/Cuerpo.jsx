import React from 'react';
import { Grid, Box, Button } from '@mui/material';
import Actions from './Actions';
import GobernadorRegionBackground from './GobernadorRegionBackground';


const Cuerpo = () => {
    return (
        <Box sx={{ flexGrow: 1, padding: 0, height: '80vh', position: 'relative', overflow: 'hidden' }}>
            <Grid container spacing={5}>
                <Grid item xs={5} >
                    <GobernadorRegionBackground />
                </Grid>
                <Grid item xs={7}>
                    <Actions />
                </Grid>

            </Grid>
        </Box>
    )
}

export default Cuerpo