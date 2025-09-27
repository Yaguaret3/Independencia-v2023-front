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
import ExtraCard from "../../common/ExtraCard.jsx";

const Cartas = () => {

    const {playerData, gameData, stompClient} = useContext(GobernadorContext);
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
                                      handleFunction={() => handleOpenEntregarCartaModal({resource: recurso})}/>
                    ))}

                    {playerData?.mercados?.map((mercado) => (

                        <MarketCard level={mercado.level} cityName={mercado.cityName} key={mercado.id}/>
                    ))}

                    {playerData.representacion && (<RepresentationCard poblacion={playerData.representacion?.poblacion}
                                                                       ciudad={playerData.representacion?.ciudad}
                                                                       prestigio={playerData.representacion?.prestigio}/>)}
                    <Grid item xs={12} xl={6}>
                        {playerData.extras?.map((extra) => (

                            <ExtraCard nombre={extra.nombre}
                                       descripcion={extra.descripcion}
                                       bonificacion={extra.bonificacion}
                                       handleFunction={() => handleOpen({card: extra})}/>
                        ))}
                    </Grid>
                </Grid>

            </Grid>
            <EntregarCartaModal
                open={openEntregarCartaModal}
                handleClose={handleCloseEntregarCartaModal}
                card={resource}
                cardType={'recurso'}
                handleService={handleDarCartaService}
                players={gameData?.players?.filter(p => p.rol === 'REVOLUCIONARIO' || p.rol === 'CAPITAN')}
            />
        </>

    );
};

export default Cartas;