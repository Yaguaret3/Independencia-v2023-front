import React, {useContext, useEffect} from 'react';
import {
    AppBar, Toolbar, Typography, Table,
    TableHead, TableRow, TableCell, TableContainer, Grid
} from '@mui/material';
import { MercaderContext } from '../Context'
import useTimer from "../../../hooks/useTimer.jsx";


const BarraSuperior = () => {

    const { playerData, gameData } = useContext(MercaderContext);

    const {initTimer, minutes, seconds} = useTimer({futureDate:gameData?.nextEndOfTurn});

    useEffect(() => {
        initTimer();
    });

    return (
        <AppBar position="static" color='warning'>
            <Toolbar>
                <Grid container spacing={2}>

                    <Grid item xs={2}>
                        <Typography variant="h6">
                            Independencia: El Megajuego!
                        </Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align={"center"} sx={{color: 'white'}}>
                                            Turno: {gameData?.turno}
                                        </TableCell>
                                        <TableCell align={"center"} sx={{color: 'white'}}>
                                            Fase: {gameData?.fase}
                                        </TableCell>
                                        <TableCell align={"center"} sx={{color: 'white'}}>
                                            Próximo turno en: {minutes + ' : ' + seconds}
                                        </TableCell>
                                        <TableCell align={"center"} sx={{color: 'white'}}>
                                            Puntaje Comercial Actual: {playerData?.puntajeComercial}
                                        </TableCell>
                                        <TableCell align={"center"} sx={{color: 'white'}}>
                                            Puntaje Comercial Acumulado: {playerData?.puntajeComercialAcumulado}
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default BarraSuperior