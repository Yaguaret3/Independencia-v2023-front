import React, {useEffect, useState} from 'react';
import service from '../../Service'
import {Autocomplete, Box, Button, Grid, Modal, TextField, Typography} from "@mui/material";
import ActionCard from "../../../controlComponents/ActionCard.jsx";

const SingleBattleModal = ({open, handleClose, batalla, cards, maxMilitia}) => {

    const [cardSelected, setCardSelected] = useState({});
    const handleCardSelected = ({card}) => {
        if(cardSelected === card){
            card.isSelected=false;
            setCardSelected({});
        } else {
            card.isSelected=true;
            setCardSelected(card);
        }
    }
    const handlePlayBattleCardService = () => {
        if(cardSelected === undefined){
            alert('Por favor, seleccione una orden de batalla');
            return;
        }
        service.playBattleCard({cardId: cardSelected?.id, battleId: batalla.id});
    }

    const [maxMilitiaArray, setMaxMilitiaArray] = useState([0]);
    useEffect(() => {

        const newOptions = Array.from({ length: maxMilitia + 1 }, (_, index) => ({
            value: index,
            label: index.toString(),
        }));

        setMaxMilitiaArray(newOptions);
    }, [maxMilitia]);

    const [militiaSelected, setMilitiaSelected] = useState(0);
    const handleSelectMilitia = (militiaSelected) => {
        setMilitiaSelected(militiaSelected);
    }
    const [labelMilitiaSelected, setLabelMilitiaSelected] = useState('');
    const handleLabelMilitiaSelected = (newValue) => {
        setLabelMilitiaSelected(newValue);
    }
    const handleAssignMilitiaService = () => {
        confirm('¿Estás seguro? Una vez asignada la milicia no se puede re-asignar para esta batalla');
        service.assignMilitia({militia: militiaSelected, battleId:batalla.id})
    }

    return (
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

                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>

                                {batalla?.combatientes?.map((ejercito, index) => {
                                    return (
                                        <Grid item xs={6} key={index}>
                                            <Grid container spacing={1}>

                                                <Grid item xs={12}>
                                                    <Typography >
                                                        {ejercito.ataque ? 'ATAQUE' : ''}
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12}>
                                                    <Typography >
                                                        {ejercito.capitanName}
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12}>
                                                    <Typography >
                                                        'DADO INICIAL: ' + {ejercito.valorAzar}
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12}>
                                                    <Typography >
                                                        'MILICIA ASIGNADA: ' + {ejercito.milicias}
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12}>
                                                    <Typography >
                                                        'VALOR PROVISORIO: ' + {ejercito.valorProvisorio}
                                                    </Typography>
                                                </Grid>

                                                {ejercito.cartasJugadas?.map( (c, index )=> {
                                                    return <Grid item xs={4} key={index}>
                                                        <ActionCard actionName={c.actionType} />
                                                    </Grid>
                                                })}
                                            </Grid>
                                        </Grid>)
                                })}
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                            {cards?.map( (c, index )=> {
                                return <Grid item xs={4} key={index}>
                                    <Button onClick={() => handleCardSelected(c)}
                                            size="small" variant='contained' color='warning' fullWidth>
                                        <ActionCard actionName={c.actionType} />
                                    </Button>
                                </Grid>
                            })}
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Autocomplete
                            disablePortal
                            getOptionLabel={(option) => option}
                            options={maxMilitiaArray}
                            value={militiaSelected}
                            onChange={(event, newValue) => {
                                handleSelectMilitia(newValue);
                            }}
                            inputValue={labelMilitiaSelected}
                            onInputChange={(event, newInputValue) => {
                                handleLabelMilitiaSelected(newInputValue);
                            }}
                            renderInput={(params) => <TextField {...params} label="Subregiones" />}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={handleAssignMilitiaService}

                                {/*TODO DESHABILITAR cuando milicia ya asignada */}

                                size="small" variant='contained' color='warning' fullWidth>Asignar Milicias</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={handlePlayBattleCardService}
                                size="small" variant='contained' color='warning' fullWidth>Enviar orden de batalla</Button>
                        <Button onClick={handleClose}
                                size="small" variant='contained' color='warning' fullWidth>Cancelar</Button>
                    </Grid>
                </Grid>


        </Box>
    </Modal>
    );
};

export default SingleBattleModal;