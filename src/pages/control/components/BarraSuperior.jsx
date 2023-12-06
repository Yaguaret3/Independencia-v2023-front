import React, {useContext} from 'react';
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
                                        Lorem Ipsum...
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: 0, textAlign: 'center' }}>
                                        Lorem Ipsum...
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: 0, textAlign: 'center' }}>
                                        Lorem Ipsum...
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: 0, textAlign: 'center' }}>
                                        Lorem Ipsum...
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: 0, textAlign: 'center' }}>
                                        Lorem Ipsum...
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                        </Table>
                    </TableContainer>
                </Box>
                {props.botonesNavegacion}
            </Toolbar>
        </AppBar>
    );
};

export default BarraSuperior;