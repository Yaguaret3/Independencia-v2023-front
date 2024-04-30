import React, {useContext, useState} from 'react'
import { Modal, Grid, Autocomplete, TextField, Box, Button } from '@mui/material'
import service from '../../Service'
import {GobernadorContext} from "../../Context.jsx";
import useWebSocket from "../../../../hooks/useWebSocket.jsx";

const ElegirDiputadoModal = ({ open, handleClose, revolucionarios, representationCard }) => {

    const {stompClient} = useContext(GobernadorContext);
    const {disparoControl, disparoGobernadores, disparoRevolucionarios} = useWebSocket({});

    const [revolucionarioSelected, setRevolucionarioSelected] = useState({})
    const [labelRevolucionarioSelected, setLabelRevolucionarioSelected] = useState('');

    const handleRevolucionarioSelected = (value) => {
        setRevolucionarioSelected(value)
    }
    const handleLabelRevolucionarioSelected = (value) => {
        setLabelRevolucionarioSelected(value);
    }
    const handleService = async () => {
        if(revolucionarioSelected === '' || revolucionarioSelected === null){
            alert('Por favor, elegir un revolucionario')
            return;
        }
        await service.elegirDiputado({ idJugadorDestino: revolucionarioSelected.playerId, idRepresentationCard: representationCard.id })
        disparoControl({stompClient:stompClient});
        disparoGobernadores({stompClient:stompClient});
        disparoRevolucionarios({stompClient:stompClient});
    }

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
                borderRadius:3
            }}
            >
                <Grid container>
                    <Grid item xs={12}>
                        <Autocomplete
                            disablePortal
                            getOptionLabel={(option) => option.playerName ? option.playerName : ''}
                            options={revolucionarios}
                            value={revolucionarioSelected}
                            onChange={(event, newValue) => {
                                handleRevolucionarioSelected(newValue);
                            }}
                            inputValue={labelRevolucionarioSelected}
                            onInputChange={(event, newInputValue) => {
                                handleLabelRevolucionarioSelected(newInputValue);
                            }}
                            renderInput={(params) => <TextField {...params} label="Revolucionarios" />}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={handleService}
                            size="small" variant='contained' color='warning' fullWidth>Elegir Diputado</Button>
                    </Grid>
                </Grid>

            </Box>
        </Modal>
    )
}

export default ElegirDiputadoModal;