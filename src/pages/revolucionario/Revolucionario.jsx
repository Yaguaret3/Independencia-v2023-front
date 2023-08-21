import React, { useContext, useEffect } from 'react'
import BarraSuperior from './components/BarraSuperior'
import BarraInferior from './components/BarraInferior'
import Cuerpo from './components/Cuerpo'
import { Box, Button } from '@mui/material'
import service from './Service'
import { RevolucionarioContext } from './Context'

const Revolucionario = () => {

    const { setPlayerData, setGameData, setCongresosData } = useContext(RevolucionarioContext);

    useEffect(() => {
        async function fetchData() {
            const playerData = await service.getPlayerData();
            const gameData = await service.getGameData();
            const congresosData = await service.getCongresosData();
            setPlayerData(playerData.data);
            setGameData(gameData.data);
            setCongresosData(congresosData.data);
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

export default Revolucionario