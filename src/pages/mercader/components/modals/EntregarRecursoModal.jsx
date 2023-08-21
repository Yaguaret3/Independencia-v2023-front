import React, { useState } from 'react'
import { Modal, Grid, Autocomplete, TextField, Box, Button } from '@mui/material'
import service from '../../Service'
import ResourceCard from '../../../components/ResourceCard'

const EntregarRecursoModal = ({ open, handleClose, players, resource }) => {

    const [playerSelected, setPlayerSelected] = useState({})
    const [labelPlayerSelected, setLabelPlayerSelected] = useState('');

    const handlePlayerSelected = (value) => {
        setPlayerSelected(value)
    }
    const handleLabelPlayerSelected = (value) => {
        setLabelPlayerSelected(value);
    }
    const handleService = () => {
        if (playerSelected === '' || playerSelected === null) {
            alert('Por favor, elegir un jugador')
            return;
        }
        service.giveResources({ idJugadorDestino: playerSelected.playerId, idResourceCard: resource.id })
        handleClose();
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
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <ResourceCard resourceName={resource && resource.resourceTypeEnum}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Autocomplete
                            disablePortal
                            getOptionLabel={(option) => option.playerName ? option.playerName : ''}
                            options={players}
                            value={playerSelected}
                            onChange={(event, newValue) => {
                                handlePlayerSelected(newValue);
                            }}
                            inputValue={labelPlayerSelected}
                            onInputChange={(event, newInputValue) => {
                                handleLabelPlayerSelected(newInputValue);
                            }}
                            renderInput={(params) => <TextField {...params} label="Jugadores" />}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={handleService}
                            size="small" variant='contained' color='warning' fullWidth>Elegir Jugador</Button>
                    </Grid>
                </Grid>

            </Box>
        </Modal>
    )
}

export default EntregarRecursoModal;