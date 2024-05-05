import React, { useContext, useEffect } from 'react'
import BarraSuperior from './components/BarraSuperior'
import BarraInferior from './components/BarraInferior'
import Cuerpo from './components/Cuerpo'
import { Box, Button } from '@mui/material'
import service from './Service'
import {CapitanContext} from './Context'
import useWebSocket from "../../hooks/useWebSocket.jsx";
import SockJS from "sockjs-client";
import {over} from "stompjs";

const Capitan = () => {

    const { setPlayerData, setGameData, setStompClient } = useContext(CapitanContext);

    const fetchData = async() => {
        const playerData = await service.getPlayerData();
        const gameData = await service.getGameData();
        setPlayerData(playerData.data);
        setGameData(gameData.data);
    }

    const {conectarWS} = useWebSocket({channel:'/actualizar-capitanes',
        fetchData:fetchData})

    useEffect(() => {
        const socket = new SockJS('http://localhost:8085/ws');
        const stompClient = over(socket);
        setStompClient(stompClient);

        conectarWS({stompClient:stompClient});
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

export default Capitan