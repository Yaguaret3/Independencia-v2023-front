import React, {useContext, useState} from 'react';
import {Autocomplete, Box, Button, Grid, Modal, TextField, Typography} from "@mui/material";
import BuildingCard from "../../../../common/BuildingCard.jsx";
import {ControlContext} from "../../../Context.jsx";
import service from "../../../Service.js";
import SingleAttributeEdit from "../../SingleAttributeEdit.jsx";

const CiudadModal = ({nombreJugador, rolJugador, idJugador, ciudad, handleClose, open}) => {

    const {gameData} = useContext(ControlContext);

    //Nivel de Mercado
    const handleNewMarketLevelValue = (e) => {
        const body = {};
        body.marketLevel = e.target.value;
        service.editarCiudad({gobernadorId: idJugador, body: body});
    }
    //Opinión Pública
    const handleNewPublicOpinionValue = (e) => {
        const body = {};
        body.publicOpinion = e.target.value;
        service.editarCiudad({gobernadorId: idJugador, body: body});
    }
    //Nivel de Impuestos
    const handleNewTaxesLevelValue = (e) => {
        const body = {};
        body.taxesLevel = e.target.value;
        service.editarCiudad({gobernadorId:idJugador, body:body});
    }
    //Prestigio
    const handleNewPrestigeValue = (e) => {
        const body = {};
        body.prestige = e.target.value;
        service.editarCiudad({gobernadorId:idJugador, body:body});
    }

    //Revolucionarios
    const [revolucionarioSelected, setRevolucionarioSelected] = useState({rol:''});
    const [labelRevolucionarioSelected, setLabelRevolucionarioSelected] = useState('')
    const [diputadoChanged, setDiputadoChanged] = useState(false);

    const handleRevolucionarioSelected = ({newValue}) => {
        debugger
        setRevolucionarioSelected(newValue);
        setDiputadoChanged(ciudad.diputado !== newValue);
    }
    const handleLabelRevolucionarioSelected = ({newValue}) => {
        setLabelRevolucionarioSelected(newValue);
    }
    const handleUpdateRevolucionario = () => {
        service.assignDiputado({revolucionariodId:diputadoChanged.id, cityId:ciudad.id})
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
    const handleRemoveBuilding = ({id}) => {
        service.removeBuilding({cityId: ciudad.id, buildingId: id});
    }
    const handleAddBuilding = () => {
        service.addBuilding({cityId: ciudad.id, buildingType: buildingTypeSelected.buildingType});
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
                    <Grid container spacing={2}>
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
                            <TextField disabled={'true'} label={"Username"} fullWidth value={ciudad?.name}
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
                                                    handleRevolucionarioSelected({newValue:newValue});
                                                }}
                                                inputValue={labelRevolucionarioSelected}
                                                onInputChange={(event, newInputValue) => {
                                                    handleLabelRevolucionarioSelected({newValue:newInputValue});
                                                }}
                                                renderInput={(params) => <TextField {...params}
                                                                                    label="Revolucionarios"/>}
                                            />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Button onClick={handleUpdateRevolucionario}
                                                size="small" variant='contained' color='warning' fullWidth>Actualizar</Button>
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
                                                             valorActual={"Valor Actual"}
                                                             handleActualizar={handleNewPrestigeValue}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/*Buildings*/}
                        <Grid container spacing={2}>
                            {/*Remove*/}
                            {ciudad?.buildings?.map((building) => (
                                <Grid key={building?.id} item xs={12}>
                                    <BuildingCard  building={building}/>
                                    <Button onClick={() => handleRemoveBuilding(building?.id)}
                                            size="small" variant='contained' color='warning' fullWidth>---</Button>
                                </Grid>
                            ))}

                            {/*Add*/}
                            <Grid item xs={12}>
                                <Autocomplete
                                    disablePortal
                                    getOptionLabel={(option) => option.buildingType ? option.buildingType : ''}
                                    options={gameData.edificios}
                                    value={buildingTypeSelected}
                                    onChange={(event, newValue) => {
                                        handleBuildingTypeSelected(newValue);
                                    }}
                                    inputValue={labelBuildingTypeSelected}
                                    onInputChange={(event, newInputValue) => {
                                        handleLabelBuildingTypeSelected(newInputValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} label="Edificios"/>}
                                />
                                <Button onClick={handleAddBuilding}
                                        size="small" variant='contained' color='warning' fullWidth/>
                            </Grid>
                        </Grid>

                    </Grid>
                </Box>
            </Modal>
        </>
    );
};

export default CiudadModal;