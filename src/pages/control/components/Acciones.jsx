import React, {useContext, useState} from 'react';
import {Button, Grid} from "@mui/material";
import {ControlContext} from "../Context.jsx";
import PlayersModal from "./modals/PlayersModal.jsx";
import CongresosModal from "./modals/CongresosModal.jsx";
import service from "../Service.js";
import useWebSocket from "../../../hooks/useWebSocket.jsx";
import AccionesMilitares from "./modals/resoluciones/AccionesMilitares.jsx";
import BatallasModal from "./modals/resoluciones/BatallasModal.jsx";
import RutasComercialesModal from "./modals/resoluciones/RutasComercialesModal.jsx";
import LogsModal from "../../common/LogsModal.jsx";

const Acciones = () => {

    //Context
    const { gameData, controlData, stompClient } = useContext(ControlContext);
    //WebSocket
    const {disparoTodos} = useWebSocket({});

    //OpenModal
    const [openPlayersModal, setOpenPlayerModal] = useState(false);
    const handleOpenPlayersModal = () => {
        setOpenPlayerModal(true)
    }
    const handleClosePlayersModal = () => {
        setOpenPlayerModal(false);
    }
    const [openCongresosModal, setOpenCongresosModal] = useState(false);
    const handleOpenCongresosModal = () => {
        setOpenCongresosModal(true);
    }
    const handleCloseCongresosModal = () => {
        setOpenCongresosModal(false);
    }
    const handleTerminarFase = async () => {

        let message = controlData?.siguienteFaseSolicitada ? "¿Está seguro que quiere reabrir la fase?" : "¿Está seguro que quiere terminar la fase?";

        if(confirm(message)){
            await service.concludePhase();
            disparoTodos({stompClient:stompClient});
        }
    }

    const [openAccionesMilitaresModal, setOpenAccionesMilitaresModal] = useState(false);
    const handleOpenAccionesMilitaresModal = () => {
        setOpenAccionesMilitaresModal(true);
    }
    const handleCloseAccionesMilitaresModal = () => {
        setOpenAccionesMilitaresModal(false);
    }
    const [openBatallasModal, setOpenBatallasModal] = useState(false);
    const handleOpenBatallasModal = () => {
        setOpenBatallasModal(true);
    }
    const handleCloseBatallasModal = () => {
        setOpenBatallasModal(false);
    }
    const [openRutasComercialesModal, setOpenRutasComercialesModal] = useState(false);
    const handleOpenRutasComercialesModal = () => {
        setOpenRutasComercialesModal(true);
    }
    const handleCloseRutasComercialesModal = () => {
        setOpenRutasComercialesModal(false);
    }

    const [openLogsModal, setOpenLogsModal] = useState(false);
    const handleOpenLogsModal = () => {
        setOpenLogsModal(true);
    }
    const handleCloseLogsModal = () => {
        setOpenLogsModal(false);
    }

    return (
        <>
            <Grid container
                  direction={'column'}
                  justifyContent={'space-between'}
                  alignItems={'flex-end'}
                  spacing={1}
            >
                <Grid item>
                    <Button onClick={handleTerminarFase}
                            size="small" variant='contained' color='warning' >
                        {controlData?.siguienteFaseSolicitada ? 'Reabrir fase' : 'Terminar fase'}
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={handleOpenPlayersModal}
                            size="small" variant='contained' color='warning' >
                        Jugadores
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={handleOpenCongresosModal}
                            size="small" variant='contained' color='warning' >
                        Congresos
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={handleOpenAccionesMilitaresModal}
                            size="small" variant='contained' color='info'
                            disabled={gameData?.fase === 'PLANNING'}>
                        Acciones a resolver
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={handleOpenBatallasModal}
                            size="small" variant='contained' color='info'
                            disabled={gameData?.fase === "MOVING" || gameData?.fase === 'PLANNING'}>
                        Batallas
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={handleOpenRutasComercialesModal}
                            size="small" variant='contained' color='info'
                            disabled={gameData?.fase === "MOVING" || gameData?.fase === 'PLANNING'}>
                        Rutas Comerciales
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={handleOpenLogsModal}
                            size="small" variant='contained' color='warning'>
                        Abrir Historial
                    </Button>
                </Grid>

            </Grid>
            <PlayersModal
                open={openPlayersModal}
                handleClose={handleClosePlayersModal}
                players={gameData?.playersData}
            />
            <CongresosModal
                open={openCongresosModal}
                handleClose={handleCloseCongresosModal}
                congresos={gameData?.congresos}
            />
            <AccionesMilitares
                open={openAccionesMilitaresModal}
                handleClose={handleCloseAccionesMilitaresModal}
            />
            <BatallasModal
                open={openBatallasModal}
                handleClose={handleCloseBatallasModal}
            />
            <RutasComercialesModal
                open={openRutasComercialesModal}
                handleClose={handleCloseRutasComercialesModal}
            />
            <LogsModal
                open={openLogsModal}
                handleClose={handleCloseLogsModal}
                logs={controlData?.historial}
            />
        </>
    )
};

export default Acciones;