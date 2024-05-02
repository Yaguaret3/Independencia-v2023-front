import React, {useContext, useEffect} from 'react';
import {
    AppBar, Toolbar, Typography, Box, Table,
    TableHead, TableRow, TableCell, TableContainer, TableBody
} from '@mui/material';
import {RevolucionarioContext} from '../Context'
import useTimer from "../../../hooks/useTimer.jsx";


const BarraSuperior = (props) => {

    const {playerData, gameData} = useContext(RevolucionarioContext);

    const {initTimer, minutes, seconds} = useTimer({futureDate: gameData?.nextEndOfTurn});

    useEffect(() => {
        initTimer();
    });

    return (
        <AppBar position="static" color='warning' style={{height: '10vh'}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    {props.titulo}
                </Typography>
                <Box sx={{
                    mr: 3, height: '100%', display: 'flex', alignItems: 'center',
                    paddingLeft: '5vh'
                }}>
                    <TableContainer
                        style={{height: '100%', maxHeight: '100%', overflow: 'hidden', alignItems: 'center'}}>
                        <Table style={{tableLayout: 'fixed'}}>
                            <TableHead>
                                <TableCell style={{color: 'white', padding: '0.6vh', textAlign: 'center'}}>
                                    Turno
                                </TableCell>
                                <TableCell style={{color: 'white', padding: 0, textAlign: 'center'}}>
                                    Fase
                                </TableCell>
                                <TableCell style={{color: 'white', padding: 0, textAlign: 'center'}}>
                                    Próximo turno en
                                </TableCell>
                                <TableCell style={{color: 'white', padding: 0, textAlign: 'center'}}>
                                    Plata
                                </TableCell>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell style={{color: 'white', padding: '0.6vh', textAlign: 'center'}}>
                                        {gameData?.turno}
                                    </TableCell>
                                    <TableCell style={{color: 'white', padding: 0, textAlign: 'center'}}>
                                        {gameData?.fase}
                                    </TableCell>
                                    <TableCell style={{color: 'white', padding: 0, textAlign: 'center'}}>
                                        {minutes + " : " + seconds}
                                    </TableCell>
                                    <TableCell style={{color: 'white', padding: 0, textAlign: 'center'}}>
                                        {playerData?.plata}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                {props.botonesNavegacion}
            </Toolbar>
        </AppBar>
    );
}

export default BarraSuperior