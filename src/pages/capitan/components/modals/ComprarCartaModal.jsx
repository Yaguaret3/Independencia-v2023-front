import React, {useContext, useState} from 'react'
import {Modal, Grid, Box, Button, Typography, Tooltip} from '@mui/material'
import service from '../../Service'
import ActionCard from "../../../common/ActionCard.jsx";
import PagarModal from "../../../common/PagarModal.jsx";
import BattleCard from "../../../common/BattleCard.jsx";
import useWebSocket from "../../../../hooks/useWebSocket.jsx";
import {CapitanContext} from "../../Context.jsx";

const ComprarCartaModal = ({open, handleClose, cards, recursos, label, accion, ordenDeBatalla}) => {

    const {disparoControl, disparoCapitanes} = useWebSocket({});
    const {stompClient} = useContext(CapitanContext);

    const [cardSelected, setCardSelected] = useState({});
    const [openPagarModal, setOpenPagarModal] = useState(false);

    const handleCardSelected = (card) => {
        if (card.isSelected) {
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

        if (cardSelected === undefined) {
            alert(accion ? 'Por favor, seleccioná un tipo de acción para continuar' : 'Por favor, seleccioná un tipo de orden de batalla para continuar');
            return;
        }

        setOpenPagarModal(true);
    }
    const handleClosePagarModal = () => {
        setOpenPagarModal(false);
    }

    const handleService = async ({plata, resourcesIds}) => {

        if (accion) {
            await service.comprarActionCard({
                cardTypeId: cardSelected.id,
                plata: plata,
                resourcesIds: resourcesIds
            })
        }
        if (ordenDeBatalla) {
            await service.comprarBattleCard({
                cardTypeId: cardSelected.id,
                plata: plata,
                resourcesIds: resourcesIds
            })
        }
        disparoControl({stompClient: stompClient});
        disparoCapitanes({stompClient: stompClient});
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
                            <Typography>
                                Seleccionar tipo de Carta de Acción
                            </Typography>
                        </Grid>
                        {cards?.map((card) => (
                            <Grid item xs={3} key={card.id}>
                                {accion &&
                                    <ActionCard actionName={card.name}
                                                descripcion={card.descripcion}
                                                color={card.isSelected ? 'green' : 'black'}
                                                handleFunction={() => handleCardSelected(card)}/>}
                                {ordenDeBatalla &&
                                    <BattleCard battleCardName={card.nameToShow}
                                                descripcion={card.descripcion}
                                                color={card.isSelected ? 'green' : 'black'}
                                                handleFunction={() => handleCardSelected(card)}/>}
                            </Grid>
                        ))}
                        <Grid item xs={12}>
                            <Button onClick={handleOpenPagarModal}
                                    size="medium" variant='contained' color='warning' fullWidth>Ir a pagar</Button>
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