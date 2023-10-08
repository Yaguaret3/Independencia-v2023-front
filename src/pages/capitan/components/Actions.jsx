import { Grid } from '@mui/material'
import React from 'react'
import Cartas from "./Cartas.jsx";
import Botones from "./Botones.jsx";

const Actions = () => {
    return (
        <Grid container direction={'row'} spacing={4}>
                <Grid item xs={7}>
                    <Cartas/>
                </Grid>
                <Grid item xs={5}>
                    <Botones/>
                </Grid>
        </Grid >
    )
}

export default Actions