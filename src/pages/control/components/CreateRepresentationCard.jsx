import React, {useContext, useState} from 'react';
import {Autocomplete, Button, Grid, TextField} from "@mui/material";
import {ControlContext} from "../Context.jsx";
import service from "../Service.js";
import useWebSocket from "../../../hooks/useWebSocket.jsx";

const CreateRepresentationCard = ({playerId}) => {

    const {gameData, stompClient} = useContext(ControlContext);
    const {disparoGobernadores, disparoRevolucionarios, disparoControl} = useWebSocket({});

    const [citySelected, setCitySelected] = useState({});
    const [labelCitySelected, setLabelCitySelected] = useState('');
    const handleSelectCity = ({newValue}) => {
        setCitySelected(newValue);
    }
    const handleSelectCityLabel = ({newValue}) => {
        setLabelCitySelected(newValue);
    }
    const handleCrearNewRepresentationCard = async () => {
        await service.createNewRepresentationCard({playerId:playerId,
                                                                cityName:citySelected.name,
                                                                cityId:citySelected.id});
        disparoGobernadores({stompClient:stompClient});
        disparoRevolucionarios({stompClient:stompClient});
        disparoControl({stompClient:stompClient});
    }

    return (
        <Grid item container spacing={2}>
            <Grid item={8}>
                <Autocomplete
                    disablePortal
                    getOptionLabel={(option) => option.name || ''}
                    options={gameData?.gameRegions?.flatMap(r => r.subregions).filter(sr => sr.city !== null)?.flatMap(sr => sr.city)}
                    value={citySelected}
                    onChange={(event, newValue) => {
                        handleSelectCity({newValue: newValue});
                    }}
                    inputValue={labelCitySelected}
                    clearIcon={null}
                    onInputChange={(event, newInputValue) => {
                        handleSelectCityLabel({newValue:newInputValue});
                    }}
                    renderInput={(params) => <TextField {...params} label="Ciudad"/>}
                />
            </Grid>
            <Grid item={4}>
                <Button onClick={handleCrearNewRepresentationCard}
                        size="small" variant='contained' color='warning' fullWidth>
                    Crear
                </Button>
            </Grid>
        </Grid>
    );
};

export default CreateRepresentationCard;