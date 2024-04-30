import React, {useContext, useState} from 'react';
import {Autocomplete, Box, Button, Grid, Modal, TextField, Typography} from "@mui/material";
import BuildingCard from "../../../../common/BuildingCard.jsx";
import {ControlContext} from "../../../Context.jsx";
import service from "../../../Service.js";
import SingleAttributeEdit from "../../SingleAttributeEdit.jsx";
import useWebSocket from "../../../../../hooks/useWebSocket.jsx";

const CiudadModal = ({nombreJugador, rolJugador, ciudad, handleClose, open}) => {

    const {gameData, stompClient} = useContext(ControlContext);

    //Websockets
    const {disparoGobernadores, disparoControl} = useWebSocket({});

    //Nivel de Mercado
    const handleNewMarketLevelValue = async ({newValue}) => {
        const body = {};
        body.marketLevel = newValue;
        await service.editarCiudad({ciudadId: ciudad.id, body: body});
        disparoGobernadores({stompClient: stompClient});
        disparoControl({stompClient: stompClient});
    }
    //Opinión Pública
    const handleNewPublicOpinionValue = async ({newValue}) => {
        const body = {};
        body.publicOpinion = newValue;
        await service.editarCiudad({ciudadId: ciudad.id, body: body});
        disparoGobernadores({stompClient: stompClient});
        disparoControl({stompClient: stompClient});
    }
    //Nivel de Impuestos
    const handleNewTaxesLevelValue = async ({newValue}) => {
        const body = {};
        body.taxesLevel = newValue;
        await service.editarCiudad({ciudadId: ciudad.id, body: body});
        disparoGobernadores({stompClient: stompClient});
        disparoControl({stompClient: stompClient});
    }
    //Prestigio
    const handleNewPrestigeValue = async ({newValue}) => {
        const body = {};
        body.prestige = newValue;
        await service.editarCiudad({ciudadId: ciudad.id, body: body});
        disparoGobernadores({stompClient: stompClient});
        disparoControl({stompClient: stompClient});
    }

    //Revolucionarios
    const [revolucionarioSelected, setRevolucionarioSelected] = useState({rol: ''});
    const [labelRevolucionarioSelected, setLabelRevolucionarioSelected] = useState('')
    const [diputadoChanged, setDiputadoChanged] = useState(false);

    const handleRevolucionarioSelected = async ({newValue}) => {
        setRevolucionarioSelected(newValue);
        setDiputadoChanged(ciudad.diputado !== newValue);
    }
    const handleLabelRevolucionarioSelected = async ({newValue}) => {
        setLabelRevolucionarioSelected(newValue);
    }
    const handleUpdateRevolucionario = async () => {
        await service.assignDiputado({revolucionariodId: revolucionarioSelected.id, cityId: ciudad.id});
        disparoGobernadores({stompClient: stompClient});
        disparoControl({stompClient: stompClient});

    }

    //Edificios
    const [buildingTypeSelected, setBuildingTypeSelected] = useState({});
    const [labelBuildingTypeSelected, setLabelBuildingTypeSelected] = useState('')

    const handleBuildingTypeSelected = ({newValue}) => {
        setBuildingTypeSelected(newValue);
    }
    const handleLabelBuildingTypeSelected = ({newValue}) => {
        setLabelBuildingTypeSelected(newValue);
    }
    const handleRemoveBuilding = async ({id}) => {
        await service.removeBuilding({cityId: ciudad.id, buildingId: id});
        disparoGobernadores({stompClient: stompClient});
        disparoControl({stompClient: stompClient});
    }
    const handleAddBuilding = async () => {
        await service.addBuilding({cityId: ciudad.id, buildingType: buildingTypeSelected.buildingType});
        disparoGobernadores({stompClient: stompClient});
        disparoControl({stompClient: stompClient});
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
                }}>
                    <Grid container spacing={12}>
                        <Grid item xs={6}>
                            <Typography>Username</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField disabled={'true'} label={"Username"} fullWidth value={nombreJugador}
                                       variant={"standard"}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography>Rol</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField disabled={'true'} label={"Rol"} fullWidth value={rolJugador}
                                       variant={"standard"}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography>Ciudad</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField disabled={'true'} label={"Ciudad"} fullWidth value={ciudad?.name}
                                       variant={"standard"}/>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>

                        <Grid item xs={5}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={5}>
                                            <TextField
                                                value={ciudad?.diputado}
                                                label="Diputado actual"
                                                disabled={true}/>
                                        </Grid>
                                        <Grid item xs={5}>
                                            <Autocomplete
                                                disablePortal
                                                getOptionLabel={(option) => option.username ? option.username : ""}
                                                options={gameData.playersData?.filter(p => p.rol === 'REVOLUCIONARIO')}
                                                value={revolucionarioSelected}
                                                onChange={(event, newValue) => {
                                                    handleRevolucionarioSelected({newValue: newValue});
                                                }}
                                                inputValue={labelRevolucionarioSelected}
                                                onInputChange={(event, newInputValue) => {
                                                    handleLabelRevolucionarioSelected({newValue: newInputValue});
                                                }}
                                                renderInput={(params) => <TextField {...params}
                                                                                    label="Revolucionarios"/>}
                                            />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Button onClick={handleUpdateRevolucionario}
                                                    disabled={!diputadoChanged}
                                                    size="small" variant='contained' color='warning'
                                                    fullWidth>Actualizar</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <SingleAttributeEdit nombre={"Nivel de mercados"}
                                                             valorActual={ciudad?.marketLevel}
                                                             handleActualizar={handleNewMarketLevelValue}/>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <SingleAttributeEdit nombre={"Opinión pública"}
                                                             valorActual={ciudad?.publicOpinion}
                                                             handleActualizar={handleNewPublicOpinionValue}/>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <SingleAttributeEdit nombre={"Nivel de impuestos"}
                                                             valorActual={ciudad?.taxesLevel}
                                                             handleActualizar={handleNewTaxesLevelValue}/>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <SingleAttributeEdit nombre={"Prestigio"}
                                                             valorActual={ciudad?.prestige}
                                                             handleActualizar={handleNewPrestigeValue}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/*Buildings*/}
                        <Grid item xs={6}>
                            <Grid container spacing={2}>
                                {/*Remove*/}
                                {ciudad?.buildings?.map((building) => (
                                    <>
                                        <Grid key={building?.id} item xs={11}>
                                            <BuildingCard building={building}/>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <Button onClick={() => handleRemoveBuilding({id:building?.id})}
                                                    size="small" variant='contained' color='warning'
                                                    fullWidth>---</Button>
                                        </Grid>
                                    </>
                                ))}

                                {/*Add*/}
                                <Grid item xs={12}>
                                    <Autocomplete
                                        disablePortal
                                        getOptionLabel={(option) => option.buildingType ? option.buildingType : ''}
                                        options={gameData.edificios}
                                        value={buildingTypeSelected}
                                        onChange={(event, newValue) => {
                                            handleBuildingTypeSelected({newValue: newValue});
                                        }}
                                        inputValue={labelBuildingTypeSelected}
                                        onInputChange={(event, newInputValue) => {
                                            handleLabelBuildingTypeSelected({newValue: newInputValue});
                                        }}
                                        renderInput={(params) => <TextField {...params} label="Edificios"/>}
                                    />
                                    <Button onClick={handleAddBuilding}
                                            size="small" variant='contained' color='warning' fullWidth>
                                        Agregar Edificio
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>


                    </Grid>
                </Box>
            </Modal>
        </>
    );
};

export default CiudadModal;