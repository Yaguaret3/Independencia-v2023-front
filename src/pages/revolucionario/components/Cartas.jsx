import React, {useContext, useState} from 'react';
import {Grid} from "@mui/material";
import {RevolucionarioContext} from "../Context.jsx";
import ResourceCard from "../../common/ResourceCard.jsx";
import RepresentationCard from "../../common/RepresentationCard.jsx";
import useWebSocket from "../../../hooks/useWebSocket.jsx";
import service from "../../mercader/Service.js";
import EntregarCartaModal from "../../common/EntregarCartaModal.jsx";

const Cartas = () => {

    const {playerData, gameData, stompClient} = useContext(RevolucionarioContext);

    const [openModal, setOpenModal] = useState(false);
    const [resource, setResource] = useState();

    const {disparoTodos} = useWebSocket({});

    const handleOpen = ({resource}) => {
        setResource(resource);
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
            <Grid container spacing={2}>
                {playerData?.recursos?.map((recurso) => (

                    <ResourceCard resourceName={recurso.resourceTypeEnum} key={recurso.id}
                                  handleFunction={() => handleOpen({resource: recurso})}/>
                ))}
                {playerData?.representacion?.map(r =>
                    <RepresentationCard poblacion={r.poblacion}
                                        ciudad={r.ciudad}
                                        key={r.id}/>
                )}
            </Grid>
            <EntregarCartaModal
                open={openModal}
                handleClose={handleClose}
                card={resource}
                players={gameData.players}
                handleService={handleDarCartaService}
                cardType={'recurso'}
            />
        </>
    );
};

export default Cartas;