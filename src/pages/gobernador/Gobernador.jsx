import React, { useContext, useEffect } from 'react';
import { Button, Box } from '@mui/material';
import BarraSuperior from './components/BarraSuperior'
import BarraInferior from './components/BarraInferior'
import Cuerpo from './components/Cuerpo'
import service from './Service';
import { GobernadorContext } from './Context';


const Gobernador = () => {

  const { setPlayerData, setGameData } = useContext(GobernadorContext);

  useEffect(() => {
    async function fetchData() {
      const playerData = await service.getPlayerData();
      const gameData = await service.getGameData();
      setPlayerData(playerData.data);
      setGameData(gameData.data);
    }
    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <BarraSuperior titulo="Independencia: El Megajuego!"
        botonesNavegacion={
          <Box sx={{ display: 'flex' }}>
            <Button color="inherit">Inicio</Button>
            <Button color="inherit">Sobre Nosotros</Button>
            <Button color="inherit">Contacto</Button>
          </Box>}
      />
      <Cuerpo />
      <BarraInferior />
    </div>
  )
}

export default Gobernador