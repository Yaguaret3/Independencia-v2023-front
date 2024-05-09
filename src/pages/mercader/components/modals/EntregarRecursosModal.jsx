import React, {useContext, useState} from 'react';
import {Box, Grid, Modal, Typography} from "@mui/material";
import ResourceCard from "../../../common/ResourceCard.jsx";
import EntregarCartaModal from "../../../common/EntregarCartaModal.jsx";
import {MercaderContext} from "../../Context.jsx";
import useWebSocket from "../../../../hooks/useWebSocket.jsx";
import service from "../../Service.js";

const EntregarRecursosModal = ({open, handleClose}) => {

    const { playerData, gameData, stompClient } = useContext(MercaderContext);
    const [openEntregarCartaModal, setOpenEntregarCartaModal] = useState(false);
    const [resource, setResource] = useState();

    const {disparoTodos} = useWebSocket({});


    const handleOpenEntregarCartaModal = ({ resource }) => {
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
        await service.giveCard({ idJugadorDestino: playerSelected.playerId, idResourceCard: card.id })
        disparoTodos({stompClient:stompClient});
        handleCloseEntregarCartaModal();
    }

    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{
                    position: 'absolute',
                    top: '50vh',
                    left: '50vw',
                    width: "50vw",
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 3
                }}
                >
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
                                    <Grid item xs={3} key={recurso.id}>
                                        <ResourceCard resourceName={recurso?.resourceTypeEnum}
                                                      handleFunction={() => handleOpenEntregarCartaModal({resource: recurso})}/>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
            <EntregarCartaModal
                open={openEntregarCartaModal}
                handleClose={handleCloseEntregarCartaModal}
                card={resource}
                players={gameData.players?.filter(p => p.rol === 'GOBERNADOR')}
                handleService={handleDarCartaService}
                cardType={'recurso'}
            />
        </>
    );
};

export default EntregarRecursosModal;