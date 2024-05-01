import React, { useContext } from 'react'
import { Box, Grid } from '@mui/material'
import Acciones from './Acciones'
import VirreinatoMap from '../../common/VirreinatoMap'
import { RevolucionarioContext } from '../Context'
import Cartas from "./Cartas.jsx";

const Cuerpo = () => {

  const {gameData} = useContext(RevolucionarioContext);

  return (
    <Box sx={{ flexGrow: 1, padding: 0, height: '80vh', position: 'relative', overflow: 'hidden' }}>
      <Grid container spacing={5}>
        <Grid item xs={4} >
          <VirreinatoMap gameData={gameData}/>
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={2} direction='column'>
            <Grid item xs={6}>
              <Acciones />
            </Grid>
            <Grid item xs={6}>
              <Cartas />
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Box>
  )
}

export default Cuerpo