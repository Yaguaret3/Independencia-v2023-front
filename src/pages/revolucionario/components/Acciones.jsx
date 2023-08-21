import React from 'react'
import { Grid } from '@mui/material'
import Congreso from './Congreso'

const Acciones = () => {
  return (
    <Grid container>
      <Grid item sx={{paddingTop:'10px'}}>
        <Congreso />
      </Grid>
    </Grid>
  )
}

export default Acciones