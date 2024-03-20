import React, {useContext} from 'react';
import {Box, Grid, Modal, TextField, Typography} from "@mui/material";
import RouteComponentForPlayerEdit from "./RouteComponentForPlayerEdit.jsx";
import {ControlContext} from "../../../Context.jsx";

const RutasModal = ({nombreJugador, rolJugador, rutas, handleClose, open}) => {

    const {gameData} = useContext(ControlContext);
    const turno = gameData.turno;

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
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography>Username</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField disabled={'true'} label={"Username"} fullWidth value={nombreJugador}
                                   variant={"standard"}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography>Rol</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField disabled={'true'} label={"Rol"} fullWidth value={rolJugador}
                                   variant={"standard"}/>
                    </Grid>
                </Grid>

                {/*Routes*/}
                <Grid container spacing={2}>
                    {rutas?.map((route) => (
                        <Grid item xs={12} key={route.id}>
                            <RouteComponentForPlayerEdit
                                route={route.filter(route => route.turn === turno)} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Modal>
    );
};

export default RutasModal;