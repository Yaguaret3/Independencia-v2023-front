import React, {useContext, useState} from 'react';
import {Autocomplete, Button, Grid, TextField} from "@mui/material";
import {ControlContext} from "../Context.jsx";
import service from "../Service.js";

const CreateMarketCard = ({playerId}) => {

    const {gameData} = useContext(ControlContext);

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
    const handleCrearNewMarketCard = () => {
        service.createNewMarketCard({playerId:playerId, cityName:citySelected.name, level:nivel});
    }

    return (
        <>
            <Grid item={6}>
                <Autocomplete
                    disablePortal
                    getOptionLabel={(option) => option.name}
                    options={gameData?.gameRegions?.subRegions?.filter(sr => sr.city !== null)?.city}
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
            <Grid item={3}>
                <TextField
                    size='small'
                    value={nivel}
                    label={'Nivel'}
                    onChange={handleChangeNivel}
                >
                </TextField>
            </Grid>
            <Grid item={3}>
                <Button onClick={handleCrearNewMarketCard}
                        size="small" variant='contained' color='warning' >>
                    Crear
                </Button>
            </Grid>
        </>
    );
};

export default CreateMarketCard;