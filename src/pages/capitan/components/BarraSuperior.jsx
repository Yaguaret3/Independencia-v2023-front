import React, { useContext } from 'react';
import {
    AppBar, Toolbar, Typography, Box, Table,
    TableHead, TableRow, TableCell, TableContainer, TableBody
} from '@mui/material';
import { CapitanContext } from '../Context';


const BarraSuperior = (props) => {

    const { playerData } = useContext(CapitanContext);


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
                                        Ciudad
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: 0, textAlign: 'center' }}>
                                        Prestigio
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: 0, textAlign: 'center' }}>
                                        Opinión Pública
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: 0, textAlign: 'center' }}>
                                        Mercados
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: 0, textAlign: 'center' }}>
                                        Diputado
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell style={{ color: 'white', padding: '0.6vh', textAlign: 'center' }}>
                                        {playerData.city && playerData.city.name}
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: 0, textAlign: 'center' }}>
                                        {playerData.city && playerData.city.prestige}
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: 0, textAlign: 'center' }}>
                                        {playerData.city && playerData.city.publicOpinion}
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: 0, textAlign: 'center' }}>
                                        {playerData.city && playerData.city.marketLevel}
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: 0, textAlign: 'center' }}>
                                        {(playerData.city && playerData.city.diputado) ? playerData.city.diputado : "Sin Asignar"}
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