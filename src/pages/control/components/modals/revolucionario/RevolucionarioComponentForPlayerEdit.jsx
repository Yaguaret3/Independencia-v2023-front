import React, {useEffect, useState} from 'react';
import {Autocomplete, Button, Grid, TextareaAutosize, TextField} from "@mui/material";
import SingleAttributeEdit from "../../SingleAttributeEdit.jsx";
import service from "../../../Service.js";
import RepresentationCard from "../../../../common/RepresentationCard.jsx";

const RevolucionarioComponentForPlayerEdit = ({player}) => {

    const handleActualizarPlata = ({newValue}) => {
        service.updatePlata({gobernadorId: player.id, value: newValue});
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

    const handleActualizarVoto = () => {

        const vote = player?.congreso?.votations?.find(v => v.active).votos?.find(v => v.revolucionarioName === player.username);

        service.updateVote({voteId: vote.id, newValue: newVoteValue.value});
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
                                              placeholder={'Propuesta Activa'}
                                              style={{width: "100%"}}
                                              value={'Propuesta Activa: ' + player?.congreso?.votations?.find(v => v.active)?.propuesta}/>
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
                                <RepresentationCard ciudad={r.ciudad} poblacion={r.poblacion}/>
                            </Grid>)
                        })}
                    </Grid>


                    <Button onClick={handleActualizarVoto}
                            size="small" variant='contained' color='warning' fullWidth
                            disabled={!newVoteValue || newVoteValue === player?.congreso?.votations?.find(v => v.active).votos.find(v => v.revolucionarioName === player.username)}>
                        Actualizar voto</Button>
                </Grid>
            </Grid>
        </>
    );
};

export default RevolucionarioComponentForPlayerEdit;