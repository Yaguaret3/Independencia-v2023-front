import React, {useContext, useState} from 'react';
import {Autocomplete, Button, Grid, TextField} from "@mui/material";
import service from "../Service.js";
import useWebSocket from "../../../hooks/useWebSocket.jsx";
import {ControlContext} from "../Context.jsx";

const CreateResourceCard = ({playerId}) => {

    const {disparoTodos} = useWebSocket({});
    const {stompClient} = useContext(ControlContext);

    const recursosTypes = ['TEXTIL', 'AGROPECUARIA', 'METALMECANICA', 'CONSTRUCCION', 'COMERCIAL'];
    const [recursoTypeSelected, setRecursoTypeSelected] = useState('');

    const handleSelectRecursoType = ({newValue}) => {
        setRecursoTypeSelected(newValue);
    }
    const handleCrearNewResourceCard = async () => {
        await service.createNewResourceCard({playerId:playerId, resourceType:recursoTypeSelected});
        disparoTodos({stompClient: stompClient});
    }

    return (
        <>
            <Grid item={6}>
                <Autocomplete
                    disablePortal
                    getOptionLabel={(option) => option}
                    options={recursosTypes}
                    value={recursoTypeSelected}
                    onChange={(event, newValue) => {
                        handleSelectRecursoType({newValue: newValue});
                    }}
                    inputValue={recursoTypeSelected}
                    renderInput={(params) => <TextField {...params} label="Recurso"/>}
                />
            </Grid>
            <Grid item={6}>
                <Button onClick={handleCrearNewResourceCard}
                        size="small" variant='contained' color='warning' >
                    Crear
                </Button>
            </Grid>
        </>
    );
};

export default CreateResourceCard;