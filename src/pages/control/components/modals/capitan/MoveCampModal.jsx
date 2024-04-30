import React, {useContext, useState} from 'react';
import {Autocomplete, Box, Button, Grid, Modal, TextField, Typography} from "@mui/material";
import {ControlContext} from "../../../Context.jsx";

const MoveCampModal = ({open, handleClose, handleService}) => {

    const {gameData} = useContext(ControlContext);

    const [subregionSelected, setSubregionSelected] = useState({});
    const handleSelectSubregion = ({newValue}) => {
        setSubregionSelected(newValue)
    }
    const [labelSubregionSelected, setLabelSubregionSelected] = useState({});
    const handleSelectSubregionLabel = ({newValue}) => {
        setLabelSubregionSelected(newValue)
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
                    <Grid item xs={12}>
                        <Typography>
                            Seleccionar carta de acción y destino
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Autocomplete
                            disablePortal
                            getOptionLabel={(option) => option.name || ''}
                            options={gameData?.gameRegions?.flatMap(r => r.subregions)}
                            value={subregionSelected}
                            onChange={(event, newValue) => {
                                handleSelectSubregion({newValue:newValue});
                            }}
                            inputValue={labelSubregionSelected}
                            onInputChange={(event, newInputValue) => {
                                handleSelectSubregionLabel({newValue:newInputValue});
                            }}
                            renderInput={(params) => <TextField {...params} label="Subregiones"
                                                                sx={{width: "250%"}}/>}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={() => handleService({gameSubregionId:subregionSelected.id})}
                                size="small" variant='contained' color='warning' fullWidth>Trasladar campamento
                            a</Button>
                    </Grid>

                </Grid>

            </Box>
        </Modal>
    );
};

export default MoveCampModal;