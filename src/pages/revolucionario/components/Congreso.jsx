import {
    Table, TableContainer, TableHead, TableRow, TableCell, TableBody,
    TextField, Autocomplete, Button, Grid
} from '@mui/material'
import React, { useState, useContext, useEffect } from 'react'
import { RevolucionarioContext } from '../Context';
import RepresentationCard from '../../controlComponents/RepresentationCard';
import NuevaPropuestaModal from './modals/NuevaPropuestaModal';
import VotarModal from './modals/VotarModal';

const Congreso = () => {

    const { playerData } = useContext(RevolucionarioContext);
    const [currentVotation, setCurrentVotation] = useState({});
    const [votation, setVotation] = useState({});
    const [labelVotationSelected, setLabelVotationSelected] = useState('');

    useEffect(() => {
        
        setCurrentVotation(playerData.congreso && playerData.congreso.votations.find(v => v.active))
      }, [playerData]);

    const handleVotationSelected = (newValue) => {
        setVotation(newValue);
    }
    const handleLabelVotationSelected = (newValue) => {
        setLabelVotationSelected(newValue);
    }
    const handleOptionLabel = (option) => {
        if (option.propuesta) {
            if (option.active) {
                return option.propuesta + ' - Activa';
            } else {
                return option.propuesta + ' - Cerrada';
            }
        } else {
            return '';
        }
    }

    const [openNuevaPropuestaModal, setNuevaPropuestaOpenModal] = useState(false);

    const handleOpenNuevaPropuestaModal = () => {
        setNuevaPropuestaOpenModal(true);
    }
    const handleCloseNuevaPropuestaModal = () => {
        setNuevaPropuestaOpenModal(false);
    }

    const [openVotarModal, setOpenVotarModal] = useState(false);
    const handleOpenVotarModal = () => {
        setOpenVotarModal(true);
    }
    const handleCloseVotarModal = () => {
        setOpenVotarModal(false);
    }

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Autocomplete
                        disablePortal
                        getOptionLabel={
                            (option) => handleOptionLabel(option)}
                        options={playerData && playerData.congreso ? playerData.congreso.votations : []}
                        value={votation}
                        onChange={(event, newValue) => {
                            handleVotationSelected(newValue);
                        }}
                        inputValue={labelVotationSelected}
                        onInputChange={(event, newInputValue) => {
                            handleLabelVotationSelected(newInputValue);
                        }}
                        renderInput={(params) => <TextField {...params} label="Votaciones" />}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={handleOpenNuevaPropuestaModal}
                        size="small" variant='contained' color='warning' fullWidth>
                        Nueva Propuesta
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={handleOpenVotarModal}
                        size="small" variant='contained' color='warning' fullWidth>
                        Votar
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button
                        size="small" variant='contained' color='warning' fullWidth>
                        Cerrar Votación
                    </Button>
                </Grid>
                <Grid item>
                    <TableContainer style={{ height: '100%', maxHeight: '100%', overflow: 'hidden', alignItems: 'center' }}>
                        <Table style={{ tableLayout: 'fixed' }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        Diputado
                                    </TableCell>
                                    <TableCell>
                                        A favor - En contra - Se abstiene
                                    </TableCell>
                                    <TableCell>
                                        Representación
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {votation.votos && votation.votos.map((v) => (
                                    <TableRow>
                                        <TableCell>
                                            {v.revolucionarioName}
                                        </TableCell>
                                        <TableCell>
                                            {v.voteType}
                                        </TableCell>
                                        <TableCell>
                                            {v.representacionResponse && v.representacionResponse.map((c) => (
                                                <RepresentationCard poblacion={c.poblacion}
                                                    ciudad={c.ciudad} />
                                            ))}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
            <NuevaPropuestaModal 
                open={openNuevaPropuestaModal}
                handleClose={handleCloseNuevaPropuestaModal}
            />
            <VotarModal 
                open={openVotarModal}
                handleClose={handleCloseVotarModal}
                currentVotation={currentVotation}
            />
        </>
    )
}

export default Congreso