import React from 'react'
import { Grid } from '@mui/material'
import Comercio from './Comercio'
import Recursos from './Recursos'
import Mercados from './Mercados'

const Acciones = () => {

    return (
        <Grid container>
            <Grid item xs={4}>
                <Comercio />
            </Grid>
            <Grid item xs={4}>
                <Recursos />
            </Grid>
            <Grid item xs={4}>
                <Mercados />
            </Grid>

        </Grid>
    )
}

export default Acciones