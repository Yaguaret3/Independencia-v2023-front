import React, {useContext, useEffect} from 'react';
import {
    AppBar,
    Box, Grid,
    Table,
    TableBody,
    TableCell, TableContainer,
    TableHead,
    TableRow,
    Toolbar,
    Typography
} from "@mui/material";
import {ControlContext} from "../Context.jsx";
import useTimer from "../../../hooks/useTimer.jsx";

const BarraSuperior = () => {

    const {gameData} = useContext(ControlContext);

    const {minutes, seconds} = useTimer({futureDate: gameData?.nextEndOfTurn});

    return (
        <AppBar position="static" color='warning'>
            <Toolbar>
                <Grid container spacing={2} paddingTop={1} paddingBottom={1}>
                    <Grid item xs={2}>
                        <Box component="img" src="/img/isologotipo_tag_blanco.png" alt="Independencia: El Megajuego!" sx={{ maxWidth: '100%' }} />
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
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
        ;
};

export default BarraSuperior;