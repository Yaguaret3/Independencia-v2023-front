import React, {useContext, useEffect} from 'react';
import service from "./Service.js";
import {ControlContext} from "./Context.jsx";
import {Box, Button} from "@mui/material";
import BarraSuperior from "../control/components/BarraSuperior.jsx";
import Cuerpo from "../control/components/Cuerpo.jsx";
import BarraInferior from "../control/components/BarraInferior.jsx";
import useSocket from "../../hooks/useSocket.jsx";

const Control = () => {

    const { setGameData, setControlData } = useContext(ControlContext);

    const fetchData = async () => {
        const gameData = await service.getGameData();
        await setGameData(gameData.data);
        const controlData = await service.getControlData();
        await setControlData(controlData.data);
    }

    const {conectarWS} = useSocket({channel:'/actualizar-control',
                                                    fetchData:fetchData})

    useEffect(() => {

        fetchData();
        conectarWS();
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