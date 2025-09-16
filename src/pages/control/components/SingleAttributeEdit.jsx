import React, {useState} from 'react';
import {Button, Grid, TextField} from "@mui/material";

const SingleAttributeEdit = ({nombre, valorActual, handleActualizar}) => {

    const [newValue, setNewValue] = useState("");
    const handleNewValue = (e) => {
        setNewValue(e.target.value);
    }
    const handleButton = () => {
        if(newValue === ''){
            handleActualizar({newValue: 0});
            return;
        }
        handleActualizar({newValue:newValue});
    }

    return (
        <>
            <Grid item xs={5}>
                <TextField
                    value = {valorActual}
                    label = {nombre}
                    InputLabelProps={{ shrink: true }}
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
                <Button onClick={handleButton}
                        size="small" variant='contained' color='warning' fullWidth>Actualizar</Button>
                }
            </Grid>
        </>
    );
};

export default SingleAttributeEdit;