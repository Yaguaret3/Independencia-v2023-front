import React, {useContext, useEffect} from 'react';
import {Button, Box} from '@mui/material';
import BarraSuperior from './components/BarraSuperior'
import BarraInferior from './components/BarraInferior'
import Cuerpo from './components/Cuerpo'
import service from './Service';
import {GobernadorContext} from './Context';
import useWebSocket from "../../hooks/useWebSocket.jsx";
import SockJS from "sockjs-client";
import {over} from "stompjs";


const Gobernador = () => {

    const {setPlayerData, setGameData, setStompClient} = useContext(GobernadorContext);

    const fetchData = async () => {
        const playerData = await service.getPlayerData();
        const gameData = await service.getGameData();
        setPlayerData(playerData.data);
        setGameData(gameData.data);
    }

    const {conectarWS} = useWebSocket({channel:'/actualizar-gobernadores',
    fetchData:fetchData})

    useEffect(() => {

        const baseURL = import.meta.env.VITE_BACKEND_URL;
        const socket = new SockJS(baseURL+'/ws');
        const stompClient = over(socket);
        setStompClient(stompClient);

        conectarWS({stompClient:stompClient});
        fetchData();
    }, []);

    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <BarraSuperior titulo="Independencia: El Megajuego!"
                           botonesNavegacion={
                               <Box sx={{display: 'flex'}}>
                                   <Button color="inherit">Inicio</Button>
                                   <Button color="inherit">Sobre Nosotros</Button>
                                   <Button color="inherit">Contacto</Button>
                               </Box>}
            />
            <Cuerpo/>
            <BarraInferior/>
        </div>
    )
}

export default Gobernador