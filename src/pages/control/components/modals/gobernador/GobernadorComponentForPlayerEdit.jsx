import React, {useState} from 'react';
import {Button, Grid, TextField} from "@mui/material";
import CiudadModal from "./CiudadModal.jsx";
import service from "../../../Service.js";

const GobernadorComponentForPlayerEdit = ({player}) => {

    const [openCiudadModal, setOpenCiudadModal] = useState(false);
    const handleOpenCiudadModal = () => {
        setOpenCiudadModal(true);
    }
    const handleCloseCiudadModal = () => {
        setOpenCiudadModal(false);
    }


    const [miliciaValue, setMiliciaValue] = useState("");
    const handleMiliciaValue = (e) => {
        setMiliciaValue(e.target.value);
    }
    const handleActualizarMilicia = () => {
        service.actualizarMilicia({value:miliciaValue, gobernadorId:player.id});
    }

    return (
        <>
            <Grid item xs={12}>
                <Button onClick={handleOpenCiudadModal}
                        size="small" variant='contained' color='warning' fullWidth>{player?.ciudad?.name}</Button>
            </Grid>
            <Grid item xs={12}>
                {/* MILICIA */}
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <TextField
                            value = "Milicia"
                            type = "text"
                            label = "Milicia"
                            disabled={true} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            value = {player?.milicia}
                            label = "Valor Actual"
                            disabled={true} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            value = {miliciaValue}
                            type = "number"
                            label = "Nuevo valor"
                            onChange = {(event) => handleMiliciaValue(event)} />
                    </Grid>
                    <Grid item xs={4}>
                        <Button onClick={handleActualizarMilicia}
                                size="medium" variant='contained' color='warning' fullWidth>Actualizar</Button>
                    </Grid>
                </Grid>
            </Grid>
            <CiudadModal
                open={openCiudadModal}
                handleClose={handleCloseCiudadModal}
                ciudad={player?.ciudad}
                rolJugador={player?.rol}
                idJugador={player?.id}
                nombreJugador={player?.username}/>
        </>
    );
};

export default GobernadorComponentForPlayerEdit;