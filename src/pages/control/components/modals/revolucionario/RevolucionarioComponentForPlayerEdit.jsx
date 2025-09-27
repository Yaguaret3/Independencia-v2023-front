import React, {useContext, useState} from 'react';
import {Autocomplete, Button, Grid, TextareaAutosize, TextField} from "@mui/material";
import SingleAttributeEdit from "../../SingleAttributeEdit.jsx";
import service from "../../../Service.js";
import RepresentationCard from "../../../../common/RepresentationCard.jsx";
import useWebSocket from "../../../../../hooks/useWebSocket.jsx";
import {ControlContext} from "../../../Context.jsx";
import MoverDeCongresoModal from "./MoverDeCongresoModal.jsx";

const RevolucionarioComponentForPlayerEdit = ({player}) => {

    const {disparoRevolucionarios, disparoControl} = useWebSocket({});
    const {stompClient} = useContext(ControlContext);

    const handleActualizarPlata = async ({newValue}) => {
        await service.updatePlata({gobernadorId: player.id, value: newValue});
        disparoControl({stompClient:stompClient});
        disparoRevolucionarios({stompClient:stompClient});
    }

    const voteValues = [
        {
            descripcion: "A favor",
            value: "A_FAVOR"
        },
        {
            descripcion: "Se abstiene",
            value: "SE_ABSTIENE"
        },
        {
            descripcion: "En contra",
            value: "EN_CONTRA"
        }];

    const [newVoteValue, setNewVoteValue] = useState(
        voteValues.find(vv => {
            return player?.congreso?.votations?.find(v => v.active)?.votos?.find(v => v.revolucionarioName === player.username)?.voteType === vv.descripcion;
        }));
    const handleNewVoteSelected = ({newValue}) => {
        setNewVoteValue(newValue);
    }

    const [labelNewVoteValue, setLabelNewVoteValue] = useState(newVoteValue?.descripcion);
    const handleLabelNewVoteValueSelected = ({newValue}) => {
        setLabelNewVoteValue(newValue);
    }

    const handleActualizarVoto = async () => {

        const vote = player?.congreso?.votations?.find(v => v.active).votos?.find(v => v.revolucionarioName === player.username);

        await service.updateVote({voteId: vote.id, newValue: newVoteValue.value});
        disparoControl({stompClient:stompClient});
        disparoRevolucionarios({stompClient:stompClient});
    }

    const [openMoverDeCongresoModal, setOpenMoverDeCongresoModal] = useState(false);
    const handleOpenMoverDeCongresoModal = () => {
        setOpenMoverDeCongresoModal(true);
    }
    const handleCloseMoverDeCongresoModal = () => {
        setOpenMoverDeCongresoModal(false);
    }
    const handleMoverDeCongresoService = async ({congresoId}) => {
        await service.moveToCongress({playerId:player.id, congresoId:congresoId});
        disparoControl({stompClient:stompClient});
        disparoRevolucionarios({stompClient:stompClient});
    }

    return (
        <>
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    <SingleAttributeEdit nombre={'Plata'} valorActual={player?.plata}
                                         handleActualizar={handleActualizarPlata}/>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextareaAutosize readOnly={true}
                                              style={{width: "100%"}}
                                              value={'Propuesta Activa: ' + (player?.congreso?.votations?.find(v => v.active)?.propuesta || '')}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Autocomplete
                                disablePortal
                                getOptionLabel={(option) => option.descripcion}
                                options={voteValues}
                                value={newVoteValue}
                                disabled={newVoteValue === undefined}
                                onChange={(event, newOption) => {
                                    handleNewVoteSelected({newValue: newOption});
                                }}
                                inputValue={labelNewVoteValue}
                                onInputChange={(event, newInputValue) => {
                                    handleLabelNewVoteValueSelected({newValue: newInputValue});
                                }}
                                renderInput={(params) => <TextField {...params} label="Voto"/>}
                            />
                        </Grid>

                        {/*TODO VERIFICAR QUE MOSTRAR LAS CARTAS DE REPRESENTACION SÍ HACE FALTA Y QUE NO ES SUFICIENTE CON LAS CARTAS AL COSTADO */}

                        {player?.congreso?.votations?.find(v => v.active)?.votos.find(v => v.revolucionarioName === player.username)?.representacionResponse.map(r => {
                            return (<Grid item xs={4} key={r.id}>
                                <RepresentationCard ciudad={r.ciudad} poblacion={r.poblacion} prestigio={r?.prestigio}/>
                            </Grid>)
                        })}
                    </Grid>

                    <Button onClick={handleActualizarVoto}
                            size="small" variant='contained' color='warning' fullWidth
                            disabled={!newVoteValue || newVoteValue === player?.congreso?.votations?.find(v => v.active).votos.find(v => v.revolucionarioName === player.username)}>
                        Actualizar voto</Button>
                    <Button onClick={handleOpenMoverDeCongresoModal}
                            size="small" variant='contained' color='warning' fullWidth>
                        Cambiar de congreso</Button>
                </Grid>
            </Grid>
            <MoverDeCongresoModal
                open={openMoverDeCongresoModal}
                handleClose={handleCloseMoverDeCongresoModal}
                handleService={handleMoverDeCongresoService}
                />
        </>
    );
};

export default RevolucionarioComponentForPlayerEdit;