import React, {useContext, useEffect, useState} from 'react';
import {
    Box, Button, Checkbox, Grid, Modal, Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel, TextField
} from "@mui/material";
import {ControlContext} from "../../../Context.jsx";
import CrearBatallaModal from "./CrearBatallaModal.jsx";

const AccionesMilitares = ({open, handleClose}) => {

    const {gameData} = useContext(ControlContext);

    const accionesEnRegion = gameData?.gameRegions?.flatMap(r => r.accionesMilitares);
    const accionesEnSubregion = gameData?.gameRegions?.flatMap(r => r.subregions?.flatMap(sr => sr.accionesMilitares));

    const [finalAcciones, setFinalAcciones] = useState([]);

    const [openCrearBatallaModal, setOpenCrearBatallaModal] = useState(false);
    const handleOpenCrearBatallaModal = () => {
        setOpenCrearBatallaModal(true);
    }
    const handleCloseCrearBatallaModal = () => {
        setOpenCrearBatallaModal(false);
    }

    useEffect(() => {
        if(gameData.fase !== 'Revelación'){
            const regiones = accionesEnRegion || [];
            const subregiones = accionesEnSubregion || [];
            setFinalAcciones(regiones?.concat(subregiones));
        }
    }, [gameData]);

    const toggleActionCheck = (id, isChecked) => {
        setFinalAcciones(prev => prev.map(a => a.id === id ? {...a, checked: isChecked} : a));
    };


    const [filterCapitan, setFilterCapitan] = useState("");
    const [filterActionType, setFilterActionType] = useState("");
    const [sortConfig, setSortConfig] = useState({key: null, direction: "asc"});
    const handleSort = (column) => {
        setSortConfig(prev =>
            prev.key === column
                ? { key: column, direction: prev.direction === "asc" ? "desc" : "asc" }
                : { key: column, direction: "asc" }
        );
    };

    const filteredAcciones = finalAcciones.filter(a =>
        a.capitanName?.toLowerCase().includes(filterCapitan.toLowerCase()) &&
        a.actionType?.toLowerCase().includes(filterActionType.toLowerCase())
    );

    const sortedAcciones = [...filteredAcciones].sort((a, b) => {
        if (!sortConfig.key) return 0;
        const valueA = a[sortConfig.key] || "";
        const valueB = b[sortConfig.key] || "";
        return sortConfig.direction === "asc"
            ? valueA.localeCompare(valueB)
            : valueB.localeCompare(valueA);
    });

    return (<>
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
                width: '80%'
            }}
            >
                <Grid container spacing={2} direction={'column'}>
                    <Grid item xs={1}>
                        Acciones
                    </Grid>
                    <Grid item>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    label="Filtrar por Caudillo"
                                    value={filterCapitan}
                                    onChange={e => setFilterCapitan(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Filtrar por Acción"
                                    value={filterActionType}
                                    onChange={e => setFilterActionType(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={10}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell padding='none' align="center">#</TableCell>
                                    <TableCell padding='none' align="center">
                                        <TableSortLabel
                                            active={sortConfig.key === "capitanName"}
                                            direction={sortConfig.key === "capitanName" ? sortConfig.direction : "asc"}
                                            onClick={() => handleSort("capitanName")}>
                                            Caudillo
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell padding='none' align="center">
                                        <TableSortLabel
                                            active={sortConfig.key === "actionType"}
                                            direction={sortConfig.key === "actionType" ? sortConfig.direction : "asc"}
                                            onClick={() => handleSort("actionType")}>
                                            Acción
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell padding='none' align="center">
                                        <TableSortLabel
                                            active={sortConfig.key === "gameRegionName"}
                                            direction={sortConfig.key === "gameRegionName" ? sortConfig.direction : "asc"}
                                            onClick={() => handleSort("gameRegionName")}>
                                            Región
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell padding='none' align="center">
                                        <TableSortLabel
                                            active={sortConfig.key === "gameSubregionName"}
                                            direction={sortConfig.key === "gameSubregionName" ? sortConfig.direction : "asc"}
                                            onClick={() => handleSort("gameSubregionName")}>
                                            Subregión
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell padding='none' align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {sortedAcciones?.map((accion, index) =>

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
                                            onChange={(e) => toggleActionCheck(accion.id, e.target.checked)}
                                        />
                                    </TableRow>)}
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
    </>);
};

export default AccionesMilitares;