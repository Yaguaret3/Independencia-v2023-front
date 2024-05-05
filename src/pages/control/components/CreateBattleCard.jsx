import React, {useContext, useState} from 'react';
import {Autocomplete, Button, Grid, TextField} from "@mui/material";
import {ControlContext} from "../Context.jsx";
import useWebSocket from "../../../hooks/useWebSocket.jsx";
import service from "../Service.js";

const CreateBattleCard = ({playerId}) => {

    const {stompClient} = useContext(ControlContext);
    const {disparoTodos} = useWebSocket({})

    const battleTypes = ['CARGA_DE_INFANTERIA'];
    const [battleTypeSelected, setBattleTypeSelected] = useState('');

    const handleSelectBattleType = ({newValue}) => {
        setBattleTypeSelected(newValue);
    }
    const handleCrearNewBattleCard = async () => {
        await service.createNewBattleCard({battleType:battleTypeSelected, playerId:playerId});
        disparoTodos({stompClient:stompClient});
    }
    return (
        <>
            <Grid item xs={6}>
                <Autocomplete
                    disablePortal
                    getOptionLabel={(option) => option}
                    options={battleTypes}
                    value={battleTypeSelected}
                    onChange={(event, newValue) => {
                        handleSelectBattleType({newValue: newValue});
                    }}
                    inputValue={battleTypeSelected}
                    renderInput={(params) => <TextField {...params} label="Orden de batalla"/>}
                />
            </Grid>
            <Grid item xs={6}>
                <Button onClick={handleCrearNewBattleCard}
                        size="small" variant='contained' color='warning' >
                    Crear
                </Button>
            </Grid>
        </>
    );
};

export default CreateBattleCard;