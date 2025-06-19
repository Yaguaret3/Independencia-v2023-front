import React, {useContext, useState} from 'react'
import {Modal, Grid, Box, Button, Typography, Autocomplete, TextField} from '@mui/material'
import service from '../../Service'
import ActionCard from "../../../common/ActionCard.jsx";
import {CapitanContext} from "../../Context.jsx";
import useWebSocket from "../../../../hooks/useWebSocket.jsx";

const OrdenarAccionModal = ({ open, handleClose, cards, subregions }) => {

    const {stompClient} = useContext(CapitanContext);
    const {disparoCapitanes, disparoControl} = useWebSocket({});

    const [cardSelected, setCardSelected] = useState(undefined);
    const [subregionSelected, setSubregionSelected] = useState({});
    const [labelSubregionSelected, setLabelSubregionSelected] = useState('');

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

    const handleSubregionSelected = ({newValue}) => {
        setSubregionSelected(newValue);
    }
    const handleLabelSubregionSelected = ({newValue}) => {
        setLabelSubregionSelected(newValue);
    }

    const handleService = async () => {

        if(cardSelected === undefined){
            alert('Por favor, seleccione una carta de acción válida');
            return;
        }

        await service.playActionCard({
            subregionId: subregionSelected.id,
            cardId: cardSelected.id
        })
        disparoControl({stompClient:stompClient});
        disparoCapitanes({stompClient:stompClient});
        setCardSelected(undefined);
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
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography >
                            Seleccionar carta de acción y destino
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Autocomplete
                            disablePortal
                            getOptionLabel={(option) => option.nombre || ''}
                            options={subregions}
                            value={subregionSelected}
                            onChange={(event, newValue) => {
                                handleSubregionSelected({newValue:newValue});
                            }}
                            inputValue={labelSubregionSelected}
                            onInputChange={(event, newInputValue) => {
                                handleLabelSubregionSelected({newValue:newInputValue});
                            }}
                            renderInput={(params) => <TextField {...params} label="Subregiones" />}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        {cards?.filter(card => card.actionName === 'DESPLIEGUE' || card.actionName === 'DEFENSA' || card.actionName === 'ATAQUE')
                            .map((card) => (
                                <ActionCard color={card.isSelected ? 'green' : 'black'} key={card.id} actionName={card.actionType} handleFunction={() => handleCardSelected(card)}/>
                            ))}
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={handleService}
                                size="small" variant='contained' color='warning' fullWidth>Ordenar acción</Button>
                    </Grid>

                </Grid>
            </Box>
        </Modal>
    )
}

export default OrdenarAccionModal;