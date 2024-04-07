import React, {useContext, useEffect, useState} from 'react';
import {Autocomplete, Button, Grid, TextField} from "@mui/material";
import {ControlContext} from "../../../Context.jsx";
import service from "../../../Service.js";

const CrearCongresoModal = () => {

    const {gameData} = useContext(ControlContext);

    const [ciudades, setCiudades] = useState([{}]);
    const [diputadosNoSelected, setDiputadosNoSelected] = useState([{}]);
    const [diputadosSelected, setDiputadosSelected] = useState([{}])

    useEffect(() => {
        setDiputadosNoSelected(Array.from(gameData?.playersData?.filter(p.rol === "REVOLUCIONARIO")));
        setCiudades(Array.from(gameData?.gameRegions?.subRegions?.filter(sr => sr.city !== null).city));

    }, []);

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

        setDiputadosSelected({...diputadoSelected, diputadoSelected});
        setDiputadosNoSelected(...diputadosNoSelected.map(d => {
            if(d.id !== diputadoSelected.id) return d;
        }))

        setDiputadoSelected({});
        setLabelDiputadoSelected('');
    }
    const handleQuitarDiputado = ({diputado}) => {

        setDiputadosSelected({...diputadoNoSelected, diputado});
        setDiputadosNoSelected(...diputadosNoSelected.map(d => {
            if(d.id !== diputado.id) return d;
        }))
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
    const handleCrearCongreso = () => {
        service.createNewCongress({
            presidente:presidente.id,
            plata:plata,
            milicia:milicias,
            sede:sedeSelected.id,
            diputados:diputadosSelected.map(d => d.id)
        })
    }

    return (
        <Grid container spacing={2}>
            <Grid item={12}>
                Nuevo Congreso
            </Grid>
            <Grid item={12}>
                Diputados
            </Grid>
            <Grid item={12}>
                <Grid item={5}>
                    <Autocomplete
                        disablePortal
                        getOptionLabel={(option) => option.username}
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
                <Grid item={2}>
                    <Button onClick={handleAgregarDiputado}
                            size="small" variant='contained' color='warning' fullWidth>=></Button>
                </Grid>
                <Grid item={5}>
                    {diputadosSelected?.map(d => {
                        return <Grid container key={d.id}>
                            <Grid item={9}>
                                {d.username}
                            </Grid>
                            <Grid item={3}>
                                <Button onClick={() => handleQuitarDiputado({diputado:d})}
                                        size="small" variant='contained' color='warning' fullWidth>
                                    --- </Button>
                            </Grid>
                        </Grid>
                    })}
                </Grid>
            </Grid>
            <Grid item={12}>
                <Autocomplete
                    disablePortal
                    getOptionLabel={(option) => option.name}
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
            <Grid item={12}>
                <Autocomplete
                    disablePortal
                    getOptionLabel={(option) => option.username}
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
            <Grid item={6}>
                <TextField onBlur={handlePlata}
                           type={"number"}
                           fullWidth
                           placeholder={"Plata"}
                           variant={"standard"}/>
            </Grid>
            <Grid item={6}>
                <TextField onBlur={handleMilicias}
                           type={"number"}
                           fullWidth
                           placeholder={"Milicias"}
                           variant={"standard"}/>
            </Grid>
            <Grid item={12}>
                <Button onClick={handleCrearCongreso}
                        size="small" variant='contained' color='warning' fullWidth>
                    Crear </Button>
            </Grid>

        </Grid>
    );
};

export default CrearCongresoModal;