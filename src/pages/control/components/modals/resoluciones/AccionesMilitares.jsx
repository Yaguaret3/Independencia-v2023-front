import React, {useContext, useEffect, useState} from 'react';
import {Box, Button, Checkbox, Grid, Modal, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {ControlContext} from "../../../Context.jsx";
import CrearBatallaModal from "./CrearBatallaModal.jsx";

const AccionesMilitares = ({open, handleClose}) => {

    const {gameData} = useContext(ControlContext);

    const accionesEnRegion = gameData?.gameRegions?.flatMap(r => r.accionesMilitares);
    const accionesEnSubregion = gameData?.gameRegions?.flatMap(r => r.subregions?.flatMap(sr => sr.accionesMilitares));

    const [finalAcciones, setFinalAcciones] = useState(accionesEnRegion?.concat(accionesEnSubregion));

    const [openCrearBatallaModal, setOpenCrearBatallaModal] = useState(false);
    const handleOpenCrearBatallaModal = () => {
        setOpenCrearBatallaModal(true);
    }
    const handleCloseCrearBatallaModal = () => {
        setOpenCrearBatallaModal(false);
    }

    useEffect(() => {
        setFinalAcciones(accionesEnRegion?.concat(accionesEnSubregion));
    }, [gameData]);

    const toggleActionCheck = (id, isChecked) => {
        setFinalAcciones(prev =>
            prev.map(a => a.id === id ? { ...a, checked: isChecked } : a)
        );
    };

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
                    borderRadius: 3,
                    width:'80%'
                }}
                >
                    <Grid container spacing={2} direction={'column'}>
                        <Grid item xs={1}>
                            Acciones
                        </Grid>
                        <Grid item xs={10}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell padding='none' align="center">#</TableCell>
                                        <TableCell padding='none' align="center">Caudillo</TableCell>
                                        <TableCell padding='none' align="center">Acción</TableCell>
                                        <TableCell padding='none' align="center">Región</TableCell>
                                        <TableCell padding='none' align="center">Subregión</TableCell>
                                        <TableCell padding='none' align="center"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {finalAcciones?.map((accion, index) =>

                                        <TableRow key={accion.id}>
                                            <TableCell padding='none' align="center">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell padding='none' align="center">
                                                {accion.capitanName}
                                            </TableCell>
                                            <TableCell padding='none' align="center">
                                                {accion.actionType}
                                            </TableCell>
                                            <TableCell padding='none' align="center">
                                                {accion.gameRegionName || 'N/A'}
                                            </TableCell>
                                            <TableCell padding='none' align="center">
                                                {accion.gameSubregionName || 'N/A'}
                                            </TableCell>
                                            <Checkbox
                                                checked={accion.checked}
                                                onChange={(e) =>
                                                    toggleActionCheck(accion.id, e.target.checked)
                                                }
                                            />
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </Grid>
                        <Grid item xs={1}>
                            <Button onClick={handleOpenCrearBatallaModal}
                                    size="small" variant='contained' color='warning' fullWidth>
                                Crear batalla
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
            <CrearBatallaModal
                open={openCrearBatallaModal}
                handleClose={handleCloseCrearBatallaModal}
            />
        </>
    );
};

export default AccionesMilitares;