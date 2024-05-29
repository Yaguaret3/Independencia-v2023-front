import React, {useContext, useState} from 'react';
import {Autocomplete, Box, Button, Grid, Modal, TextField} from "@mui/material";
import {SettingsContext} from "../../Context.jsx";
import useWebSocket from "../../../../hooks/useWebSocket.jsx";
import service from "../../Service.js";

const AddRoleModal = ({open, handleClose, player}) => {

    const {cities, stompClient} = useContext(SettingsContext);
    const {disparoSettings} = useWebSocket({});

    const roles = ['CONTROL', 'GOBERNADOR', 'CAPITAN', 'MERCADER', 'REVOLUCIONARIO'];
    const [rolSelected, setRolSelected] = useState('');
    const [labelRolSelected, setLabelRolSelected] = useState('');
    const handleSelectRol = ({newValue}) => {
        setRolSelected(newValue);
    }
    const handleLabelSelectRol = ({newValue}) => {
        setLabelRolSelected(newValue);
    }
    const [ciudadSelected, setCiudadSelected] = useState({});
    const [labelCiudadSelected, setLabelCiudadSelected] = useState('');
    const handleSelectCity = ({newValue}) => {
        setCiudadSelected(newValue);
    }
    const handleSelectCityLabel = ({newValue}) => {
        setLabelCiudadSelected(newValue);
    }

    const handleAsignarRolService = async () => {
        await service.addRole({id:player.id, role:rolSelected});
        if(rolSelected === 'GOBERNADOR'){
            await service.assignCity({playerId:player.id, cityId:ciudadSelected.id})
        }
        disparoSettings({stompClient:stompClient});
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
                width:'30vw'
            }}
            >
                <Grid container direction={'column'}>
                    <Grid item>
                        {player?.username}
                    </Grid>
                    <Grid item>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Autocomplete
                                    disablePortal
                                    getOptionLabel={(option) => option}
                                    options={roles}
                                    value={rolSelected}
                                    onChange={(event, newValue) => {
                                        handleSelectRol({newValue: newValue});
                                    }}
                                    inputValue={labelRolSelected}
                                    onInputChange={(event, newInputValue) => {
                                        handleLabelSelectRol({newValue: newInputValue});
                                    }}
                                    renderInput={(params) => <TextField {...params} label="Roles"/>}
                                />
                            </Grid>
                            {rolSelected === 'GOBERNADOR' &&
                                <Grid item xs={6}>
                                    <Autocomplete
                                        disablePortal
                                        getOptionLabel={(option) => option.nombre}
                                        options={cities || []}
                                        value={ciudadSelected}
                                        onChange={(event, newValue) => {
                                            handleSelectCity({newValue: newValue});
                                        }}
                                        inputValue={labelCiudadSelected}
                                        onInputChange={(event, newInputValue) => {
                                            handleSelectCityLabel({newValue: newInputValue});
                                        }}
                                        renderInput={(params) => <TextField {...params} label="Ciudades"/>}
                                    />
                                </Grid>
                            }
                            <Grid item xs={12}>
                                <Button onClick={handleAsignarRolService}
                                        size="small" variant='contained'
                                        color={'error'} fullWidth>
                                    Asignar Rol
                                </Button>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

            </Box>
        </Modal>
    );
};

export default AddRoleModal;