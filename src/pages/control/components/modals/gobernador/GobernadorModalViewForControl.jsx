import React, {useState} from 'react';
import {Box, Button, Grid, Modal, TextField, Typography} from "@mui/material";
import CiudadModal from "./CiudadModal.jsx";
import PreciosModal from "../PreciosModal.jsx";
import service from "../../../Service.js";
import CardsComponentForPlayerEdit from "../../CardsComponentForPlayerEdit.jsx";
import PriceComponentForPlayerEdit from "../../PriceComponentForPlayerEdit.jsx";

const GobernadorModalViewForControl = ({open, handleClose, player}) => {



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
            <Modal open={open} onClose={handleClose}>
                <Box sx={{
                    position: 'absolute',
                    top: '50vh',
                    left: '50vw',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 3
                }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography>Username</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField disabled={'true'} label={"Username"} fullWidth value={player?.username} variant={"standard"}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography>Rol</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField disabled={'true'} label={"Rol"} fullWidth value={player?.rol} variant={"standard"}/>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Grid container spacing={2}>
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
                                <Grid item xs={12}>
                                    <PriceComponentForPlayerEdit player={player} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={8}>

                            {/* ------- ¡CARTAS! -------- */}

                            <CardsComponentForPlayerEdit player={player}/>

                        </Grid>
                    </Grid>
                </Box>
            </Modal>
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

export default GobernadorModalViewForControl;