import React, { useContext } from 'react';
import {
    AppBar, Toolbar, Typography, Box, Table,
    TableHead, TableRow, TableCell, TableContainer, TableBody
} from '@mui/material';
import { MercaderContext } from '../Context'


const BarraSuperior = (props) => {

    const { playerData } = useContext(MercaderContext)

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
                                        Puntaje Comercial Actual
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: 0, textAlign: 'center' }}>
                                        Puntaje Comercial Acumulado
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell style={{ color: 'white', padding: '0.6vh', textAlign: 'center' }}>
                                        {playerData && playerData.puntajeComercial}
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: 0, textAlign: 'center' }}>
                                        {playerData && playerData.puntajeComercialAcumulado}
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