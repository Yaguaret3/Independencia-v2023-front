import {Grid} from '@mui/material';
import React, {useContext, useState} from 'react';
import {MercaderContext} from '../Context';
import EntregarCartaModal from "../../common/EntregarCartaModal.jsx";
import service from "../../mercader/Service.js";
import useWebSocket from "../../../hooks/useWebSocket.jsx";
import ExtraCard from "../../common/ExtraCard.jsx";

const Cartas = () => {

    const {playerData, gameData, stompClient} = useContext(MercaderContext);
    const [openEntregarCartaModal, setOpenEntregarCartaModal] = useState(false);
    const [card, setCard] = useState();

    const {disparoTodos} = useWebSocket({});

    const handleOpenEntregarCartaModal = ({card}) => {
        setCard(card);
        setOpenEntregarCartaModal(true);
    }

    const handleCloseEntregarCartaModal = () => {
        setOpenEntregarCartaModal(false);
    }
    const handleDarCartaService = async ({playerSelected, givenCard}) => {
        if (playerSelected === '' || playerSelected === null) {
            alert('Por favor, elegir un jugador')
            return;
        }
        await service.giveCard({idJugadorDestino: playerSelected.playerId, idResourceCard: givenCard.id})
        disparoTodos({stompClient: stompClient});
        handleCloseEntregarCartaModal();
    }

    return (
        <>
            <Grid container spacing={4}>

                <Grid item xs={6}>
                    {playerData?.extras?.map((extra) => (

                        <ExtraCard nombre={extra.nombre} descripcion={extra.descripcion} bonificacion={extra.bonificacion}
                                      handleFunction={() => handleOpenEntregarCartaModal({card: extra})}/>
                    ))}
                </Grid>

            </Grid>
            <EntregarCartaModal
                open={openEntregarCartaModal}
                handleClose={handleCloseEntregarCartaModal}
                card={card}
                cardType={'recurso'}
                handleService={handleDarCartaService}
                players={gameData?.players?.filter(p => p.rol !== 'CONTROL')}
            />
        </>

    );
};

export default Cartas;