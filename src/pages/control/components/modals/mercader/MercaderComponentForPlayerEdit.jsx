import React, {useState} from 'react';
import {Button, Grid} from "@mui/material";
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
                        size="small" variant='contained' color='warning' fullWidth>{player?.ciudad?.name}</Button>
            </Grid>
            <Grid item xs={12}>

                <Grid container spacing={2}>
                    <SingleAttributeEdit nombre={'Puntaje Comercial Actual'} valorActual={player?.puntajeComercial} />
                    <SingleAttributeEdit nombre={'Puntaje Comercial Acumulado'} valorActual={player?.puntajeComercialAcumulado} />

                </Grid>
            </Grid>
            <RutasModal
                open={openRutasModal}
                handleClose={handleCloseRutasModal}
                nombreJugador={player?.username}
                rolJugador={player?.rol}
                idJugador={player?.id}
                rutas={player?.routes}
            />
        </>
    );
};

export default MercaderComponentForPlayerEdit;