import React, {useContext, useState} from 'react';
import {Autocomplete, Button, Grid, TextField} from "@mui/material";
import {ControlContext} from "../Context.jsx";
import service from "../Service.js";
import useWebSocket from "../../../hooks/useWebSocket.jsx";

const CreateMarketCard = ({playerId}) => {

    const {gameData, stompClient} = useContext(ControlContext);
    const {disparoTodos} = useWebSocket({});

    const [citySelected, setCitySelected] = useState({});
    const [labelCitySelected, setLabelCitySelected] = useState('');
    const handleSelectCity = ({newValue}) => {
        setCitySelected(newValue);
    }
    const handleSelectCityLabel = ({newValue}) => {
        setLabelCitySelected(newValue);
    }
    const [nivel, setNivel] = useState(1);
    const handleChangeNivel = (e) => {
        setNivel(e.target.value);
    }
    const handleCrearNewMarketCard = async () => {
        await service.createNewMarketCard({playerId:playerId, cityName:citySelected.name, level:nivel});
        disparoTodos({stompClient:stompClient});
    }

    return (
        <>
            <Grid item xs={6}>
                <Autocomplete
                    disablePortal
                    getOptionLabel={(option) => option.name || ''}
                    options={gameData?.gameRegions?.flatMap(r => r.subregions).filter(sr => sr.city !== null)?.flatMap(sr => sr.city)}
                    value={citySelected}
                    onChange={(event, newValue) => {
                        handleSelectCity({newValue: newValue});
                    }}
                    inputValue={labelCitySelected}
                    onInputChange={(event, newInputValue) => {
                        handleSelectCityLabel({newValue:newInputValue});
                    }}
                    renderInput={(params) => <TextField {...params} label="Ciudad"/>}
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    size='small'
                    value={nivel}
                    label={'Nivel'}
                    onChange={handleChangeNivel}
                >
                </TextField>
            </Grid>
            <Grid item xs={3}>
                <Button onClick={handleCrearNewMarketCard}
                        size="small" variant='contained' color='warning' >
                    Crear
                </Button>
            </Grid>
        </>
    );
};

export default CreateMarketCard;