import React, {useContext, useEffect, useState} from 'react';
import {Autocomplete, Box, Button, Grid, Modal, TextField, Typography} from "@mui/material";
import MarketCard from "../../../common/MarketCard.jsx";
import service from "../../Service.js"
import {MercaderContext} from "../../Context.jsx";
import useWebSocket from "../../../../hooks/useWebSocket.jsx";

const PlanificarRutaComercialModal = ({ open, handleClose}) => {

    const {disparoControl, disparoMercaderes} = useWebSocket({});

    const { playerData, gameData, stompClient } = useContext(MercaderContext)

    const [allSubregions, setAllSubregions] = useState([])


    const [subregionsSelected, setSubregionsSelected] = useState([{}]);
    const [subregionsAdjacent, setSubregionsAdjacent] = useState([[{}]])
    const [labelSubregionSelected, setLabelSubregionSelected] = useState([""]);

    const [marketsInUse, setMarketsInUse] = useState([]);


    useEffect(() => {

        let allSubregionList = gameData?.gameRegions?.flatMap(r => r.subregions);
        allSubregionList?.sort((a,b) => (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0));

        setAllSubregions(allSubregionList);

        let initialSubregions = allSubregionList?.filter(s => playerData?.mercados.some(m => m.cityName === s?.nombre));
        setSubregionsAdjacent([initialSubregions]);
        setMarketsInUse(playerData?.mercados)
    }, [playerData])

    const handleCloseSelf = () => {

        let allSubregionList = gameData?.gameRegions?.flatMap(r => r.subregions);
        allSubregionList?.sort((a,b) => (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0));
        allSubregionList?.forEach(s => s.isSelected = false);
        setAllSubregions(allSubregionList);

        let initialSubregions = allSubregionList?.filter(s => playerData?.mercados.some(m => m.cityName === s?.nombre));
        setSubregionsAdjacent([initialSubregions]);

        setSubregionsSelected([{}]);
        setLabelSubregionSelected([""]);

        marketsInUse.forEach(m => m.isSelected = false);

        handleClose();
    }

    const handleLabelSubregionSelected = (newValue, index) => {

        const newLabelsSelected = [...labelSubregionSelected];
        newLabelsSelected[index] = newValue;
        if(index === labelSubregionSelected.length-1){
            newLabelsSelected.push("");
        }
        setLabelSubregionSelected(newLabelsSelected);
    }
    const handleSubregionSelected = (newValue, index) => {

        const trueNewValue = allSubregions.find((s) => s.nombre === newValue.nombre)

        const newSubregionsSelected = [...subregionsSelected];
        newSubregionsSelected[index] = trueNewValue;
        if(index === subregionsSelected.length-1){
            newSubregionsSelected.push({})
        }
        setSubregionsSelected(newSubregionsSelected);

        const newSubregionsAdjacent = [...subregionsAdjacent];
        newSubregionsAdjacent[index+1] = trueNewValue.adjacent;
        if(index === newSubregionsAdjacent.length){
            newSubregionsAdjacent.push(trueNewValue.adjacent);
        }
        setSubregionsAdjacent(newSubregionsAdjacent);

        marketsInUse.find(mr => mr.cityName === newValue.nombre).isSelected = true;

    };

    const handleDelButton = () => {

        const oldValue = subregionsSelected[subregionsSelected.length-2];

        const newLabelsSelected = [...labelSubregionSelected];
        newLabelsSelected.pop();
        setLabelSubregionSelected(newLabelsSelected);

        const newSubregionsSelected = [...subregionsSelected];
        newSubregionsSelected.pop()
        setSubregionsSelected(newSubregionsSelected);

        const newSubregionsAdjacent = [...subregionsAdjacent];
        newSubregionsAdjacent.pop()
        setSubregionsAdjacent(newSubregionsAdjacent);

        marketsInUse.find(mr => mr.cityName === oldValue.nombre).isSelected = false;
        console.log("Hola")
    }

    const handleSendButton = async () => {

        await service.playTradeRoute({subregionsSelected: subregionsSelected, marketsSelected : marketsInUse.filter(m => m.isSelected)})
        disparoControl({stompClient:stompClient});
        disparoMercaderes({stompClient:stompClient});
        handleClose();
    }

    return (
        <Modal open={open} onClose={handleCloseSelf}>
            <Box sx={{
                position: 'absolute',
                top: '50vh',
                left: '50vw',
                width: "50vw",
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                borderRadius: 3
            }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography textAlign={'center'}>
                            Planificar ruta comercial
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container>
                            <Typography textAlign={'center'}>
                                Subregiones
                            </Typography>
                            {subregionsSelected?.map((subregion, index) => {
                                return(
                                    <>
                                        {(index !== subregionsSelected.length-1 || index === 0) ?
                                            <Grid item xs={12}>
                                                <Autocomplete
                                                    readOnly={index !== subregionsSelected.length-1}
                                                    disablePortal
                                                    getOptionLabel={(option) => option.nombre || ''}
                                                    options={subregionsAdjacent[index]}
                                                    value={subregionsSelected[index]}
                                                    onChange={(event, newValue) => {
                                                        handleSubregionSelected(newValue, index);
                                                    }}
                                                    inputValue={labelSubregionSelected[index]}
                                                    onInputChange={(event, newInputValue) => {
                                                        handleLabelSubregionSelected(newInputValue, index);
                                                    }}
                                                    renderInput={(params) => <TextField {...params} label="Subregión" />}
                                                />
                                            </Grid>

                                            :
                                            <>
                                                <Grid item xs={9}>
                                                    <Autocomplete
                                                        readOnly={index !== subregionsSelected.length-1}
                                                        disablePortal
                                                        getOptionLabel={(option) => option.nombre ? option.nombre : ''}
                                                        options={subregionsAdjacent[index]}
                                                        value={subregionsSelected[index]}
                                                        onChange={(event, newValue) => {
                                                            handleSubregionSelected(newValue, index);
                                                        }}
                                                        inputValue={labelSubregionSelected[index]}
                                                        onInputChange={(event, newInputValue) => {
                                                            handleLabelSubregionSelected(newInputValue, index);
                                                        }}
                                                        renderInput={(params) => <TextField {...params} label="Subregión" />}
                                                    />
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <Button onClick={() => handleDelButton()} size="large" variant='outlined' color='error' fullWidth>DEL</Button>
                                                </Grid>
                                            </>
                                        }
                                    </>
                                )})}
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography textAlign={'center'}>
                            Mercados a utilizar
                        </Typography>
                        {subregionsSelected?.map((subregion, index) => {

                            const m = marketsInUse?.find(mr => mr.cityName === subregion.nombre)
                            return index !== subregionsSelected.length-1 &&
                                (m?.isSelected ?
                                    (<Grid item xs={12}>
                                        <MarketCard level={m.level} cityName={m.cityName}/>
                                    </Grid>)
                                    :
                                    (<Grid item xs={12}>
                                        <MarketCard level={""} cityName={""}/>
                                </Grid>))}
                        )}
                    </Grid>
                    <Grid item xs={4}>
                        <Typography textAlign={'center'}>
                            Mercados disponibles
                        </Typography>
                        {marketsInUse?.map((market) => {
                            if(!market.isSelected){
                                return (
                                    <Grid item xs={12}>
                                        <MarketCard level={market.level} cityName={market.cityName}/>
                                    </Grid>
                                )}
                            }
                        )}
                    </Grid>
                    <Button onClick={handleSendButton} size="medium" variant='contained' color='warning' fullWidth>Enviar planificación comercial</Button>
                </Grid>
            </Box>
        </Modal>
    );
};

export default PlanificarRutaComercialModal;