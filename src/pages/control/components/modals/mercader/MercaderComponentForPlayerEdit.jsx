import React, {useState} from 'react';
import {Button, Grid, TextField} from "@mui/material";
import SingleAttributeEdit from "../../SingleAttributeEdit.jsx";
import RutasModal from "./RutasModal.jsx";

const MercaderComponentForPlayerEdit = ({player}) => {

    const [openRutasModal, setOpenRutasModal] = useState(false);
    const handleOpenRutasModal = () => {
        setOpenRutasModal(true);
    }
    const handleCloseRutasModal = () => {
        setOpenRutasModal(false);
    }

    return (
        <>
            <Grid item xs={12}>
                <Button onClick={handleOpenRutasModal}
                        size="small" variant='contained' color='warning' fullWidth>Rutas</Button>
            </Grid>
            <Grid item xs={12}>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            value = {player?.puntajeComercial}
                            label = {'Puntaje Comercial'}
                            disabled={true} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value = {player?.puntajeComercialAcumulado}
                            label = {'Puntaje Comercial Acumulado'}
                            disabled={true} />
                    </Grid>

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