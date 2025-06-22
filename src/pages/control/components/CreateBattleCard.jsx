import React, {useContext, useState} from 'react';
import {Autocomplete, Button, Grid, TextField} from "@mui/material";
import {ControlContext} from "../Context.jsx";
import useWebSocket from "../../../hooks/useWebSocket.jsx";
import service from "../Service.js";

const CreateBattleCard = ({playerId}) => {

    const {stompClient} = useContext(ControlContext);
    const {disparoTodos} = useWebSocket({})

    const battleTypes = [
        'CARGA_DE_INFANTERIA',
        'FUEGO_DE_ARTILLERIA',
        'FLANQUEO_DE_CABALLERIA',
        'MOVIMIENTO_EN_PINZAS',
        'FALSA_RETIRADA',
        'REAGRUPAMIENTO',
        'ADAPTACION',
        'RETIRADA_ORDENADA'
    ];
    const [battleTypeSelected, setBattleTypeSelected] = useState('');

    const handleSelectBattleType = ({newValue}) => {
        setBattleTypeSelected(newValue);
    }
    const handleCrearNewBattleCard = async () => {
        await service.createNewBattleCard({battleType:battleTypeSelected, playerId:playerId});
        disparoTodos({stompClient:stompClient});
    }
    return (
        <Grid item container spacing={2}>
            <Grid item xs={8}>
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
            <Grid item xs={4}>
                <Button onClick={handleCrearNewBattleCard}
                        size="small" variant='contained' color='warning' fullWidth>
                    Crear
                </Button>
            </Grid>
        </Grid>
    );
};

export default CreateBattleCard;