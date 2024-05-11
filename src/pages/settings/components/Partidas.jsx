import React, {useContext, useState} from 'react';
import {Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {SettingsContext} from "../Context.jsx";
import VerJugadoresAsignadosModal from "./modals/VerJugadoresAsignadosModal.jsx";
import useWebSocket from "../../../hooks/useWebSocket.jsx";
import service from "../Service.js";

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
    const handleCreateGame = async () => {
        await service.createGame();
        disparoSettings({stompClient: stompClient})
    }
    const handleDesactivarPartida = async ({id}) => {
        await service.deactivateGame({id:id});
        disparoSettings({stompClient:stompClient});
    }
    const handleEliminarPartida = async ({id}) => {
        await service.deleteGame({id:id});
        disparoSettings({stompClient:stompClient});
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item={12}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell padding='none' align="center">
                                        ID
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
                                        <TableCell padding='none' align="center">
                                            {g.id}
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
                    <Button onClick={handleCreateGame}
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
        </>
    );
};

export default Partidas;