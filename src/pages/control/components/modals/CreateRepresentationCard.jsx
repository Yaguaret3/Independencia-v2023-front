import React, {useContext, useState} from 'react';
import {Autocomplete, Button, Grid, TextField} from "@mui/material";
import {ControlContext} from "../../Context.jsx";
import service from "../../Service.js";

const CreateRepresentationCard = ({playerId}) => {

    const {gameData} = useContext(ControlContext);

    const [citySelected, setCitySelected] = useState({});
    const [labelCitySelected, setLabelCitySelected] = useState('');
    const handleSelectCity = ({newValue}) => {
        setCitySelected(newValue);
    }
    const handleSelectCityLabel = ({newValue}) => {
        setLabelCitySelected(newValue);
    }
    const handleCrearNewRepresentationCard = () => {
        service.createNewRepresentationCard({});
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
            <Grid item={6}>
                <Button onClick={handleCrearNewRepresentationCard}
                        size="small" variant='contained' color='warning' >>
                    Crear
                </Button>
            </Grid>
        </>
    );
};

export default CreateRepresentationCard;