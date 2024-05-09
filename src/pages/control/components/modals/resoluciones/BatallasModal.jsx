import React, {useContext, useEffect, useState} from 'react';
import {ControlContext} from "../../../Context.jsx";
import {
    Autocomplete,
    Box,
    Button,
    Grid,
    Modal,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import SingleBatallaModal from "./SingleBatallaModal.jsx";

const BatallasModal = ({open, handleClose}) => {

    const {gameData} = useContext(ControlContext);

    const [filtro, setFiltro] = useState({});
    const [labelFiltro, setLabelFiltro] = useState('');

    const [batallasFiltradas, setBatallasFiltradas] = useState([]);

    const handleSelectFiltro = ({newValue}) => {
        setFiltro(newValue);

        //filtrar batallas
        let newBatallas = gameData?.batallas?.filter(s => s.regionId === newValue.id);
        setBatallasFiltradas(newBatallas || []);
    }
    const handleSelectFiltroLabel = ({newValue}) => {
        setLabelFiltro(newValue);
    }

    useEffect(() => {

        const batallas = gameData?.batallas;
        setBatallasFiltradas(batallas);

        if ((batallaSelected !== undefined)) {
            const selected = gameData?.batallas?.find((p) => p.id === batallaSelected.id)
            setBatallaSelected(selected);
        }

    }, [gameData]);

    const [batallaSelected, setBatallaSelected] = useState();
    const [openSingleBatallaModal, setOpenSingleBatallaModal] = useState(false);
    const handleOpenSingleBatallaModal = ({batalla}) => {
        setBatallaSelected(batalla);
        setOpenSingleBatallaModal(true);
    }
    const handleCloseSingleBatallaModal = () => {
        setBatallaSelected(undefined);
        setOpenSingleBatallaModal(false);
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
                    borderRadius: 3,
                    width: '80%'
                }}
                >

                    <Grid container spacing={2} direction={'column'}>
                        <Grid item>
                            <Grid container spacing={2}>
                                <Grid item xs={2}>
                                    Batallas
                                </Grid>
                                <Grid item xs={10}>
                                    <Autocomplete
                                        disablePortal
                                        getOptionLabel={(option) => option.name || ''}
                                        options={gameData?.gameRegions}
                                        value={filtro}
                                        onChange={(event, newOption) => {
                                            handleSelectFiltro({newValue: newOption});
                                        }}
                                        inputValue={labelFiltro}
                                        onInputChange={(event, newInputValue) => {
                                            handleSelectFiltroLabel({newValue: newInputValue});
                                        }}
                                        renderInput={(params) => <TextField {...params} label="Filtrar por Región"/>}
                                    />
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell padding='none' align="center">Subregión</TableCell>
                                        <TableCell padding='none' align="center">Capitanes</TableCell>
                                        <TableCell padding='none' align="center">Entrar</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {batallasFiltradas?.map(b =>
                                        <TableRow key={b.id}>
                                            <TableCell padding='none' align="center">
                                                {b.subregionName}
                                            </TableCell>
                                            <TableCell padding='none' align="center">
                                                {b.combatientes?.map(c => c.capitanName).join(", ")}
                                            </TableCell>
                                            <TableCell padding='none' align="center">
                                                <Button onClick={() => handleOpenSingleBatallaModal({batalla: b})}
                                                        size="small" variant='contained' color='warning' fullWidth>
                                                    Ir
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
            <SingleBatallaModal
                open={openSingleBatallaModal}
                handleClose={handleCloseSingleBatallaModal}
                batalla={batallaSelected}
            />
        </>
    );
};

export default BatallasModal;