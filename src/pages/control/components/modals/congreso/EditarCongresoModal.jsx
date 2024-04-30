import React, {useContext, useEffect, useState} from 'react';
import {Autocomplete, Box, Button, Grid, Modal, TextField} from "@mui/material";
import service from "../../../Service.js";
import useWebSocket from "../../../../../hooks/useWebSocket.jsx";
import {ControlContext} from "../../../Context.jsx";

const EditarCongresoModal = ({open, handleClose, congreso}) => {

    const {stompClient} = useContext(ControlContext);
    const [newPresidenteSelected,setNewPresidenteSelected ] = useState({});

    const {disparoTodos} = useWebSocket({});

    const handleNewPresidenteSelected = ({newValue}) => {
        setNewPresidenteSelected(newValue);
    }
    const [labelPresidenteSelected, setLabelPresidenteSelected] = useState('');
    const handleLabelPresidenteSelected = ({newValue}) => {
        setLabelPresidenteSelected(newValue);
    }
    const [plata, setPlata] = useState('');
    const handlePlata = ({newValue}) => {
        setPlata(newValue);
    }
    const [milicia, setMilicia] = useState('');
    const handleMilicia = ({newValue}) => {
        setMilicia(newValue)
    }
    const handleActualizarCongreso = async () => {
        await service.updateCongress({congressId:congreso.id,
                                                            presidente:newPresidenteSelected,
                                                            plata:plata,
                                                            milicia:milicia});
        disparoTodos({stompClient:stompClient})
    }

    useEffect(() => {
        const presidente = congreso?.revolucionarios.find(r => r.playerName === congreso.presidente);
        if(presidente !== undefined){
            setNewPresidenteSelected(presidente);
        }
    }, []);

    return (
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

                    <Grid item xs={12}>
                        <Autocomplete
                            disablePortal
                            getOptionLabel={(option) => option.playerName ? option.playerName : ''}
                            options={congreso?.revolucionarios}
                            value={newPresidenteSelected || congreso?.revolucionarios.find(r => r.playerName === congreso.presidente)}
                            onChange={(event, newOption) => {
                                handleNewPresidenteSelected({newValue: newOption});
                            }}
                            inputValue={labelPresidenteSelected}
                            onInputChange={(event, newInputValue) => {
                                handleLabelPresidenteSelected({newValue: newInputValue});
                            }}
                            renderInput={(params) => <TextField {...params} label="Presidente"/>}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            value = {congreso?.plata}
                            label = 'Plata actual'
                            aria-readonly={true} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            value = {plata || congreso?.plata}
                            type = "number"
                            label = "Plata: nuevo valor"
                            onChange = {(event) => handlePlata({newValue:event.target.value})} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            value = {congreso?.militia}
                            label = 'Milicia actual'
                            aria-readonly={true} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            value = {milicia || congreso?.militia}
                            type = "number"
                            label = "Milicia: nuevo valor"
                            onChange = {(event) => handleMilicia({newValue:event.target.value})} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={handleActualizarCongreso}
                                size="small" variant='contained' color='warning' fullWidth>Actualizar</Button>
                    </Grid>
                </Grid>


            </Box>
        </Modal>
    );
};

export default EditarCongresoModal;