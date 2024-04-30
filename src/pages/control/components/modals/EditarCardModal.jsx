import React, {useContext, useState} from 'react';
import {Autocomplete, Box, Button, Grid, Modal, TextField} from "@mui/material";
import ExtraCard from "../../../common/ExtraCard.jsx";
import ResourceCard from "../../../common/ResourceCard.jsx";
import MarketCard from "../../../common/MarketCard.jsx";
import RepresentationCard from "../../../common/RepresentationCard.jsx";
import service from "../../Service.js";
import {ControlContext} from "../../Context.jsx";
import useWebSocket from "../../../../hooks/useWebSocket.jsx";

const EditarCardModal = ({open, handleClose, card, playerId}) => {

    const {disparoTodos} = useWebSocket({});

    const {gameData, stompClient} = useContext(ControlContext);
    const [playerToSelected, setPlayerToSelected] = useState({});
    const [labelPlayerToSelected, setLabelPlayerToSelected] = useState('');

    const handleBorrarCarta = async () => {
        await service.removeCard({cardId:card.id});
        disparoTodos({stompClient:stompClient});
    }
    const handleSelectPlayerTo = ({newValue}) => {
        setPlayerToSelected(newValue)
    }
    const handleSelectPlayerToLabel = ({newValue}) => {
        setLabelPlayerToSelected(newValue)
    }
    const handleMoverCarta = async () => {
        await service.moveCard({cardId:card.id, fromId:playerId, toId:playerToSelected.id});
        disparoTodos({stompClient:stompClient});
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
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    {card.recursos &&
                                        <ResourceCard resourceName={card.resourceTypeEnum}/>
                                    }
                                    {card.mercado &&
                                        <MarketCard cityName={card?.cityName} level={card?.level}/>
                                    }
                                    {card.representacion &&
                                        <RepresentationCard ciudad={card?.ciudad} poblacion={card?.poblacion}/>
                                    }
                                    {card.extra &&
                                        <ExtraCard nombre={card.nombre} descripcion={card.descripcion}
                                                   bonificacion={card.bonificacion}/>
                                    }
                                </Grid>
                                <Grid item xs={12}>
                                    <Button onClick={handleBorrarCarta}
                                            size="small" variant='contained' color='warning'>
                                        Borrar Carta
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Autocomplete
                                disablePortal
                                getOptionLabel={(option) => option.username || ''}
                                options={gameData?.playersData}
                                value={playerToSelected}
                                onChange={(event, newValue) => {
                                    handleSelectPlayerTo({newValue:newValue});
                                }}
                                inputValue={labelPlayerToSelected}
                                onInputChange={(event, newInputValue) => {
                                    handleSelectPlayerToLabel({newValue:newInputValue});
                                }}
                                renderInput={(params) => <TextField {...params} label="Dar carta al jugador:"/>}
                            />
                            <Button onClick={handleMoverCarta}
                                    size="small" variant='contained' color='warning'>
                                Dar a otro jugador
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    );
};

export default EditarCardModal;