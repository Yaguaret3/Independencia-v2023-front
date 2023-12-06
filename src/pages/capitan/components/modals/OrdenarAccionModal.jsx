import React, { useState } from 'react'
import {Modal, Grid, Box, Button, Typography, Autocomplete, TextField} from '@mui/material'
import service from '../../Service'
import ActionCard from "../../../controlComponents/ActionCard.jsx";

const OrdenarAccionModal = ({ open, handleClose, cards, subregions }) => {

    const [cardSelected, setCardSelected] = useState(undefined);
    const {subregionSelected, setSubregionSelected} = useState({});
    const {labelSubregionSelected, setLabelSubregionSelected} = useState('');

    const handleCardSelected = (card) => {
        if(card.isSelected){
            card.isSelected = false;
            setCardSelected(undefined);
        } else {
            cards.forEach(c => {
                c.isSelected = false;
            })
            card.isSelected = true;
            setCardSelected(card);
        }
    }

    const handleSubregionSelected = (region) => {
        setSubregionSelected(region);
    }
    const handleLabelSubregionSelected = (label) => {
        setLabelSubregionSelected(label);
    }

    const handleService = () => {

        if(cardSelected === undefined){
            alert('Por favor, seleccione una carta de acción válida');
            return;
        }

        service.playActionCard({
            subregionId: subregionSelected.id,
            cardId: cardSelected.id
        })
    }

    return (
        <>
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
                            <Typography >
                                Seleccionar carta de acción y destino
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Autocomplete
                                disablePortal
                                getOptionLabel={(option) => option.nombre}
                                options={subregions}
                                value={subregionSelected}
                                onChange={(event, newValue) => {
                                    handleSubregionSelected(newValue);
                                }}
                                inputValue={labelSubregionSelected}
                                onInputChange={(event, newInputValue) => {
                                    handleLabelSubregionSelected(newInputValue);
                                }}
                                renderInput={(params) => <TextField {...params} label="Subregiones" />}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            {cards?.map((card) => (
                                <Button onClick={() => handleCardSelected(card)}
                                        size="small" variant='contained' color='warning' fullWidth>
                                    <ActionCard actionName={card.actionType} />
                                </Button>
                            ))}
                        </Grid>
                    <Grid item xs={12}>
                        <Button onClick={handleService}
                                size="small" variant='contained' color='warning' fullWidth>Ordenar acción</Button>
                    </Grid>

                    </Grid>
                </Box>
            </Modal>
        </>
    )
}

export default OrdenarAccionModal;