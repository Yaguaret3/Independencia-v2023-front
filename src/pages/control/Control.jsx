import React, {useContext, useEffect} from 'react';
import service from "./Service.js";
import {ControlContext} from "./Context.jsx";
import {Box, Button} from "@mui/material";
import BarraSuperior from "../control/components/BarraSuperior.jsx";
import Cuerpo from "../control/components/Cuerpo.jsx";
import BarraInferior from "../control/components/BarraInferior.jsx";
import useWebSocket from "../../hooks/useWebSocket.jsx";
import SockJS from "sockjs-client";
import {over} from "stompjs";

const Control = () => {

    const { setGameData, setControlData, setStompClient } = useContext(ControlContext);

    const fetchData = async () => {
        const gameData = await service.getGameData();
        const controlData = await service.getControlData();

        setGameData(gameData.data);
        setControlData(controlData.data);
    }

    const {conectarWS} = useWebSocket({channel:'/actualizar-control',
                                                    fetchData:fetchData})

    useEffect(() => {

        const socket = new SockJS('http://localhost:8085/ws');
        const stompClient = over(socket);
        setStompClient(stompClient);

        fetchData();
        conectarWS({stompClient:stompClient});
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
    );
};

export default Control;