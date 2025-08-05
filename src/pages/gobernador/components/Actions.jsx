import { Grid } from '@mui/material'
import React from 'react'
import Botones from './Botones'
import Cartas from './Cartas'

const Actions = () => {
    return (
        <Grid container direction={'row'} spacing={4}>
                <Grid item xs={8}>
                    <Cartas />
                </Grid>
                <Grid item xs={4}>
                    <Botones />
                </Grid>
        </Grid >
    )
}

export default Actions