import React, {useContext, useState} from 'react';
import {Button, Grid, TextField} from "@mui/material";
import SingleAttributeEdit from "../../SingleAttributeEdit.jsx";
import RutasModal from "./RutasModal.jsx";
import service from "../../../Service.js";
import {ControlContext} from "../../../Context.jsx";
import useWebSocket from "../../../../../hooks/useWebSocket.jsx";

const MercaderComponentForPlayerEdit = ({player}) => {

    const {stompClient} = useContext(ControlContext);
    const {disparoMercaderes, disparoControl} = useWebSocket({});

    const [openRutasModal, setOpenRutasModal] = useState(false);
    const handleOpenRutasModal = () => {
        setOpenRutasModal(true);
    }
    const handleCloseRutasModal = () => {
        setOpenRutasModal(false);
    }

    const handleUpdateTradeScore = async ({newValue}) => {
        await service.updateTradeScore({value: newValue, playerId: player.id});
        disparoControl({stompClient: stompClient});
        disparoMercaderes({stompClient: stompClient});
    }

    return (
        <>
            <Grid item xs={12}>
                <Button onClick={handleOpenRutasModal}
                        size="small" variant='contained' color='warning' fullWidth>Rutas</Button>
            </Grid>
            <Grid item xs={12}>

                <Grid container spacing={2}>
                    <SingleAttributeEdit nombre={'Puntaje Comercial'} valorActual={player?.puntajeComercial}
                                         handleActualizar={handleUpdateTradeScore}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        value={player?.puntajeComercialAcumulado}
                        label={'Puntaje Comercial Acumulado'}
                        disabled={true}/>
                </Grid>
            </Grid>
            <RutasModal
                open={openRutasModal}
                handleClose={handleCloseRutasModal}
                nombreJugador={player?.username}
                rolJugador={player?.rol}
                rutas={player?.routes}
            />
        </>
    );
};

export default MercaderComponentForPlayerEdit;