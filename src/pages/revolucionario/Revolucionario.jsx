import React, {useContext, useEffect} from 'react'
import BarraSuperior from './components/BarraSuperior'
import BarraInferior from './components/BarraInferior'
import Cuerpo from './components/Cuerpo'
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

        const baseURL = import.meta.env.VITE_BACKEND_URL;
        const socket = new SockJS(baseURL+'ws');
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