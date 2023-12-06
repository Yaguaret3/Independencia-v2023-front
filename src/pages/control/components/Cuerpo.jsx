import React from 'react';
import {Box, Grid} from "@mui/material";

const Cuerpo = () => {
    return (
        <Box sx={{ flexGrow: 1, padding: 0, height: '80vh', position: 'relative', overflow: 'hidden' }}>
            <Grid container spacing={5}>
                <Grid item xs={6} >

                </Grid>

                <Grid item xs={6}>

                </Grid>

            </Grid>
        </Box>
    );
};

export default Cuerpo;