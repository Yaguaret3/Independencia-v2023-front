import React, { useContext, useState } from 'react'
import { MercaderContext } from '../Context';
import ResourceCard from '../../common/ResourceCard';
import { Typography, Grid } from '@mui/material';
import EntregarCartaModal from '../../common/EntregarCartaModal.jsx';
import service from "../Service.js";
import useWebSocket from "../../../hooks/useWebSocket.jsx";

const Recursos = () => {

    const { playerData, gameData, stompClient } = useContext(MercaderContext);
    const [openModal, setOpenModal] = useState(false);
    const [resource, setResource] = useState();

    const {disparoTodos} = useWebSocket({});


    const handleOpen = ({ resource }) => {
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
        await service.giveCard({ idJugadorDestino: playerSelected.playerId, idResourceCard: card.id })
        disparoTodos({stompClient:stompClient});
        handleClose();
    }

    return (
        <>
            <Grid container direction="row"
                justifyContent="space-evenly">

                <Grid item xs={12}>
                    <Typography textAlign={'center'}>
                        Recursos
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Grid container justifyContent={'center'}>
                        {playerData?.recursos?.map((recurso) => (
                            <ResourceCard resourceName={recurso?.resourceTypeEnum} handleFunction={() => handleOpen({resource: recurso})}/>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <EntregarCartaModal
                open={openModal}
                handleClose={handleClose}
                card={resource}
                players={gameData.players?.filter(p => p.rol === 'GOBERNADOR')}
                handleService={handleDarCartaService}
                cardType={'recurso'}
            />
        </>
    )
}

export default Recursos