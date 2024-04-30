import React, {useContext, useState} from 'react';
import {Button, Grid, TextareaAutosize, TextField} from "@mui/material";
import service from "../Service.js";
import useWebSocket from "../../../hooks/useWebSocket.jsx";
import {ControlContext} from "../Context.jsx";

const CreateExtraCard = ({playerId}) => {

    const {stompClient} = useContext(ControlContext);
    const {disparoTodos} = useWebSocket({});

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [bonificacion, setBonificacion] = useState('');

    const handleNombre = (e) => {
        setNombre(e.target.value);
    }
    const handleDescripcion = (e) => {
        setDescripcion(e.target.value);
    }
    const handleBonificacion = (e) => {
        setBonificacion(e.target.value);
    }

    const handleCrear = async () => {
        await service.createNewExtraCard({playerId:playerId,
                                                                    nombre:nombre,
                                                                    descripcion:descripcion,
                                                                    bonificacion:bonificacion})
        disparoTodos({stompClient:stompClient});
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item={12}>
                    <TextField
                        value = {nombre}
                        type = "text"
                        label = "Nombre"
                        onChange = {handleNombre} />
                </Grid>
                <Grid item={12}>
                    <TextareaAutosize aria-label={'Descripción'}
                                      style={{width: "100%"}}
                                      value={descripcion}
                                      onChange={handleDescripcion}/>
                </Grid>
                <Grid item={12}>
                    <TextareaAutosize aria-label={'Bonificación'}
                                      style={{width: "100%"}}
                                      value={bonificacion}
                                      onChange={handleBonificacion}/>
                </Grid>
            </Grid>
            <Grid item={12}>
                <Button onClick={handleCrear}
                        size="small" variant='contained' color='warning' >
                    Crear
                </Button>
            </Grid>
        </>
    );
};

export default CreateExtraCard;