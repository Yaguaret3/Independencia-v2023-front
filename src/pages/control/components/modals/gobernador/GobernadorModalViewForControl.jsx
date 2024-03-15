import React, {useState} from 'react';
import {Box, Button, Grid, Modal, TextField, Typography} from "@mui/material";
import CiudadModal from "./CiudadModal.jsx";
import PreciosModal from "./PreciosModal.jsx";
import CardsModal from "../CardsModal.jsx";
import ResourceCard from "../../../../common/ResourceCard.jsx";
import MarketCard from "../../../../common/MarketCard.jsx";
import RepresentationCard from "../../../../common/RepresentationCard.jsx";
import service from "../../../Service.js";

const GobernadorModalViewForControl = ({open, handleClose, player}) => {

    const [cardSelected, setCardSelected] = useState({});
    const handleCardSelected = ({card}) => {
        setCardSelected(card);
        handleOpenCardsModal();
    }

    const [openCiudadModal, setOpenCiudadModal] = useState(false);
    const handleOpenCiudadModal = () => {
        setOpenCiudadModal(true);
    }
    const handleCloseCiudadModal = () => {
        setOpenCiudadModal(false);
    }

    const [openPreciosModal, setOpenPreciosModal] = useState(false);
    const handleOpenPreciosModal = () => {
        setOpenPreciosModal(true);
    }
    const handleClosePreciosModal = () => {
        setOpenPreciosModal(false);
    }

    const [openCardsModal, setOpenCardsModal] = useState(false);
    const handleOpenCardsModal = () => {
        setOpenCardsModal(true);
    }
    const handleCloseCardsModal = () => {
        setOpenCardsModal(false);
    }
    const [miliciaValue, setMiliciaValue] = useState("");
    const handleMiliciaValue = (e) => {
        setMiliciaValue(e.target.value);
    }
    const handleActualizarMilicia = () => {
        service.actualizarMilicia({value:miliciaValue, gobernadorId:player.id});
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
                        <Grid item xs={6}>
                            <Typography>Username</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField disabled={'true'} label={"Username"} fullWidth value={player?.username} variant={"standard"}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography>Rol</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField disabled={'true'} label={"Rol"} fullWidth value={player?.rol} variant={"standard"}/>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Button onClick={handleOpenCiudadModal}
                                            size="small" variant='contained' color='warning' fullWidth>{player?.ciudad?.name}</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    {/* MILICIA */}
                                    <Grid container spacing={2}>
                                        <Grid item xs={3}>
                                            <TextField
                                                value = "Milicia"
                                                type = "text"
                                                label = "Milicia"
                                                disabled={true} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                value = {player?.milicia}
                                                label = "Valor Actual"
                                                disabled={true} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                value = {miliciaValue}
                                                type = "number"
                                                label = "Nuevo valor"
                                                onChange = {(event) => handleMiliciaValue(event)} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button onClick={handleActualizarMilicia}
                                                    size="medium" variant='contained' color='warning' fullWidth>Actualizar</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button onClick={handleOpenPreciosModal}
                                            size="small" variant='contained' color='warning' fullWidth>Precios</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={8}>

                            {/* ------- ¡CARTAS! -------- */}

                            <Grid container spacing={2}>
                                {player?.recursos?.map((card) => (
                                    <Button key={card.id} onClick={() => handleCardSelected(card)}
                                            size="small" variant='contained' color='warning' fullWidth>
                                        <ResourceCard resourceName={card.resourceTypeEnum} />
                                    </Button>
                                ))}
                                {player?.mercados?.map((card) => (
                                    <Button key={card.id} onClick={() => handleCardSelected(card)}
                                            size="small" variant='contained' color='warning' fullWidth>
                                        <MarketCard cityName={card?.cityName} level={card?.level} />
                                    </Button>
                                ))}
                                {player?.representacion?.map((card) => (
                                    <Button key={card.id} onClick={() => handleCardSelected(card)}
                                            size="small" variant='contained' color='warning' fullWidth>
                                        <RepresentationCard cityName={card?.cityName} level={card?.level} />
                                    </Button>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
            <CiudadModal
                open={openCiudadModal}
                handleClose={handleCloseCiudadModal}
                ciudad={player?.ciudad}
                rolJugador={player?.rol}
                idJugador={player?.id}
                nombreJugador={player?.username}/>
            <PreciosModal
                open={openPreciosModal}
                handleClose={handleClosePreciosModal}
                precios={player?.prices}/>
            <CardsModal
                open={openCardsModal}
                handleClose={handleCloseCardsModal}
                card={cardSelected}/>
        </>
    );
};

export default GobernadorModalViewForControl;