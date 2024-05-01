import {
    Table, TableContainer, TableHead, TableRow, TableCell, TableBody,
    TextField, Autocomplete, Button, Grid
} from '@mui/material'
import React, { useState, useContext, useEffect } from 'react'
import { RevolucionarioContext } from '../Context';
import RepresentationCard from '../../common/RepresentationCard';
import NuevaPropuestaModal from './modals/NuevaPropuestaModal';
import VotarModal from './modals/VotarModal';
import service from "../Service.js";
import {ControlContext} from "../../control/Context.jsx";
import useWebSocket from "../../../hooks/useWebSocket.jsx";

const Congreso = () => {

    const {stompClient} = useContext(RevolucionarioContext);
    const {disparoControl, disparoRevolucionarios} = useWebSocket({});

    const { playerData } = useContext(RevolucionarioContext);
    const [currentVotation, setCurrentVotation] = useState({});
    const [votation, setVotation] = useState({});
    const [labelVotationSelected, setLabelVotationSelected] = useState('');

    useEffect(() => {
        
        setCurrentVotation(playerData?.congreso?.votations.find(v => v.active))
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
    const handleCloseVotacion = async () => {
        if(confirm("¿Quiere cerrar la votación vigente definitivamente?")){
            await service.closeVotation();
            disparoControl({stompClient:stompClient});
            disparoRevolucionarios({stompClient:stompClient});
        }
    }

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Autocomplete
                        disablePortal
                        getOptionLabel={
                            (option) => handleOptionLabel(option)}
                        options={playerData?.congreso?.votations !== undefined ? playerData?.congreso?.votations : []}
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
                {(playerData?.congreso?.presidenteId === playerData.id) && <Grid item xs={4}>
                    <Button onClick={handleOpenNuevaPropuestaModal}
                            size="small" variant='contained' color='warning' fullWidth>
                        Nueva Propuesta
                    </Button>
                </Grid>}
                <Grid item xs={4}>
                    <Button onClick={handleOpenVotarModal}
                        disabled={!votation.active || (votation.votos.find(v => v.revolucionarioId === playerData.id) !== undefined)}
                        size="small" variant='contained' color='warning' fullWidth>
                        Votar
                    </Button>
                </Grid>
                {(playerData?.congreso?.presidenteId === playerData.id) && <Grid item xs={4}>
                    <Button
                        onClick={handleCloseVotacion}
                        size="small" variant='contained' color='warning' fullWidth>
                        Cerrar Votación
                    </Button>
                </Grid>}
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
                                {votation?.votos?.map((v) => (
                                    <TableRow key={v.id}>
                                        <TableCell>
                                            {v.revolucionarioName}
                                        </TableCell>
                                        <TableCell>
                                            {v.voteType}
                                        </TableCell>
                                        <TableCell>
                                            {v.representacionResponse?.map((c) => (
                                                <RepresentationCard key={c.id} poblacion={c.poblacion}
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