import React, {useState} from 'react';
import service from '../../Service'
import {Box, Button, Grid, Modal, Typography} from "@mui/material";
import ActionCard from "../../../components/ActionCard.jsx";

const SingleBattleModal = ({open, handleClose, batalla, cards}) => {

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
    const handleService = () => {
        if(cardSelected === undefined){
            alert('Por favor, seleccione una orden de batalla');
            return;
        }
        service.playBattleCard(cardSelected?.id, batalla.id);
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
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        {
                                            /* Atacante / Defensor / Otro */
                                        }
                                        <Typography >
                                            ATAQUE
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {
                                            /* Nombre */
                                        }
                                        <Typography >
                                            {batalla?.ejercitoAtacante?.capitanName}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {
                                            /* Dado resultado */
                                        }
                                        <Typography >
                                            {batalla?.ataque}
                                        </Typography>
                                    </Grid>
                                    {
                                            /* Cartas jugadas */
                                    }
                                    {batalla?.cartasDeCombate?.filter(c => c.playerId === batalla?.ejercitoAtacante?.id).map( (c, index )=> {
                                        return <Grid item xs={4} key={index}>
                                            <ActionCard actionName={c.actionType} />
                                        </Grid>
                                    })}
                                </Grid>

                                <Grid item xs={6}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            {
                                                /* Atacante / Defensor / Otro */
                                            }
                                            <Typography >
                                                DEFENSA
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            {
                                                /* Nombre */
                                            }
                                            <Typography >
                                                {batalla?.ejercitoDefensor?.capitanName}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            {
                                                /* Dado resultado */
                                            }
                                            <Typography >
                                                {batalla?.defensa}
                                            </Typography>
                                        </Grid>
                                        {
                                                /* Cartas jugadas */
                                        }
                                        {batalla?.cartasDeCombate?.filter(c => c.playerId === batalla?.ejercitoDefensor?.id).map( (c, index )=> {
                                            return <Grid item xs={4} key={index}>
                                                <ActionCard actionName={c.actionType} />
                                            </Grid>
                                        })}
                                    </Grid>
                                </Grid>

                                {batalla?.ejercitos.map((ejercito, index) => {
                                    return (
                                        <Grid item xs={6} key={index}>
                                            <Grid container spacing={1}>
                                                <Grid item xs={12}>
                                                    {
                                                        /* Atacante / Defensor / Otro */
                                                    }
                                                    <Typography >
                                                        OTRO
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    {
                                                        /* Nombre */
                                                    }
                                                    <Typography >
                                                        {batalla?.ejercito?.capitanName}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    {
                                                        /* Dado resultado */
                                                    }
                                                    <Typography >
                                                        0
                                                    </Typography>
                                                </Grid>
                                                {
                                                        /* Cartas jugadas */
                                                }
                                                {batalla?.cartasDeCombate?.filter(c => c.playerId === ejercito?.id).map( (c, index )=> {
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
                    <Grid item xs={12}>
                        <Button onClick={handleService}
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