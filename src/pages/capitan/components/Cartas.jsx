import {Grid} from '@mui/material';
import React, {useContext, useState} from 'react';
import {CapitanContext} from '../Context';
import BattleCard from '../../common/BattleCard';
import ActionCard from '../../common/ActionCard';
import useWebSocket from "../../../hooks/useWebSocket.jsx";
import EntregarCartaModal from "../../common/EntregarCartaModal.jsx";
import service from "../../mercader/Service.js";

const Cartas = () => {

    const {playerData, gameData, stompClient} = useContext(CapitanContext);
    const {disparoTodos} = useWebSocket({});
    const [openModal, setOpenModal] = useState(false);
    const [card, setCard] = useState();

    const handleOpen = ({card}) => {
        setCard(card);
        setOpenModal(true);
    }

    const handleClose = () => {
        setOpenModal(false);
    }
    const handleDarCartaService = async ({playerSelected, card}) => {
        if (playerSelected === '' || playerSelected === null) {
            alert('Por favor, elegir un jugador')
            return;
        }
        await service.giveCard({idJugadorDestino: playerSelected.playerId, idResourceCard: card.id})
        disparoTodos({stompClient: stompClient});
        handleClose();
    }

    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    {playerData.actionCards?.map((action) => (

                        <ActionCard actionName={action.actionType}/>
                    ))}
                </Grid>
                <Grid item xs={6}>
                    {playerData.battleCards?.map((battleCard) => (

                        <BattleCard battleCardName={battleCard.battleOrderType}
                                    handleFunction={() => handleOpen({card: battleCard})}/>
                    ))}
                </Grid>
            </Grid>
            <EntregarCartaModal
                open={openModal}
                handleClose={handleClose}
                card={card}
                cardType={'batalla'}
                handleService={handleDarCartaService}
                players={gameData?.players?.filter(p => p.rol === 'CAPITAN' || p.rol === 'REVOLUCIONARIO')}
            />
        </>

    );
};

export default Cartas;