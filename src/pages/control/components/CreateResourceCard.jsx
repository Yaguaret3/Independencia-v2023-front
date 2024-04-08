import React, {useState} from 'react';
import {Autocomplete, Button, Grid, TextField} from "@mui/material";
import service from "../Service.js";

const CreateResourceCard = ({playerId}) => {

    const recursosTypes = ['TEXTIL', 'AGROPECUARIA', 'METALMECANICA', 'CONSTRUCCION', 'COMERCIAL'];
    const [recursoTypeSelected, setRecursoTypeSelected] = useState('');

    const handleSelectRecursoType = ({newValue}) => {
        setRecursoTypeSelected(newValue);
    }
    const handleCrearNewResourceCard = () => {
        service.createNewResourceCard({playerId:playerId, resourceType:recursoTypeSelected});
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
                        size="small" variant='contained' color='warning' >>
                    Crear
                </Button>
            </Grid>
        </>
    );
};

export default CreateResourceCard;