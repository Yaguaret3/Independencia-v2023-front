import React, { useContext, useEffect } from 'react'
import BarraSuperior from './components/BarraSuperior'
import BarraInferior from './components/BarraInferior'
import Cuerpo from './components/Cuerpo'
import { Box, Button } from '@mui/material'
import { MercaderContext } from './Context'
import service from './Service'
import useWebSocket from "../../hooks/useWebSocket.jsx";
import SockJS from "sockjs-client";
import {over} from "stompjs";

const Mercader = () => {

    const { setPlayerData, setGameData, setStompClient } = useContext(MercaderContext);

    const fetchData = async () => {
        const playerData = await service.getPlayerData();
        const gameData = await service.getGameData();
        setPlayerData(playerData.data);
        setGameData(gameData.data);
    }
    const {conectarWS} = useWebSocket({channel:'/actualizar-mercaderes',
        fetchData:fetchData})

    useEffect(() => {

        const socket = new SockJS('http://localhost:8085/ws');
        const stompClient = over(socket);
        setStompClient(stompClient);

        fetchData();
        conectarWS({stompClient:stompClient})
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