import React, {useContext, useState} from 'react';
import {Button, Grid} from "@mui/material";
import CreateGameModal from "./modals/CreateGameModal.jsx";
import service from "../Service.js";
import {SettingsContext} from "../Context.jsx";
import useWebSocket from "../../../hooks/useWebSocket.jsx";

const Partidas = () => {
    const {games, stompClient} = useContext(SettingsContext);
    const {disparoTodos} = useWebSocket({});

    const [openCreateGameModal, setOpenCreateGameModal] = useState(false);
    const handleOpenCreateGameModal = () => {
        setOpenCreateGameModal(true);
    }
    const handleCloseCreateGameModal = () => {
        setOpenCreateGameModal(false);
    }
    const handleForceConcludePhase = async () => {
        if(confirm("¿Está seguro de que desea forzar avanzar la fase? No puede volverse atrás. Afecta a todos los jugadores.")){
            await service.forceConcludePhase();
            disparoTodos({stompClient: stompClient});
        }
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Button onClick={handleOpenCreateGameModal}
                            size="small" variant='contained' color={'warning'} fullWidth>
                        Crear Juego
                    </Button>
                </Grid>
                {games.length > 0 && <Grid item xs={12}>
                    <Button onClick={handleForceConcludePhase}
                            size="small" variant='contained' color={'warning'} fullWidth>
                        Forzar Terminar Fase
                    </Button>
                </Grid>}
            </Grid>
            <CreateGameModal
                open={openCreateGameModal}
                handleClose={handleCloseCreateGameModal}
            />
        </>
    );
};

export default Partidas;