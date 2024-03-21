import React, {useContext, useState} from 'react';
import {Autocomplete, Box, Button, Grid, Modal, TextField, Typography} from "@mui/material";
import BuildingCard from "../../../../common/BuildingCard.jsx";
import {ControlContext} from "../../../Context.jsx";
import service from "../../../Service.js";
import SingleAttributeEdit from "../../SingleAttributeEdit.jsx";

const CiudadModal = ({nombreJugador, rolJugador, idJugador, ciudad, handleClose, open}) => {

    const {gameData} = useContext(ControlContext);

    //Service grabar
    const handleEditarCiudadService = () => {

        const body = {};
        if(marketValueChanged){
            body.marketLevel = newMarketLevelValue;
        }
        if(publicOpinionValueChanged){
            body.publicOpinion = newPublicOpinionValue;
        }
        if(taxesLevelValueChanged){
            body.taxesLevel = newTaxesLevelValue;
        }
        if(prestigeValueChanged){
            body.prestige = newPrestigeValue;
        }
        service.editarCiudad({gobernadorId:idJugador, body:body});

        //GRABAR DIPUTADO POR OTRO ENDPOINT
        if(diputadoChanged){
            service.assignDiputado({revolucionariodId:revolucionarioSelected.id, cityId:ciudad.id});
        }
    }


    //Nivel de Mercado
    const [newMarketLevelValue, setNewMarketLevelValue] = useState(ciudad.marketLevel);
    const [marketValueChanged, setMarketValueChanged] = useState(false);

    const handleNewMarketLevelValue = (e) => {
        setNewMarketLevelValue(e.target.value);
        setMarketValueChanged(ciudad.marketLevel !== e.target.value)
    }
    //Opinión Pública
    const [newPublicOpinionValue, setNewPublicOpinionValue] = useState(ciudad.publicOpinion);
    const [publicOpinionValueChanged, setPublicOpinionValueChanged] = useState(false);

    const handleNewPublicOpinionValue = (e) => {
        setNewPublicOpinionValue(e.target.value);
        setPublicOpinionValueChanged(ciudad.publicOpinion !== e.target.value);
    }
    //Nivel de Impuestos
    const [newTaxesLevelValue, setNewTaxesLevelValue] = useState(ciudad.taxesLevel);
    const [taxesLevelValueChanged, setTaxesLevelValueChanged] = useState(false);

    const handleNewTaxesLevelValue = (e) => {
        setNewTaxesLevelValue(e.target.value);
        setTaxesLevelValueChanged(ciudad.taxesLevel !== e.target.value);
    }
    //Prestigio
    const [newPrestigeValue, setNewPrestigeValue] = useState(ciudad.prestige);
    const [prestigeValueChanged, setPrestigeValueChanged] = useState(false);

    const handleNewPrestigeValue = (e) => {
        setNewPrestigeValue(e.target.value);
        setPrestigeValueChanged(ciudad.prestige !== e.target.value);
    }

    //Revolucionarios
    const [revolucionarioSelected, setRevolucionarioSelected] = useState(ciudad.diputado ? ciudad.diputado : '');
    const [labelRevolucionarioSelected, setLabelRevolucionarioSelected] = useState('')
    const [diputadoChanged, setDiputadoChanged] = useState(false);

    const handleRevolucionarioSelected = ({newValue}) => {
        setRevolucionarioSelected(newValue);
        setDiputadoChanged(ciudad.diputado !== newValue);
    }
    const handleLabelRevolucionarioSelected = ({newValue}) => {
        setLabelRevolucionarioSelected(newValue);
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
        service.removeBuilding({cityId:ciudad.id, buildingId:id});
    }
    const handleAddBuilding = () => {
        service.addBuilding({cityId:ciudad.id, buildingType:buildingTypeSelected.buildingType});
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
                                        <Grid item xs={3}>
                                            <TextField
                                                value="Diputado"
                                                type="text"
                                                label="Diputado"
                                                disabled={true}/>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                value={ciudad?.diputado}
                                                label="Diputado actual"
                                                disabled={true}/>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Autocomplete
                                                disablePortal
                                                getOptionLabel={(option) => option.playerName ? option.playerName : ''}
                                                options={gameData.playersData?.filter(p => p.rol === 'REVOLUCIONARIO')}
                                                value={revolucionarioSelected}
                                                onChange={(event, newValue) => {
                                                    handleRevolucionarioSelected(newValue);
                                                }}
                                                inputValue={labelRevolucionarioSelected}
                                                onInputChange={(event, newInputValue) => {
                                                    handleLabelRevolucionarioSelected(newInputValue);
                                                }}
                                                renderInput={(params) => <TextField {...params} label="Revolucionarios"/>}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <SingleAttributeEdit nombre={"Nivel de mercados"}
                                                             valorActual={ciudad?.marketLevel}
                                                             handleActualizar={handleNewMarketLevelValue} />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <SingleAttributeEdit nombre={"Opinión pública"}
                                                             valorActual={ciudad?.publicOpinion}
                                                             handleActualizar={handleNewPublicOpinionValue} />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <SingleAttributeEdit nombre={"Nivel de impuestos"}
                                                             valorActual={ciudad?.taxesLevel}
                                                             handleActualizar={handleNewTaxesLevelValue} />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <SingleAttributeEdit nombre={"Prestigio"}
                                                             valorActual={"Valor Actual"}
                                                             handleActualizar={handleNewPrestigeValue} />
                                    </Grid>
                                </Grid>

                                <Grid item xs={12}>
                                    <Button onClick={handleEditarCiudadService}
                                            size="small" variant='contained' color='warning' fullWidth>
                                        GRABAR CAMBIOS</Button>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/*Buildings*/}
                        <Grid container spacing={2}>
                            {/*Remove*/}
                            {ciudad?.buildings?.map((building) => (
                                <Grid item xs={12}>
                                    <BuildingCard key={building?.id} building={building}/>
                                    <Button onClick={() => handleRemoveBuilding(building?.id)}
                                            size="small" variant='contained' color='warning' fullWidth>---</>
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