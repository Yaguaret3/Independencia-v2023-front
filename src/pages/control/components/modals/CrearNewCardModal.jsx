import React, {useState} from 'react';
import {Autocomplete, Box, Button, Grid, Modal, TextField} from "@mui/material";
import service from "../../Service.js";
import CreateResourceCard from "../CreateResourceCard.jsx";
import CreateMarketCard from "../CreateMarketCard.jsx";
import CreateRepresentationCard from "../CreateRepresentationCard.jsx";

const CrearNewCardModal = ({open, handleClose, playerId}) => {

    const types = ['recursos', 'mercado', 'representacion', 'extra'];
    const [typeSelected, setTypeSelected] = useState('');

    const handleSelectType = ({newValue}) => {
        setTypeSelected(newValue)
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
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                Seleccionar tipo de carta
                            </Grid>
                            <Grid item xs={6}>
                                <Autocomplete
                                    disablePortal
                                    getOptionLabel={(option) => option}
                                    options={types}
                                    value={typeSelected}
                                    onChange={(event, newValue) => {
                                        handleSelectType({newValue: newValue});
                                    }}
                                    inputValue={typeSelected}
                                    renderInput={(params) => <TextField {...params} label="Tipo de carta"/>}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            {typeSelected === 'recursos' &&
                                <CreateResourceCard playerId={playerId}/>
                            }
                            {typeSelected === 'mercado' &&
                                <CreateMarketCard playerId={playerId}/>
                            }
                            {typeSelected === 'representacion' &&
                               <CreateRepresentationCard playerId={playerId}/>
                            }
                            {typeSelected === 'extra' &&
                                <>
                                    <Grid item={6}>
                                        <Autocomplete
                                            disablePortal
                                            getOptionLabel={(option) => option}
                                            options={recursosTypes}
                                            value={recursoTypeSelected}
                                            onChange={(event, newValue) => {
                                                handleSelectRecursoType({newValue: newValue});
                                            }}
                                            inputValue={recursoTypeSelected}
                                            renderInput={(params) => <TextField {...params} label="Recurso"/>}
                                        />
                                    </Grid>
                                    <Grid item={6}>
                                        <Button onClick={handleCrearNewResourceCard}
                                                size="small" variant='contained' color='warning' >
                                            Crear
                                        </Button>
                                    </Grid>
                                </>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
        ;
};

export default CrearNewCardModal;