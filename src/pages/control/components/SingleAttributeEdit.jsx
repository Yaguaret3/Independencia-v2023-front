import React, {useState} from 'react';
import {Button, Grid, TextField} from "@mui/material";
import service from "../Service.js";

const SingleAttributeEdit = ({nombre, valorActual}) => {

    const [miliciaValue, setMiliciaValue] = useState("");
    const handleMiliciaValue = (e) => {
        setMiliciaValue(e.target.value);
    }
    const handleActualizarMilicia = () => {
        service.actualizarMilicia({value:miliciaValue, gobernadorId:player.id});
    }

    return (
        <>
            <Grid item xs={3}>
                <TextField
                    value = {nombre}
                    type = "text"
                    label = {nombre}
                    disabled={true} />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    value = {valorActual}
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
        </>
    );
};

export default SingleAttributeEdit;