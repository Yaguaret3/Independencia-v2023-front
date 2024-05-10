import { Grid } from '@mui/material'
import React from 'react'
import Cartas from "./Cartas.jsx";
import Botones from "./Botones.jsx";

const Actions = () => {
    return (
        <Grid container spacing={2}>
                <Grid item xs={6} xl={7}>
                    <Cartas/>
                </Grid>
                <Grid item xs={6} xl={5}>
                    <Botones/>
                </Grid>
        </Grid >
    )
}

export default Actions