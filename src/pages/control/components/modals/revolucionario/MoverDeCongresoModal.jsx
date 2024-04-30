import React, {useContext} from 'react';
import {Box, Button, Modal, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {ControlContext} from "../../../Context.jsx";

const MoverDeCongresoModal = ({open, handleClose, handleService}) => {

    const {gameData} = useContext(ControlContext);

    return (
        <>
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
                }}
                >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding='none' align="center">Sede</TableCell>
                                <TableCell padding='none' align="center">Presidente</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {gameData?.congresos.map(congreso =>

                                <TableRow key={congreso.id}>
                                    <TableCell padding='none' align="center">
                                        {congreso.sede.name}
                                    </TableCell>
                                    <TableCell padding='none' align="center">
                                        {congreso.revolucionarios?.find(r => r.presidente)?.playerName}
                                    </TableCell>
                                    <TableCell padding='none' align="center">
                                        <Button onClick={() => handleService({congresoId: congreso.id})}
                                                size="small" variant='contained' color='warning' fullWidth>
                                            Cambiar a
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>


                </Box>
            </Modal>
        </>
    );
};

export default MoverDeCongresoModal;