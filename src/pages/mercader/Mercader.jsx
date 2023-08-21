import React, { useContext, useEffect } from 'react'
import BarraSuperior from './components/BarraSuperior'
import BarraInferior from './components/BarraInferior'
import Cuerpo from './components/Cuerpo'
import { Box, Button } from '@mui/material'
import { MercaderContext } from './Context'
import service from './Service'

const Mercader = () => {

    const { setPlayerData, setGameData } = useContext(MercaderContext);

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

export default Mercader