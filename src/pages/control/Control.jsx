import React, {useContext, useEffect} from 'react';
import service from "./Service.js";
import {ControlContext} from "./Context.jsx";
import {Box, Button, Grid} from "@mui/material";
import BarraSuperior from "../control/components/BarraSuperior.jsx";
import Cuerpo from "../control/components/Cuerpo.jsx";
import BarraInferior from "../control/components/BarraInferior.jsx";
import useWebSocket from "../../hooks/useWebSocket.jsx";
import SockJS from "sockjs-client";
import {over} from "stompjs";

const Control = () => {

    const {setGameData, setControlData, setStompClient} = useContext(ControlContext);

    const fetchData = async () => {
        const gameData = await service.getGameData();
        const controlData = await service.getControlData();

        setGameData(gameData.data);
        setControlData(controlData.data);
    }

    const {conectarWS} = useWebSocket({
        channel: '/actualizar-control',
        fetchData: fetchData
    })

    useEffect(() => {

        const socket = new SockJS('http://152.67.33.100:80/ws');
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
    );
};

export default Control;