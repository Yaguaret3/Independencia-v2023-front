import React, {useContext, useEffect, useState} from 'react';
import {
    AppBar,
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Toolbar,
    Typography
} from "@mui/material";
import {ControlContext} from "../Context.jsx";

const BarraSuperior = (props) => {

    const { gameData } = useContext(ControlContext);

    const [endOfTurn, setEndOfTurn] = useState({minutes:'00', seconds:'00'});

    useEffect(() => {
        const timer = setInterval(() => {
            calculateTimeLeft({futureDate:gameData?.nextEndOfTurn});
        }, 1000);

        return () => clearInterval(timer);
    });

    const calculateTimeLeft= ({futureDate})  => {
        let difference = futureDate - new Date();
        let minutes = Math.floor(difference / 1000 / 60);
        let seconds = Math.floor((difference / 1000) % 60);

        let minString = '00';
        let secString = '00';

        if(difference>0){
            minString = minutes >= 10 ? minutes : '0'+minutes;
            secString = seconds >= 10 ? seconds : '0'+seconds;
        }
        setEndOfTurn({minutes:minString,
            seconds: secString});
    }

    return (
        <AppBar position="static" color='warning' style={{ height: '10vh' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {props.titulo}
                </Typography>
                <Box sx={{
                    mr: 3, height: '100%', display: 'flex', alignItems: 'center',
                    paddingLeft: '5vh'
                }}>
                    <TableContainer style={{ height: '100%', maxHeight: '100%', overflow: 'hidden', alignItems: 'center' }}>
                        <Table style={{ tableLayout: 'fixed' }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ color: 'white', padding: '0.6vh', textAlign: 'center' }}>
                                        Turno
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: 0, textAlign: 'center' }}>
                                        Fase
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: 0, textAlign: 'center' }}>
                                        Próximo turno en
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: 0, textAlign: 'center' }}>
                                        Lorem Ipsum...
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: 0, textAlign: 'center' }}>
                                        Lorem Ipsum...
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell style={{ color: 'white', padding: '0.6vh', textAlign: 'center' }}>
                                        {gameData?.turno}
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: 0, textAlign: 'center' }}>
                                        {gameData?.fase}
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: 0, textAlign: 'center' }}>
                                        {endOfTurn.minutes + ' : ' + endOfTurn.seconds}
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: 0, textAlign: 'center' }}>
                                        Lorem Ipsum...
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: 0, textAlign: 'center' }}>
                                        Lorem Ipsum...
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
};

export default BarraSuperior;