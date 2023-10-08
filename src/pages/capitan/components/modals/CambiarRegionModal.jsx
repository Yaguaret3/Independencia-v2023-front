import React, { useState } from 'react'
import {Modal, Grid, Box, Button, Typography, Tooltip, Autocomplete, TextField} from '@mui/material'
import PagarModal from './PagarModal'
import service from '../../Service'
import ActionCard from "../../../components/ActionCard.jsx";

const CambiarRegionModal = ({ open, handleClose, cards, regions }) => {

    const [cardSelected, setCardSelected] = useState({});
    const {regionSelected, setRegionSelected} = useState({});
    const {labelRegionSelected, setLabelRegionSelected} = useState('');

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

    const handleRegionSelected = (region) => {
        setRegionSelected(region);
    }
    const handleLabelRegionSelected = (label) => {
        setLabelRegionSelected(label);
    }

    const handleService = () => {

        if(cardSelected === undefined){
            alert('Por favor, seleccione una carta de acción válida');
            return;
        }

        service.moverCampamento({
            regionToId: regionSelected.id,
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
                                options={regions}
                                value={regionSelected}
                                onChange={(event, newValue) => {
                                    handleRegionSelected(newValue);
                                }}
                                inputValue={labelRegionSelected}
                                onInputChange={(event, newInputValue) => {
                                    handleLabelRegionSelected(newInputValue);
                                }}
                                renderInput={(params) => <TextField {...params} label="Regiones" />}
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
                                size="small" variant='contained' color='warning' fullWidth>Trasladar campamento a</Button>
                    </Grid>

                    </Grid>
                </Box>
            </Modal>
        </>
    )
}

export default CambiarRegionModal