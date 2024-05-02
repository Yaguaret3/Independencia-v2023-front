import React, {useContext, useEffect, useState} from 'react';
import {
    Autocomplete,
    Box,
    Button,
    Grid,
    Modal,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import service from "../../../Service.js";
import {ControlContext} from "../../../Context.jsx";
import useWebSocket from "../../../../../hooks/useWebSocket.jsx";

const CrearBatallaModal = ({open, handleClose}) => {

    const {stompClient, gameData} = useContext(ControlContext);
    const {disparoControl, disparoCapitanes} = useWebSocket({});

    const [capitanesFiltrados, setCapitanesFiltrados] = useState([])
    const [subregionesFiltradas, setSubregionesFiltradas] = useState([]);

    const [filtro, setFiltro] = useState({});
    const [labelFiltro, setLabelFiltro] = useState('');
    const handleSelectFiltro = ({newValue}) => {
        setFiltro(newValue);

        //filtrar capitanes
        let newList = gameData?.playersData?.filter(p => p.rol === 'CAPITAN').filter(c => c.campamento?.gameRegionId === newValue.id);
        setCapitanesFiltrados(newList || [])

        //filtrar subregiones
        let newSubregions = gameData?.gameRegions?.flatMap(r => r.subregions).filter(s => s.gameRegionId === newValue.id);
        setSubregionesFiltradas(newSubregions || []);
    }
    const handleSelectFiltroLabel = ({newValue}) => {
        setLabelFiltro(newValue);
    }

    const [capitanesSelected, setCapitanesSelected] = useState([]);
    const [capitanSelected, setCapitanSelected] = useState({});
    const [labelCapitanSelected, setLabelCapitanSelected] = useState('');

    const handleSelectCapitan = ({newValue}) => {
        setCapitanSelected(newValue);
    }
    const handleSelectCapitanLabel = ({newValue}) => {
        setLabelCapitanSelected(newValue);
    }
    const [subregionSelected, setSubregionSelected] = useState({});
    const [labelSubregionSelected, setLabelSubregionSelected] = useState({});
    const handleSelectSubregion = ({newValue}) => {
        setSubregionSelected(newValue);
    }
    const handleSelectedSubregionLabel = ({newValue}) => {
        setLabelSubregionSelected(newValue);
    }

    useEffect(() => {
        const capitanes = gameData?.playersData?.filter(p => p.rol === 'CAPITAN');
        capitanes?.forEach(c => c.ataca = false)
        setCapitanesFiltrados(capitanes);
        const subregions = gameData?.gameRegions?.flatMap(r => r.subregions);
        setSubregionesFiltradas(subregions);
    }, [gameData]);

    const handleAddCapitan = () => {
        if (capitanesSelected?.includes(capitanSelected)) return

        let newList = [...capitanesSelected];
        newList.push(capitanSelected);
        setCapitanesSelected(newList);
    }
    const handleToggleAtacar = ({capitan}) => {

        let newList = [...capitanesSelected];

        newList.forEach(c => {
            if(c.id === capitan.id){
                c.ataca = !c.ataca;
            }
        })
        setCapitanesSelected(newList);
    }
    const handleQuitar = ({capitan}) => {
        let newList = [...capitanesSelected]
        const index = newList.indexOf(capitan);
        if (index > -1) { // only splice array when item is found
            newList.splice(index, 1);
        }
        setCapitanesSelected(newList);
    }

    const handleCrearBatallaService = async () => {
        await service.createBattle({capitanes:capitanesSelected, subregionId:subregionSelected.id});
        disparoControl({stompClient:stompClient});
        disparoCapitanes({stompClient:stompClient});
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
                borderRadius: 3,
                width: '80%'
            }}
            >
                <Grid container spacing={2} direction={'column'}>
                    <Grid item>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                Batalla
                            </Grid>
                            <Grid item xs={10}>
                                <Autocomplete
                                    disablePortal
                                    getOptionLabel={(option) => option.name || ''}
                                    options={gameData?.gameRegions}
                                    value={filtro}
                                    onChange={(event, newOption) => {
                                        handleSelectFiltro({newValue: newOption});
                                    }}
                                    inputValue={labelFiltro}
                                    onInputChange={(event, newInputValue) => {
                                        handleSelectFiltroLabel({newValue: newInputValue});
                                    }}
                                    renderInput={(params) => <TextField {...params} label="Filtrar por Región"/>}
                                />
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Grid container spacing={2} direction={'column'}>
                                    <Grid item>
                                        <Autocomplete
                                            disablePortal
                                            getOptionLabel={(option) => option?.username || ''}
                                            options={capitanesFiltrados}
                                            value={capitanSelected}
                                            onChange={(event, newOption) => {
                                                handleSelectCapitan({newValue: newOption});
                                            }}
                                            inputValue={labelCapitanSelected}
                                            onInputChange={(event, newInputValue) => {
                                                handleSelectCapitanLabel({newValue: newInputValue});
                                            }}
                                            renderInput={(params) => <TextField {...params} label="Capitanes"/>}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Button onClick={handleAddCapitan}
                                                disabled={capitanesSelected?.includes(capitanSelected)}
                                                size="small" variant='contained' color='warning' fullWidth>
                                            Agregar =>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell padding='none' align="center">Capitán</TableCell>
                                            <TableCell padding='none' align="center">Ataca?</TableCell>
                                            <TableCell padding='none' align="center">Quitar</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    {capitanesSelected?.map(capitan =>
                                        <TableBody key={capitan.id}>
                                            <TableRow>
                                                <TableCell padding='none' align="center">
                                                    {capitan.username}
                                                </TableCell>
                                                <TableCell padding='none' align="center">
                                                    <Button onClick={() => handleToggleAtacar({capitan:capitan})}
                                                            size="small" variant='contained' color={capitan.ataca ? 'success' : 'error'}>
                                                        {capitan.ataca ? '✔' : 'X'}
                                                    </Button>
                                                </TableCell>
                                                <TableCell padding='none' align="center">
                                                    <Button onClick={() => handleQuitar({capitan:capitan})}
                                                            size="small" variant='outlined' color='error'>
                                                        -
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    )}

                                </Table>
                            </Grid>
                            <Grid item xs={3}>
                                <Autocomplete
                                    disablePortal
                                    getOptionLabel={(option) => option?.name || ''}
                                    options={subregionesFiltradas}
                                    value={subregionSelected}
                                    onChange={(event, newOption) => {
                                        handleSelectSubregion({newValue: newOption});
                                    }}
                                    inputValue={labelSubregionSelected}
                                    onInputChange={(event, newInputValue) => {
                                        handleSelectedSubregionLabel({newValue: newInputValue});
                                    }}
                                    renderInput={(params) => <TextField {...params} label="Subregiones"/>}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Button onClick={handleCrearBatallaService}
                                size="small" variant='contained' color='warning' fullWidth>
                            Crear
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default CrearBatallaModal;