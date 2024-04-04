import React, {useContext, useState} from 'react';
import {Autocomplete, Box, Button, Grid, Modal, TextField, Typography} from "@mui/material";
import {ControlContext} from "../../../Context.jsx";

const CrearNuevoEjercitoModal = ({open, handleClose, handleCrearNuevoEjercito}) => {

   const {gameData} = useContext(ControlContext);

    const [milicias, setMilicias] = useState(0);

    const handleMilicias = (e) => {
        setMilicias(e.target.value);
    }
    const [subregionSelected, setSubregionSelected] = useState({});
    const handleSubregionSelected = ({subRegion}) => {
        setSubregionSelected(subRegion);
    }
    const [labelSubregionSelected, setLabelSubregionSelected] = useState('');
    const handleLabelSubregionSelected = ({labelSubregion}) => {
        setLabelSubregionSelected(labelSubregion);
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
                            Crear Nuevo Ejército
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Autocomplete
                            disablePortal
                            getOptionLabel={(option) => option.name ? option.name : ''}
                            options={gameData?.gameRegions.map(r => r.subRegions).flatMap(sr => sr)}
                            value={subregionSelected}
                            onChange={(event, newValue) => {
                                handleSubregionSelected({subRegion:newValue});
                            }}
                            inputValue={labelSubregionSelected}
                            onInputChange={(event, newInputValue) => {
                                handleLabelSubregionSelected({labelSubregion:newInputValue});
                            }}
                            renderInput={(params) => <TextField {...params} label="Subregiones"/>}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField onBlur={handleMilicias} fullWidth placeholder={"Milicias"} variant={"standard"} type='number'/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={() => handleCrearNuevoEjercito({milicias:milicias, subregionId:subregionSelected.id})}
                                size="small" variant='contained' color='warning' fullWidth>Crear</Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default CrearNuevoEjercitoModal;