import React, {useContext, useEffect} from 'react'
import BarraSuperior from './components/BarraSuperior'
import BarraInferior from './components/BarraInferior'
import Cuerpo from './components/Cuerpo'
import service from './Service'
import {CapitanContext} from './Context'
import useWebSocket from "../../hooks/useWebSocket.jsx";
import SockJS from "sockjs-client";
import {over} from "stompjs";

const Capitan = () => {

    const {setPlayerData, setGameData, setStompClient} = useContext(CapitanContext);

    const fetchData = async () => {
        const playerData = await service.getPlayerData();
        const gameData = await service.getGameData();
        setPlayerData(playerData.data);
        setGameData(gameData.data);
    }

    const {conectarWS} = useWebSocket({
        channel: '/actualizar-capitanes',
        fetchData: fetchData
    })

    useEffect(() => {

        const baseURL = import.meta.env.VITE_BACKEND_URL;
        const socket = new SockJS(baseURL+'/ws');
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

export default Capitan