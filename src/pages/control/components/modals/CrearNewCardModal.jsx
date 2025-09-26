import React, {useState} from 'react';
import {Autocomplete, Box, Button, Grid, Modal, TextField} from "@mui/material";
import service from "../../Service.js";
import CreateResourceCard from "../CreateResourceCard.jsx";
import CreateMarketCard from "../CreateMarketCard.jsx";
import CreateRepresentationCard from "../CreateRepresentationCard.jsx";
import CreateActionCard from "../CreateActionCard.jsx";
import CreateBattleCard from "../CreateBattleCard.jsx";
import CreateExtraCard from "../CreateExtraCard.jsx";

const CrearNewCardModal = ({open, handleClose, playerId}) => {

    const types = ['Recursos', 'Mercado', 'Representacion', 'Extra', 'Accion', 'Batalla'];
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
                borderRadius: 3,
                width: '40%'
            }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Grid container spacing={2}>
                            <Autocomplete
                                fullWidth
                                disablePortal
                                getOptionLabel={(option) => option}
                                options={types}
                                value={typeSelected}
                                clearIcon={null}
                                onChange={(event, newValue) => {
                                    handleSelectType({newValue: newValue});
                                }}
                                inputValue={typeSelected}
                                renderInput={(params) => <TextField {...params} label="Tipo de carta"/>}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={8}>
                        {typeSelected === 'Recursos' &&
                            <CreateResourceCard playerId={playerId}/>
                        }
                        {typeSelected === 'Mercado' &&
                            <CreateMarketCard playerId={playerId}/>
                        }
                        {typeSelected === 'Representacion' &&
                            <CreateRepresentationCard playerId={playerId}/>
                        }
                        {typeSelected === 'Accion' &&
                            <CreateActionCard playerId={playerId}/>
                        }
                        {typeSelected === 'Batalla' &&
                            <CreateBattleCard playerId={playerId}/>
                        }
                        {typeSelected === 'Extra' &&
                            <CreateExtraCard playerId={playerId}/>
                        }
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
        ;
};

export default CrearNewCardModal;