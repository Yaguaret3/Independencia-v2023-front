import React, {useContext, useState} from 'react'
import { Modal, Grid, Autocomplete, TextField, Box, Button } from '@mui/material'
import service from '../../Service'
import {GobernadorContext} from "../../Context.jsx";
import useWebSocket from "../../../../hooks/useWebSocket.jsx";

const EntregarMercadoModal = ({ open, handleClose, mercaderes, mercados }) => {

    const {stompClient} = useContext(GobernadorContext);
    const {disparoControl, disparoGobernadores, disparoMercaderes} = useWebSocket({});

    const [mercaderSeleccionado, setMercaderSeleccionado] = useState({})
    const [mercadoSeleccionado, setMercadoSeleccionado] = useState({})
    const [labelMercaderSeleccionado, setLabelMercaderSeleccionado] = useState('');
    const [labelMercadoSeleccionado, setLabelMercadoSeleccionado] = useState('');

    const handleMercadoSeleccionado = (value) => {
        setMercadoSeleccionado(value)
    }
    const handleLabelMercadoSeleccionado = (value) => {
        setLabelMercadoSeleccionado(value);
    }
    const handleMercaderSeleccionado = (value) => {
        setMercaderSeleccionado(value)
    }
    const handleLabelMercaderSeleccionado = (value) => {
        setLabelMercaderSeleccionado(value);
    }
    const handleService = async () => {
        if(mercaderSeleccionado === '' || mercaderSeleccionado === null){
            alert('Por favor, elegir un mercader')
            return;
        }
        if(mercadoSeleccionado === '' || mercadoSeleccionado === null){
            alert('Por favor, elegir un mercado')
            return;
        }
        await service.entregarMercado({ idJugadorDestino: mercaderSeleccionado.playerId, idMarketCard: mercadoSeleccionado.id })
        disparoMercaderes({stompClient:stompClient});
        disparoControl({stompClient:stompClient});
        disparoGobernadores({stompClient:stompClient});
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
                    <Grid item xs={7}>
                        <Autocomplete
                            disablePortal
                            getOptionLabel={(option) => option.playerName || ''}
                            options={mercaderes}
                            value={mercaderSeleccionado}
                            onChange={(event, newValue) => {
                                handleMercaderSeleccionado(newValue);
                            }}
                            inputValue={labelMercaderSeleccionado}
                            onInputChange={(event, newInputValue) => {
                                handleLabelMercaderSeleccionado(newInputValue);
                            }}
                            renderInput={(params) => <TextField {...params} label="Mercaderes" />}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <Autocomplete
                            disablePortal
                            getOptionLabel={(option) => 'Nivel: ' + (option.level || '')}
                            options={mercados}
                            value={mercadoSeleccionado}
                            onChange={(event, newValue) => {
                                handleMercadoSeleccionado(newValue);
                            }}
                            inputValue={labelMercadoSeleccionado}
                            onInputChange={(event, newInputValue) => {
                                handleLabelMercadoSeleccionado(newInputValue);
                            }}
                            renderInput={(params) => <TextField {...params} label="Mercado" />}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={handleService}
                            size="small" variant='contained' color='warning' fullWidth>Entregar Mercado</Button>
                    </Grid>
                </Grid>

            </Box>
        </Modal>
    )
}

export default EntregarMercadoModal