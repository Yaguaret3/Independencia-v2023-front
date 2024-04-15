import React, {useState} from 'react';
import {
    Box,
    Button,
    Grid,
    Modal,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import service from "../../Service.js";
import EditarCongresoModal from "./congreso/EditarCongresoModal.jsx";
import CrearCongresoModal from "./congreso/CrearCongresoModal.jsx";

const CongresosModal = ({open, handleClose, congresos}) => {

    const [openEditarCongresoModal, setOpenEditarCongresoModal] = useState(false);
    const [congresoSelected, setCongresoSelected] = useState();
    const handleOpenEditarCongresoModal = ({congreso}) => {
        setCongresoSelected(congreso);
        setOpenEditarCongresoModal(true);
    }

    const handleCloseEditarCongresoModal = () => {
        setOpenEditarCongresoModal(false);
    }
    const handleBorrarCongreso = ({congresoId}) => {
        service.removeCongress({congresoId:congresoId});
    }
    const [openCrearCongresoModal, setOpenCrearCongresoModal] = useState(false);
    const handleOpenCrearCongresoModal = () => {
        setOpenCrearCongresoModal(true);
    }
    const handleCloseCrearCongresoModal = () => {
        setOpenCrearCongresoModal(false);
    }

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
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            Congresos
                        </Grid>
                        <Grid item xs={12}>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell padding='none' align="center">Sede</TableCell>
                                            <TableCell padding='none' align="center">Presidente</TableCell>
                                            <TableCell padding='none' align="center">Editar</TableCell>
                                            <TableCell padding='none' align="center">Borrar</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {congresos?.map(congreso => (
                                            <TableRow key={congreso.id}>
                                                <TableCell padding='none' align="center">
                                                    {congreso.sede.name}
                                                </TableCell>
                                                <TableCell padding='none' align="center">
                                                    {congreso.presidente}
                                                </TableCell>
                                                <TableCell padding='none' align="center">
                                                    <Button onClick={() => handleOpenEditarCongresoModal({congreso:congreso})}
                                                            size="small" variant='contained' color='warning' fullWidth>
                                                        E
                                                    </Button>
                                                </TableCell>
                                                <TableCell padding='none' align="center">
                                                    <Button onClick={() => handleBorrarCongreso({congresoId:congreso.id})}
                                                            size="small" variant='contained' color='warning' fullWidth>
                                                        ---
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Button onClick={handleOpenCrearCongresoModal}
                                    size="small" variant='contained' color='warning' fullWidth>
                                Crear Congreso
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
            <EditarCongresoModal
                open={openEditarCongresoModal}
                handleClose={handleCloseEditarCongresoModal}
                congreso={congresoSelected}/>

            <CrearCongresoModal
                open={openCrearCongresoModal}
                handleClose={handleCloseCrearCongresoModal}/>
        </>
    );
};

export default CongresosModal;