import React, {useContext, useState} from 'react';
import {Autocomplete, Button, Grid, TextField} from "@mui/material";
import service from "../Service.js";
import {ControlContext} from "../Context.jsx";
import useWebSocket from "../../../hooks/useWebSocket.jsx";

const CreateActionCard = ({playerId}) => {

    const {stompClient} = useContext(ControlContext);
    const {disparoTodos} = useWebSocket({})

    const actionTypes = ['MOVIMIENTO', 'ATAQUE', 'DEFENSA', 'REACCION', 'DESPLIEGUE', 'ACAMPE', 'NADA'];
    const [actionTypeSelected, setActionTypeSelected] = useState('');

    const handleSelectActionType = ({newValue}) => {
        setActionTypeSelected(newValue);
    }
    const handleCrearNewActionCard = async () => {
        await service.createNewActionCard({action:actionTypeSelected, playerId:playerId});
        disparoTodos({stompClient:stompClient});
    }

    return (
        <>
            <Grid item xs={6}>
                <Autocomplete
                    disablePortal
                    getOptionLabel={(option) => option}
                    options={actionTypes}
                    value={actionTypeSelected}
                    onChange={(event, newValue) => {
                        handleSelectActionType({newValue: newValue});
                    }}
                    inputValue={actionTypeSelected}
                    renderInput={(params) => <TextField {...params} label="Acción"/>}
                />
            </Grid>
            <Grid item xs={6}>
                <Button onClick={handleCrearNewActionCard}
                        size="small" variant='contained' color='warning' >
                    Crear
                </Button>
            </Grid>
        </>
    );
};

export default CreateActionCard;