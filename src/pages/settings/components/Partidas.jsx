import React, {useContext, useState} from 'react';
import {Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {SettingsContext} from "../Context.jsx";
import VerJugadoresAsignadosModal from "./modals/VerJugadoresAsignadosModal.jsx";
import useWebSocket from "../../../hooks/useWebSocket.jsx";
import service from "../Service.js";
import CreateGameModal from "./modals/CreateGameModal.jsx";

const Partidas = () => {

    const {games, stompClient} = useContext(SettingsContext);
    const {disparoSettings} = useWebSocket({});

    const [openVerJugadoresAsignadosModal, setOpenVerJugadoresAsignadosModal] = useState(false);
    const [partidaSeleccionada, setPartidaSeleccionada] = useState({});

    const handleOpenVerJugadoresAsignados = ({game}) => {
        setPartidaSeleccionada(game);
        setOpenVerJugadoresAsignadosModal(true);
    }
    const handleCloseVerJugadoresAsignados = () => {
        setOpenVerJugadoresAsignadosModal(false);
    }
    const handleDesactivarPartida = async ({id}) => {
        await service.deactivateGame({id: id});
        disparoSettings({stompClient: stompClient});
    }
    const handleEliminarPartida = async ({id}) => {
        await service.deleteGame({id: id});
        disparoSettings({stompClient: stompClient});
    }
    const [openCreateGameModal, setOpenCreateGameModal] = useState(false);
    const handleOpenCreateGameModal = () => {
        setOpenCreateGameModal(true);
    }
    const handleCloseCreateGameModal = () => {
        setOpenCreateGameModal(false);
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">
                                        ID
                                    </TableCell>
                                    <TableCell align="center">
                                        Nombre
                                    </TableCell>
                                    <TableCell padding='none' align="center">
                                        Creado en
                                    </TableCell>
                                    <TableCell padding='none' align="center">
                                        Jugadores asignados
                                    </TableCell>
                                    <TableCell padding='none' align="center">
                                        Deshabilitar partida
                                    </TableCell>
                                    <TableCell padding='none' align="center">
                                        Eliminar partida
                                    </TableCell>
                                </TableRow>

                            </TableHead>
                            <TableBody>
                                {games?.map(g => (
                                    <TableRow key={g.id}>
                                        <TableCell align="center">
                                            {g.id}
                                        </TableCell>
                                        <TableCell align="center">
                                            {g.nombre}
                                        </TableCell>
                                        <TableCell padding='none' align="center">
                                            {g.createdOn}
                                        </TableCell>
                                        <TableCell padding='none' align="center">
                                            <Button onClick={() => handleOpenVerJugadoresAsignados({game: g})}
                                                    size="small" variant='contained'
                                                    color={'warning'}>
                                                Ver
                                            </Button>
                                        </TableCell>
                                        <TableCell padding='none' align="center">
                                            <Button onClick={() => handleDesactivarPartida({id: g.id})}
                                                    size="small" variant='outlined'
                                                    color={'error'}
                                                    disabled={!g.habilitado}>
                                                -
                                            </Button>
                                        </TableCell>
                                        <TableCell padding='none' align="center">
                                            <Button onClick={() => handleEliminarPartida({id: g.id})}
                                                    size="small" variant='contained'
                                                    color={'error'}>
                                                X
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={handleOpenCreateGameModal}
                            size="small" variant='contained' color={'warning'} fullWidth>
                        Crear Juego
                    </Button>
                </Grid>
            </Grid>
            <VerJugadoresAsignadosModal
                open={openVerJugadoresAsignadosModal}
                handleClose={handleCloseVerJugadoresAsignados}
                players={partidaSeleccionada?.players}
            />
            <CreateGameModal
                open={openCreateGameModal}
                handleClose={handleCloseCreateGameModal}
                />
        </>
    );
};

export default Partidas;