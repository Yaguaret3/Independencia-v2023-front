import React, {useContext, useState} from 'react'
import { Modal, Grid, Autocomplete, TextField, Box, Button } from '@mui/material'
import service from '../../Service'
import {GobernadorContext} from "../../Context.jsx";
import useWebSocket from "../../../../hooks/useWebSocket.jsx";

const AsignarMiliciaModal = ({ open, handleClose, capitanes }) => {

    const {stompClient} = useContext(GobernadorContext);
    const {disparoControl, disparoGobernadores, disparoCapitanes} = useWebSocket({});

    const [capitanSelected, setCapitanSelected] = useState({})
    const [labelCapitanSelected, setLabelCapitanSelected] = useState('');
    const [cantidadMiliciasSelected, setCantidadMiliciasSelected] = useState(0)

    const handleCapitanSelected = (value) => {
        setCapitanSelected(value)
    }
    const handleLabelCapitanSelected = (value) => {
        setLabelCapitanSelected(value);
    }
    const handleCantidadMiliciasSelected = (value) => {
        setCantidadMiliciasSelected(value);
    }

    const handleService = async () => {
        if (capitanSelected === '' || capitanSelected === null) {
            alert('Por favor, elegir un capitán')
            return;
        }
        if (cantidadMiliciasSelected === 0 || cantidadMiliciasSelected === null) {
            alert('Por favor, seleccionar cantidad de milicias')
            return;
        }
        await service.asignarMilicia({ idJugadorDestino: capitanSelected.playerId, cantidadMilicias: cantidadMiliciasSelected })
        disparoControl({stompClient:stompClient});
        disparoGobernadores({stompClient:stompClient});
        disparoCapitanes({stompClient:stompClient});
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
                borderRadius: 3
            }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                        <Autocomplete
                            disablePortal
                            getOptionLabel={(option) => option.playerName ? option.playerName : ''}
                            options={capitanes}
                            value={capitanSelected}
                            onChange={(event, newValue) => {
                                handleCapitanSelected(newValue);
                            }}
                            inputValue={labelCapitanSelected}
                            onInputChange={(event, newInputValue) => {
                                handleLabelCapitanSelected(newInputValue);
                            }}
                            renderInput={(params) => <TextField {...params} label="Capitanes" />}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            value={cantidadMiliciasSelected}
                            onChange={handleCantidadMiliciasSelected}
                            InputProps={{
                                inputProps: {
                                    pattern: '[0-9]*',
                                    inputMode: 'numeric'
                                },
                            }}>
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={handleService}
                            size="small" variant='contained' color='warning' fullWidth>Asignar Milicia</Button>
                    </Grid>
                </Grid>

            </Box>
        </Modal>
    )
}

export default AsignarMiliciaModal