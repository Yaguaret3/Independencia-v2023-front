import React, {useContext, useState} from 'react';
import {Button, Grid} from "@mui/material";
import CiudadModal from "./CiudadModal.jsx";
import SingleAttributeEdit from "../../SingleAttributeEdit.jsx";
import service from "../../../Service.js";
import useWebSocket from "../../../../../hooks/useWebSocket.jsx";
import {ControlContext} from "../../../Context.jsx";

const GobernadorComponentForPlayerEdit = ({player}) => {

    const {stompClient} = useContext(ControlContext);
    const {disparoGobernadores, disparoControl} = useWebSocket({});

    const [openCiudadModal, setOpenCiudadModal] = useState(false);
    const handleOpenCiudadModal = () => {
        setOpenCiudadModal(true);
    }
    const handleCloseCiudadModal = () => {
        setOpenCiudadModal(false);
    }
    const handleActualizarMilicia = async ({newValue}) => {
        await service.updateReserve({value: newValue, playerId:player.id});
        disparoGobernadores({stompClient:stompClient});
        disparoControl({stompClient:stompClient})
    }
    const handleActualizarPlata = async ({newValue}) => {
        await service.updatePlata({gobernadorId:player.id, value:newValue});
        disparoGobernadores({stompClient:stompClient});
        disparoControl({stompClient:stompClient})
    }

    return (
        <>
            <Grid item xs={12}>
                <Button onClick={handleOpenCiudadModal}
                        size="small" variant='contained' color='warning' fullWidth>{player?.ciudad?.name}</Button>
            </Grid>
            <Grid item xs={12}>

                <Grid container spacing={2}>
                    <SingleAttributeEdit nombre={'Milicia'} valorActual={player?.milicia} handleActualizar={handleActualizarMilicia}/>
                </Grid>
                <Grid container spacing={2}>
                    <SingleAttributeEdit nombre={'Plata'} valorActual={player?.plata} handleActualizar={handleActualizarPlata} />
                </Grid>
            </Grid>
            <CiudadModal
                open={openCiudadModal}
                handleClose={handleCloseCiudadModal}
                ciudad={player?.ciudad}
                rolJugador={player?.rol}
                nombreJugador={player?.username}/>
        </>
    );
};

export default GobernadorComponentForPlayerEdit;