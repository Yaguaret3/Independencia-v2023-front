import React, {useContext, useEffect, useState} from 'react';
import {Autocomplete, Box, Button, Grid, Modal, TextField} from "@mui/material";
import {ControlContext} from "../../../Context.jsx";
import service from "../../../Service.js";
import useWebSocket from "../../../../../hooks/useWebSocket.jsx";

const CrearCongresoModal = ({handleClose, open}) => {

    const {gameData, stompClient} = useContext(ControlContext);
    const {disparoTodos} = useWebSocket({});

    const [ciudades, setCiudades] = useState([]);
    const [diputadosNoSelected, setDiputadosNoSelected] = useState([]);
    const [diputadosSelected, setDiputadosSelected] = useState([])

    useEffect(() => {

        if(gameData.playersData !== undefined){
            setDiputadosNoSelected(gameData?.playersData?.filter(p => p.rol === "REVOLUCIONARIO")?.slice());
            setCiudades(gameData?.gameRegions?.flatMap(r => r.subregions).filter(sr => sr.city !== null).flatMap(sr => sr.city)?.slice());
        }

    }, [gameData]);

    const [sedeSelected, setSedeSelected] = useState({});
    const [labelSedeSelected, setLabelSedeSelected] = useState('');
    const handleSelectSede = ({newValue}) => {
        setSedeSelected(newValue);
    }
    const handleSelectLabelSede = ({newValue}) => {
        setLabelSedeSelected(newValue);
    }
    const [diputadoSelected, setDiputadoSelected] = useState({});
    const [labelDiputadoSelected, setLabelDiputadoSelected] = useState('');
    const handleSelectDiputado = ({newValue}) => {
        setDiputadoSelected(newValue);
    }
    const handleLabelSelectDiputado = ({newValue}) => {
        setLabelDiputadoSelected(newValue);
    }
    const handleAgregarDiputado = () => {

        let newDiputadosSelected = [...diputadosSelected];
        newDiputadosSelected.push(diputadoSelected);
        setDiputadosSelected(newDiputadosSelected);

        let newDiputadosNoSelected = [...diputadosNoSelected]
        const index = newDiputadosNoSelected.indexOf(diputadoSelected);
        if (index > -1) { // only splice array when item is found
            newDiputadosNoSelected.splice(index, 1);
        }
        setDiputadosNoSelected(newDiputadosNoSelected);

        setDiputadoSelected({});
        setLabelDiputadoSelected('');
    }
    const handleQuitarDiputado = ({diputado}) => {

        let newDiputadosNoSelected = [...diputadosNoSelected];
        newDiputadosNoSelected.push(diputado);
        setDiputadosNoSelected(newDiputadosNoSelected);

        let newDiputadosSelected = [...diputadosSelected]
        const index = newDiputadosSelected.indexOf(diputado);
        if (index > -1) { // only splice array when item is found
            newDiputadosSelected.splice(index, 1);
        }
        setDiputadosSelected(newDiputadosSelected);

        if(presidente === diputado){
            setPresidente({});
            setLabelPresidente('');
        }

        setDiputadoSelected({});
        setLabelDiputadoSelected('');
    }
    const [plata, setPlata] = useState(0);
    const [milicias, setMilicia] = useState(0);

    const handlePlata = (e) => {
        setPlata(e.target.value);
    }
    const handleMilicias = (e) => {
        setMilicia(e.target.value);
    }
    const [presidente, setPresidente] = useState({});
    const [labelPresidente, setLabelPresidente] = useState('');
    const handleSelectPresidente = ({newValue}) => {
        setPresidente(newValue)
    }
    const handleLabelSelectPresidente = ({newValue}) => {
        setLabelPresidente(newValue)
    }
    const handleCrearCongreso = async () => {
        await service.createNewCongress({
            presidente:presidente.id,
            plata:plata,
            milicia:milicias,
            sede:sedeSelected.id,
            diputados:diputadosSelected.map(d => d.id)
        })
        disparoTodos({stompClient:stompClient});
    }

    return (
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
            }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        Nuevo Congreso
                    </Grid>
                    <Grid item xs={12}>
                        Diputados
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={7}>
                                <Autocomplete
                                    disablePortal
                                    getOptionLabel={(option) => option.username ? option.username : ''}
                                    options={diputadosNoSelected}
                                    value={diputadoSelected}
                                    onChange={(event, newOption) => {
                                        handleSelectDiputado({newValue: newOption});
                                    }}
                                    inputValue={labelDiputadoSelected}
                                    onInputChange={(event, newInputValue) => {
                                        handleLabelSelectDiputado({newValue: newInputValue});
                                    }}
                                    renderInput={(params) => <TextField {...params} label="Diputados"/>}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Button onClick={handleAgregarDiputado}
                                        size="small" variant='contained' color='warning' fullWidth
                                        disabled={diputadoSelected.username === undefined}>=></Button>
                            </Grid>
                            <Grid item xs={3}>
                                {diputadosSelected?.map(d => {
                                    return <Grid container key={d.id}>
                                        <Grid item xs={9}>
                                            {d.username}
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button onClick={() => handleQuitarDiputado({diputado:d})}
                                                    size="small" variant='contained' color='warning' fullWidth>
                                                --- </Button>
                                        </Grid>
                                    </Grid>
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Autocomplete
                            disablePortal
                            getOptionLabel={(option) => option.name ? option.name : ''}
                            options={ciudades}
                            value={sedeSelected}
                            onChange={(event, newOption) => {
                                handleSelectSede({newValue: newOption});
                            }}
                            inputValue={labelSedeSelected}
                            onInputChange={(event, newInputValue) => {
                                handleSelectLabelSede({newValue: newInputValue});
                            }}
                            renderInput={(params) => <TextField {...params} label="Sede"/>}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Autocomplete
                            disablePortal
                            getOptionLabel={(option) => option.username ? option.username : ''}
                            options={diputadosSelected}
                            value={presidente}
                            onChange={(event, newOption) => {
                                handleSelectPresidente({newValue: newOption});
                            }}
                            inputValue={labelPresidente}
                            onInputChange={(event, newInputValue) => {
                                handleLabelSelectPresidente({newValue: newInputValue});
                            }}
                            renderInput={(params) => <TextField {...params} label="Presidente"/>}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField onBlur={handlePlata}
                                   type={"number"}
                                   fullWidth
                                   placeholder={"Plata"}
                                   variant={"standard"}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField onBlur={handleMilicias}
                                   type={"number"}
                                   fullWidth
                                   placeholder={"Milicias"}
                                   variant={"standard"}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={handleCrearCongreso}
                                size="small" variant='contained' color='warning' fullWidth>
                            Crear </Button>
                    </Grid>

                </Grid>
            </Box>
        </Modal>

    );
};

export default CrearCongresoModal;