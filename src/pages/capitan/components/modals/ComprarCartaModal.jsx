import React, { useState } from 'react'
import {Modal, Grid, Box, Button, Typography, Autocomplete, TextField} from '@mui/material'
import service from '../../Service'
import ActionCard from "../../../controlComponents/ActionCard.jsx";
import PagarModal from "../../../controlComponents/PagarModal.jsx";

const ComprarCartaModal = ({ open, handleClose, cards, recursos, label }) => {

    const [cardSelected, setCardSelected] = useState(undefined);
    const [openPagarModal, setOpenPagarModal] = useState(false);

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

    const handleOpenPagarModal = () => {

        if(cardSelected === undefined){
            alert('Por favor, seleccioná un tipo de acción para continuar');
            return;
        }

        setOpenPagarModal(true);
    }
    const handleClosePagarModal = () => {
        setOpenPagarModal(false);
    }

    const handleService = ({cardTypeSelected, payment}) => {

        service.comprarActionCard({
            payment: payment,
            actionTypeId: cardTypeSelected.id
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
                                Seleccionar tipo de Carta de Acción
                            </Typography>
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
                            <Button onClick={handleOpenPagarModal}
                                    size="small" variant='contained' color='warning' fullWidth>Ir a pagar</Button>
                        </Grid>

                    </Grid>
                </Box>
            </Modal>
            <PagarModal
                open={openPagarModal}
                handleClose={handleClosePagarModal}
                itemWanted={cardSelected}
                handleService={handleService}
                payLabel={label}
                recursoList={recursos}
            />
        </>
    )
}

export default ComprarCartaModal