import React, {useContext, useEffect} from 'react'
import BarraSuperior from './components/BarraSuperior'
import BarraInferior from './components/BarraInferior'
import Cuerpo from './components/Cuerpo'
import {MercaderContext} from './Context'
import service from './Service'
import useWebSocket from "../../hooks/useWebSocket.jsx";
import SockJS from "sockjs-client";
import {over} from "stompjs";

const Mercader = () => {

    const {setPlayerData, setGameData, setStompClient} = useContext(MercaderContext);

    const fetchData = async () => {
        const playerData = await service.getPlayerData();
        const gameData = await service.getGameData();
        setPlayerData(playerData.data);
        setGameData(gameData.data);
    }
    const {conectarWS} = useWebSocket({
        channel: '/actualizar-mercaderes',
        fetchData: fetchData
    })

    useEffect(() => {

        const baseURL = import.meta.env.VITE_BACKEND_URL_WS;
        const socket = new SockJS(baseURL);
        const stompClient = over(socket);
        setStompClient(stompClient);

        fetchData();
        conectarWS({stompClient: stompClient})
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
    )}

export default Mercader