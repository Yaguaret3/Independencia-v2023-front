import React, {useContext, useEffect} from 'react'
import BarraSuperior from './components/BarraSuperior'
import BarraInferior from './components/BarraInferior'
import Cuerpo from './components/Cuerpo'
import {Box, Button} from '@mui/material'
import service from './Service'
import {RevolucionarioContext} from './Context'
import useWebSocket from "../../hooks/useWebSocket.jsx";
import SockJS from "sockjs-client";
import {over} from "stompjs";

const Revolucionario = () => {

    const {setPlayerData, setGameData, setCongresosData, setStompClient} = useContext(RevolucionarioContext);

    const fetchData = async () => {
        const playerData = await service.getPlayerData();
        const gameData = await service.getGameData();
        const congresosData = await service.getCongresosData();
        setPlayerData(playerData.data);
        setGameData(gameData.data);
        setCongresosData(congresosData.data);
    }

    const {conectarWS} = useWebSocket({
        channel: '/actualizar-revolucionarios',
        fetchData: fetchData
    })

    useEffect(() => {

        const socket = new SockJS('http://localhost:8085/ws');
        const stompClient = over(socket);
        setStompClient(stompClient);

        fetchData();
        conectarWS({stompClient: stompClient});

    }, []);

    return (
        <>
            <div>
                <BarraSuperior/>
            </div>
            <div>
                <Cuerpo/>
            </div>
            <div>
                <BarraInferior/>
            </div>
        </>
    )
}

export default Revolucionario