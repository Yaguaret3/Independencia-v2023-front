import React, {useState} from 'react';
import {Autocomplete, Button, Grid, TextareaAutosize, TextField} from "@mui/material";
import SingleAttributeEdit from "../../SingleAttributeEdit.jsx";
import service from "../../../Service.js";
import RepresentationCard from "../../../../common/RepresentationCard.jsx";

const RevolucionarioComponentForPlayerEdit = ({player}) => {

    const handleActualizarPlata = ({newValue}) => {
        service.updatePlata({gobernadorId:player.id, value:newValue});
    }

    const voteValues = [
        {
            descripcion:"A favor",
            value:"A_FAVOR"
        },
        {
            descripcion:"Se abstiene",
            value:"SE_ABSTIENE"
        },
        {
            descripcion:"En contra",
            value: "EN_CONTRA"
        }];

    const [newVoteValue, setNewVoteValue] = useState(player?.congreso?.votations?.find(v => v.active).votos.find(v => v.revolucionarioName === player.username));

    const handleNewVoteSelected = ({newValue}) => {
        setNewVoteValue(newValue.descripcion);
    }

    const handleActualizarVoto = () => {

        const vote = player?.congreso?.votations?.find(v => v.active).votos.find(v => v.revolucionarioName === player.username);

        service.updateVote({voteId:vote.id, newValue:newVoteValue});
    }

    return (
        <>
        <Grid item xs={12}>
            <Grid container spacing={2}>
                <SingleAttributeEdit nombre={'Plata'} valorActual={player?.plata} handleActualizar={handleActualizarPlata}/>
            </Grid>
            <Grid item xs={12}>
                <TextareaAutosize placeholder={'Propuesta Activa'}
                                  value={player?.congreso?.votations?.find(v => v.active).propuesta}/>
                <Autocomplete
                    disablePortal
                    getOptionLabel={(option) => option.descripcion}
                    options={voteValues}
                    value={newVoteValue}
                    disabled={!newVoteValue}
                    onChange={(event, newOption) => {
                        handleNewVoteSelected(newOption);
                    }}
                    inputValue={newVoteValue}
                    renderInput={(params) => <TextField {...params} label="Voto" />}
                />
                {player?.congreso?.votations?.find(v =>v.active).votos.find(v => v.revolucionarioName === player.username).representacionResponse.map(r => {
                    return <RepresentationCard key={r.id} ciudad={r.ciudad} poblacion={r.poblacion}/>
                })}

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