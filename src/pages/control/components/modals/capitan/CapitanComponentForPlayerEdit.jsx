import React, {useState} from 'react';
import {Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import SingleAttributeEdit from "../../SingleAttributeEdit.jsx";
import service from "../../../Service.js";
import TableInput from "../../../../common/TableInput.jsx";
import CrearNuevoEjercitoModal from "./CrearNuevoEjercitoModal.jsx";

const CapitanComponentForPlayerEdit = ({player}) => {

    const [ejercitos, setEjercitos] = useState(player.armies);
    const [modificaciones, setModificaciones] = useState(false)

    const handleActualizarReserva = ({newValue}) => {
        service.updateReserve({value:newValue, playerId:player.id});
    }

    const handleInputChange = ({event, id}) => {
        const attribute = event.target.name;
        const newValue = event.target.value;

        const updateEjercitos = [...ejercitos].map(ej => {

            if (id === ej.id) {
                return {
                    ...rowData,
                    [attribute.data]: newValue,
                                    modificado:newValue !== ej[attribute],
                    modif: newValue !== ej[attribute]
                };
            }
            return rowData;
        });

        setModificaciones(!ejercitos.filter(e => e.modif))
        setEjercitos(updateEjercitos);
    }
    const handleGrabarEjercitos = () => {

        ejercitos.forEach(e => {
            if(e.modif){
                service.assignMilitiaToArmy({id:e.id, militia:e.milicias})
            }
        });
    }
    const handleBorrarEjercito = ({army}) => {

        confirm('¿Desea borrar el ejército de ' + army.capitanName + ' en ' + army.gameSubRegionName);
        service.deleteArmy(army.id);
    }
    const [openCrearNuevoEjercitoModal, setOpenCrearNuevoEjercitoModal] = useState(false);

    const handleOpenCrearNuevoEjercitoModal = () => {
        setOpenCrearNuevoEjercitoModal(true);
    }
    const handleCloseCrearNuevoEjercitoModal = () => {
        setOpenCrearNuevoEjercitoModal(false);
    }
    const handleCrearNuevoEjercito = ({subregionId, milicias}) => {

        service.createNewArmy({capitanId:player.id, subregionId:subregionId, milicias:milicias});
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>

                    <Grid container spacing={2}>
                        <SingleAttributeEdit nombre={'Reserva'} valorActual={player?.reserva} handleActualizar={handleActualizarReserva}/>

                    </Grid>
                </Grid>
            </Grid>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Ejército en</TableCell>
                            <TableCell align="right">Milicias</TableCell>
                            <TableCell align="right">Borrar</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {player?.armies.map(ejercito => (
                            <TableRow key={ejercito.id}>
                                <TableCell align="left" component="th" scope="row">
                                    {ejercito?.gameSubRegionName}
                                </TableCell>
                                <TableCell align="right">
                                    <TableInput name='milicias' value={ejercito?.milicias} onChange={(e) => handleInputChange({
                                        id:ejercito.id,
                                        event:e
                                    })} />
                                    <TableInput name='' value='-' onChange={() => handleBorrarEjercito({
                                        army:ejercito
                                    })} />
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid item xs={12}>
                <Button onClick={handleGrabarEjercitos}
                        disabled={modificaciones}
                        size="small" variant='contained' color='warning' fullWidth>Grabar Ejércitos</Button>
            </Grid>
            <Grid item xs={12}>
                <Button onClick={handleOpenCrearNuevoEjercitoModal}
                        size="small" variant='contained' color='warning' fullWidth>Asignar Nuevo Ejército</Button>
            </Grid>
            <CrearNuevoEjercitoModal
                open={openCrearNuevoEjercitoModal}
                handleClose={handleCloseCrearNuevoEjercitoModal}
                handleCrearNuevoEjercito={handleCrearNuevoEjercito}
            />
        </>
    );
};

export default CapitanComponentForPlayerEdit;