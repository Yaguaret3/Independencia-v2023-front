import React, {useEffect, useState} from 'react';
import {Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import SingleAttributeEdit from "../../SingleAttributeEdit.jsx";
import service from "../../../Service.js";
import TableInput from "../../../../common/TableInput.jsx";
import CrearNuevoEjercitoModal from "./CrearNuevoEjercitoModal.jsx";
import MoveCampModal from "./MoveCampModal.jsx";

const CapitanComponentForPlayerEdit = ({player}) => {

    const [ejercitos, setEjercitos] = useState([{}]);
    const [modificaciones, setModificaciones] = useState(false)

    useEffect(() => {

        const ej = player?.armies.map(e => ({...e}))
        const ejercitosConModif = ej.map(e => {

            return{
                ...e,
                milicias: {
                    data: e.milicias,
                    modif: false
                }
            }
        });
        setEjercitos(ejercitosConModif);
    }, []);

    const handleActualizarReserva = ({newValue}) => {
        service.updateReserve({value:newValue, playerId:player.id});
    }

    const handleInputChange = ({event, id}) => {
        const attribute = event.target.name;
        const newValue = event.target.value;

        const updatedEjercitos = [...ejercitos].map(ej => {

            if (id === ej.id) {
                return {
                    ...ej,
                    [attribute]: {data:newValue,
                                 modificado:parseInt(newValue) !== player.armies.find(a => a.id === id)[attribute]},
                    modif: parseInt(newValue) !== player.armies.find(a => a.id === id)[attribute]
                };
            }
            return ej;
        });

        setModificaciones(updatedEjercitos.filter(e => e.modif).length > 0)
        setEjercitos(updatedEjercitos);
    }

    const handleGrabarEjercitos = () => {

        ejercitos.forEach(e => {
            if(e.modif){
                service.assignMilitiaToArmy({armyId:e.id, milicias:e.milicias.data})
            }
        });
    }
    const handleBorrarEjercito = ({army}) => {

        if(confirm('¿Desea borrar el ejército de ' + army.capitanName + ' en ' + army.gameSubRegionName)){
            service.deleteArmy({armyId:army.id});
        }

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

    const [openMoveCampModal, setOpemMoveCampModal] = useState(false);
    const handleOpenMoveCampModal = () => {
        setOpemMoveCampModal(true);
    }
    const handleCloseMoveCampModal = () => {
        setOpemMoveCampModal(false);
    }
    const handleMoveCampService = ({gameSubregionId}) => {
        service.moveCamp({playerId:player.id, gameSubregionId:gameSubregionId});
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
                            <TableCell align="center">Ejército en</TableCell>
                            <TableCell align="center">Milicias</TableCell>
                            <TableCell align="center">Borrar</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {player?.armies.map(ejercito => (
                            <TableRow key={ejercito.id}>
                                <TableCell align="center" component="th" scope="row">
                                    {ejercito?.gameSubRegionName}
                                </TableCell>
                                <TableCell align="center">
                                    <TableInput name='milicias'
                                                value={{data:ejercito?.milicias}}
                                                onChange={(e) => handleInputChange({
                                        id:ejercito.id,
                                        event:e
                                    })} />
                                </TableCell>
                                <TableCell align="center" component="th" scope="row">
                                    <Button onClick={() => handleBorrarEjercito({army:ejercito})}
                                            size="small" variant='contained' color='warning' fullWidth> --- </Button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid item xs={12}>
                <Button onClick={handleGrabarEjercitos}
                        disabled={!modificaciones}
                        size="small" variant='contained' color='warning' fullWidth>Grabar Ejércitos</Button>
            </Grid>
            <Grid item xs={12}>
                <Button onClick={handleOpenCrearNuevoEjercitoModal}
                        size="small" variant='contained' color='warning' fullWidth>Asignar Nuevo Ejército</Button>
            </Grid>
            <Grid item xs={12}>
                <Button onClick={handleOpenMoveCampModal}
                        size="small" variant='contained' color='warning' fullWidth>Mover campamento</Button>
            </Grid>
            <CrearNuevoEjercitoModal
                open={openCrearNuevoEjercitoModal}
                handleClose={handleCloseCrearNuevoEjercitoModal}
                handleCrearNuevoEjercito={handleCrearNuevoEjercito}
            />
            <MoveCampModal
                open={openMoveCampModal}
                handleClose={handleCloseMoveCampModal}
                handleService={handleMoveCampService}
            />
        </>
    );
};

export default CapitanComponentForPlayerEdit;