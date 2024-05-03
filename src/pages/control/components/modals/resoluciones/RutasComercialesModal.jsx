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
import {ControlContext} from "../../../Context.jsx";
import useWebSocket from "../../../../../hooks/useWebSocket.jsx";
import service from "../../../Service.js";

const RutasComercialesModal = ({open, handleClose}) => {

    const { gameData, stompClient} = useContext(ControlContext);
    const {disparoTodos} = useWebSocket({});

    const [rutasSelected, setRutasSelected] = useState([]);

    const [filtro, setFiltro] = useState({});
    const [labelFiltro, setLabelFiltro] = useState('');
    const handleSelectFiltro = ({newValue}) => {
        setFiltro(newValue);

        const newList = gameData?.playersData?.filter(p => p.rol === 'MERCADER').flatMap(m => m.routes)
            .filter(r => {
                const ciudadesTotales = r.subregions?.flatMap(sr => sr.city.id);
                const ciudadesFiltradas = newValue.subregions?.flatMap(sr => sr.city.id);

                if(ciudadesTotales.some(r=> ciudadesFiltradas.includes(r))){
                    return r;
                }
            })

        setRutasSelected(newList);
    }
    const handleSelectFiltroLabel = ({newValue}) => {
        setLabelFiltro(newValue);
    }

    useEffect(() => {
        let newList = gameData?.playersData?.filter(p => p.rol === 'MERCADER').flatMap(m => m.routes)
        newList?.forEach(r => r.finalValue = r.tradeScore);

        setRutasSelected(newList);
    }, [gameData]);

    const handleFinalValue = ({newValue, rutaId}) => {
        let newList = [...gameData?.playersData?.filter(p => p.rol === 'MERCADER').flatMap(m => m.routes)]
        newList.forEach(r => {
            if (r.id === rutaId) {
                r.finalValue = newValue
            }
        });
        setRutasSelected(newList);
    }
    const handleComentario = ({newValue, rutaId}) => {
        let newList = [...gameData?.playersData?.filter(p => p.rol === 'MERCADER').flatMap(m => m.routes)]
        newList.forEach(r => {

            if (r.id === rutaId) {
                r.comentario = newValue
            }
        });
        setRutasSelected(newList);
    }
    const handleUpdateRuta = async ({ruta}) => {
        await service.updateRoute({route:ruta});
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
                borderRadius: 3,
                width:'80%'
            }}
            >
                <Grid container spacing={2} direction={'column'}>
                    <Grid item>
                        Rutas Comerciales
                    </Grid>
                    <Grid item>
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
                    <Grid item>
                        <Table>
                            <TableHead>
                                <TableRow>

                                    <TableCell padding='none' align="center">Actualizar</TableCell>
                                    <TableCell padding='none' align="center">Mercader</TableCell>
                                    <TableCell padding='none' align="center">Ruta</TableCell>
                                    <TableCell padding='none' align="center" width={'15%'}>Capitanes</TableCell>
                                    <TableCell padding='none' align="center">Puntaje Provisorio</TableCell>
                                    <TableCell padding='none' align="center" width={'35%'}>Nota:</TableCell>
                                    <TableCell padding='none' align="center" width={'5%'}>Puntaje Final</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rutasSelected?.map(ruta =>

                                    <TableRow key={ruta.id}>
                                        <TableCell padding='none' align="center">
                                            <Button onClick={() => handleUpdateRuta({ruta:ruta})}
                                                    size="small" variant='contained' color='info'>
                                                ✔
                                            </Button>
                                        </TableCell>
                                        <TableCell padding='none' align="center">
                                            {ruta.mercaderName}
                                        </TableCell>
                                        <TableCell padding='none' align="center">
                                            {ruta?.subregions.map(sr =>
                                                <div>
                                                    {sr.nombre}
                                                </div>
                                            )}
                                        </TableCell>
                                        <TableCell padding='none' align="center" width={'15%'}>
                                            {ruta?.subregions.map(sr =>
                                                <div>
                                                    <u>{sr.ejercitos?.map(e => e.capitanName).join(", ")}</u>
                                                </div>
                                            )}
                                        </TableCell>
                                        <TableCell padding='none' align="center">
                                            {ruta?.tradeScore}
                                        </TableCell>
                                        <TableCell padding='none' align="center" width={'35%'}>
                                            <TextField
                                                fullWidth
                                                value={ruta?.comentario}
                                                onChange={(event) =>handleComentario({newValue:event.target.value, rutaId:ruta.id})}
                                            />
                                        </TableCell>
                                        <TableCell padding='none' align="center"  width={'5%'}>
                                            <TextField
                                                value={ruta?.finalValue}
                                                onChange={(event) => handleFinalValue({newValue:event.target.value, rutaId:ruta.id})}
                                            />
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default RutasComercialesModal;