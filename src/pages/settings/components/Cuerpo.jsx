import React, {useState} from 'react';
import {Box, Button, Grid} from "@mui/material";
import Partidas from "./Partidas.jsx";
import Users from "./Users.jsx";

const Cuerpo = () => {

    const [verJugadores, setVerJugadores] = useState(true);
    const [verJuegos, setVerJuegos] = useState(false);

    const handleVerJugadores = () => {
        setVerJugadores(true);
        setVerJuegos(false);
    }
    const handleVerJuegos = () => {
        setVerJuegos(true);
        setVerJugadores(false);
    }

    return (
        <Box width={'100%'} height={'80vh'}>
            <Grid container maxHeight={'100vh'} direction='column'>
                <Grid item>
                    <Grid container spacing={2} alignItems='center'>
                        <Grid item xs={6} style={{ textAlign: 'right' }}>
                            <Button onClick={handleVerJugadores}
                                    size="small" variant='contained' color={verJugadores ? 'success' : 'error'}>
                                Usuarios
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button onClick={handleVerJuegos}
                                    size="small" variant='contained' color={verJuegos ? 'success' : 'error'}>
                                Partidas
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container>
                        {verJugadores &&
                            <Grid item xs={12}>
                                <Users />
                            </Grid>}
                        {verJuegos &&
                            <Grid item xs={12}>
                                <Partidas />
                            </Grid>}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Cuerpo;