import React, {useState} from 'react';
import {Button, Grid, TextField} from "@mui/material";

const SingleAttributeEdit = ({nombre, valorActual, handleActualizar}) => {

    const [newValue, setNewValue] = useState("");
    const handleNewValue = (e) => {
        setNewValue(e.target.value);
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
                    value = {newValue}
                    type = "number"
                    label = "Nuevo valor"
                    disabled={!handleActualizar}
                    onChange = {(event) => handleNewValue(event)} />
            </Grid>
            <Grid item xs={4}>
                {handleActualizar &&
                <Button onClick={handleActualizar}
                        size="medium" variant='contained' color='warning' fullWidth>Actualizar</Button>
                }
            </Grid>
        </>
    );
};

export default SingleAttributeEdit;