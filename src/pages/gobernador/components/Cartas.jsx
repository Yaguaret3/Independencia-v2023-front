import {Grid} from '@mui/material';
import React, {useContext, useState} from 'react';
import {GobernadorContext} from '../Context';
import ResourceCard from '../../common/ResourceCard';
import MarketCard from '../../common/MarketCard';
import RepresentationCard from '../../common/RepresentationCard';
import BuildingCard from "../../common/BuildingCard.jsx";
import EntregarCartaModal from "../../common/EntregarCartaModal.jsx";
import service from "../../mercader/Service.js";
import useWebSocket from "../../../hooks/useWebSocket.jsx";

const Cartas = () => {

    const {playerData, stompClient} = useContext(GobernadorContext);
    const [openEntregarCartaModal, setOpenEntregarCartaModal] = useState(false);
    const [resource, setResource] = useState();

    const {disparoTodos} = useWebSocket({});

    const handleOpenEntregarCartaModal = ({resource}) => {
        setResource(resource);
        setOpenEntregarCartaModal(true);
    }

    const handleCloseEntregarCartaModal = () => {
        setOpenEntregarCartaModal(false);
    }
    const handleDarCartaService = async ({playerSelected, card}) => {
        if (playerSelected === '' || playerSelected === null) {
            alert('Por favor, elegir un jugador')
            return;
        }
        await service.giveCard({idJugadorDestino: playerSelected.playerId, idResourceCard: card.id})
        disparoTodos({stompClient: stompClient});
        handleCloseEntregarCartaModal();
    }

    return (
        <>
            <Grid container spacing={4}>

                <Grid item xs={6}>
                    {playerData?.city?.buildings.map((building) => (

                        <BuildingCard building={building}/>
                    ))}
                </Grid>

                <Grid item xs={6}>
                    {playerData?.recursos?.map((recurso) => (

                        <ResourceCard resourceName={recurso.resourceTypeEnum} key={recurso.id}
                                      handleService={() => handleOpenEntregarCartaModal({resource: recurso})}/>
                    ))}

                    {playerData?.mercados?.map((mercado) => (

                        <MarketCard level={mercado.level} cityName={mercado.cityName} key={mercado.id}/>
                    ))}

                    {playerData.representacion && (<RepresentationCard poblacion={playerData.representacion?.poblacion}
                                                                       ciudad={playerData.representacion?.ciudad}/>)}
                </Grid>

            </Grid>
            <EntregarCartaModal
                open={openEntregarCartaModal}
                handleClose={handleCloseEntregarCartaModal}
                card={resource}
                cardType={'recurso'}
                handleService={handleDarCartaService}
            />
        </>

    );
};

export default Cartas;