import React, {useContext} from 'react';
import {ControlContext} from "../Context.jsx";
import {AppBar, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar} from "@mui/material";

const BarraInferior = () => {

    const { gameData } = useContext(ControlContext);

    return (
        <AppBar position="static" color="warning" sx={{ top: 'auto', bottom: 0, height: '10vh' }}>
            <Toolbar>
                <Box sx={{
                    mr: 3, height: '100%', display: 'flex', alignItems: 'center',
                    paddingLeft: '5vh'
                }}>
                    <TableContainer style={{ height: '100%', maxHeight: '100%', overflow: 'hidden', alignItems: 'center' }}>
                        <Table style={{ tableLayout: 'fixed' }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ color: 'white', padding: '0.6vh', textAlign: 'center' }}>
                                        Lorem ipsum...
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: '0.6vh', textAlign: 'center' }}>
                                        Lorem ipsum...
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: 0, textAlign: 'center' }}>
                                        Lorem ipsum...
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell style={{ color: 'white', padding: '0.6vh', textAlign: 'center' }}>
                                        Lorem ipsum...
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: '0.6vh', textAlign: 'center' }}>
                                        Lorem ipsum...
                                    </TableCell>
                                    <TableCell style={{ color: 'white', padding: 0, textAlign: 'center' }}>
                                        Lorem ipsum...
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default BarraInferior;