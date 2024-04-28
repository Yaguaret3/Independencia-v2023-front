import React, {useContext, useEffect} from 'react';
import service from "./Service.js";
import {ControlContext} from "./Context.jsx";
import {Box, Button} from "@mui/material";
import BarraSuperior from "../control/components/BarraSuperior.jsx";
import Cuerpo from "../control/components/Cuerpo.jsx";
import BarraInferior from "../control/components/BarraInferior.jsx";

const Control = () => {

    const { setGameData, setControlData } = useContext(ControlContext);

    useEffect(() => {
        async function fetchData() {
            const gameData = await service.getGameData();
            setGameData(gameData.data);
            const controlData = await service.getControlData();
            setControlData(controlData.data);
        }
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
    );
};

export default Control;