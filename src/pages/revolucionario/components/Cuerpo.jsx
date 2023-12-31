import React, { useContext } from 'react'
import { Box, Grid } from '@mui/material'
import Acciones from './Acciones'
import VirreinatoMap from '../../common/VirreinatoMap'
import { RevolucionarioContext } from '../Context'

const Cuerpo = () => {

  const {gameData} = useContext(RevolucionarioContext);

  return (
    <Box sx={{ flexGrow: 1, padding: 0, height: '80vh', position: 'relative', overflow: 'hidden' }}>
      <Grid container spacing={5}>
        <Grid item xs={4} >
          <VirreinatoMap gameData={gameData}/>
        </Grid>
        <Grid item xs={8}>
          <Acciones />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Cuerpo