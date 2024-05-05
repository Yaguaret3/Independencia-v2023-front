import React, {useContext, useEffect, useState} from 'react';
import {
    Autocomplete,
    Box, Button,
    Grid,
    Modal,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import BattleCard from "../../../../common/BattleCard.jsx";
import {ControlContext} from "../../../Context.jsx";
import useWebSocket from "../../../../../hooks/useWebSocket.jsx";
import service from "../../../Service.js";

const SingleBatallaModal = ({open, handleClose, batalla}) => {

    const [batallaEdit, setBatallaEdit] = useState({});

    const {stompClient} = useContext(ControlContext);
    const {disparoCapitanes, disparoControl, disparoTodos} = useWebSocket({});

    const handleMiliciasPerdidas = ({armyId, newValue}) => {

        let newList = batallaEdit?.combatientes || [];

        newList.forEach(a => {
            if (a.id === armyId) {
                a.miliciasPerdidas = newValue;
            }
        })
        setBatallaEdit(newList);
    }
    const toggleDestroy = ({armyId}) => {
        let newList = batallaEdit?.combatientes;

        newList.forEach(a => {
            if (a.id === armyId) {
                a.destruir = !a.destruir;
            }
        })

        let newBattle = {
            ...batallaEdit,
            combatientes:newList
        }
        setBatallaEdit(newBattle);
    }
    const handleRandomValuesService = async () => {
        await service.assignRandomValues({battleId: batallaEdit.id});
        disparoControl({stompClient:stompClient});
        disparoCapitanes({stompClient:stompClient});
    }
    const handleSolveBattleService = async () => {

        const resultados = batallaEdit?.combatientes?.map(c => {
            return {
                armyId: c.id,
                miliciasPerdidas: c.miliciasPerdidas === undefined ? 0 : c.miliciasPerdidas,
                destruido: c.destruir,
            }
        });

        await service.solveBattle({battleId: batallaEdit.id, resultados: resultados});
        disparoTodos({stompClient:stompClient});
        handleClose();
    }

    useEffect(() => {
        setBatallaEdit(batalla);
    }, [batalla]);

    return (
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
                    <Grid item xs={2}>
                        Batalla en {batallaEdit?.subregionName}
                    </Grid>
                    <Grid item>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell padding='none' align="center">
                                        Capitán
                                    </TableCell>
                                    {batallaEdit?.combatientes?.map(c =>
                                        <TableCell padding='none' align="center">
                                            {c.capitanName}
                                        </TableCell>
                                    )}

                                </TableRow>

                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell padding='none' align="center">
                                        Milicias involucradas
                                    </TableCell>
                                    {batallaEdit?.combatientes?.map(c =>
                                        <TableCell padding='none' align="center">
                                            {c.milicias}
                                        </TableCell>
                                    )}
                                </TableRow>
                                <TableRow>
                                    <TableCell padding='none' align="center">
                                        Ataque inicial
                                    </TableCell>
                                    {batallaEdit?.combatientes?.map(c =>
                                        <TableCell padding='none' align="center">
                                            {c.valorAzar}
                                        </TableCell>
                                    )}
                                </TableRow>
                                <TableRow>
                                    <TableCell padding='none' align="center">
                                        Órdenes de batalla
                                    </TableCell>
                                    {batallaEdit?.combatientes?.map(c =>
                                        <TableCell padding='none' align="center">
                                            {c.cartasDeCombate?.map(o =>
                                                <div><BattleCard battleCardName={o.nombre}/></div>
                                            )}
                                        </TableCell>
                                    )}
                                </TableRow>
                                <TableRow>
                                    <TableCell padding='none' align="center">
                                        Milicias perdidas
                                    </TableCell>
                                    {batallaEdit?.combatientes?.map(c =>
                                        <TableCell padding='none' align="center">
                                            <TextField
                                                value={c?.miliciasPerdidas}
                                                onChange={(event) => handleMiliciasPerdidas({
                                                    newValue: event.target.value,
                                                    armyId: c.id
                                                })}
                                            />
                                        </TableCell>
                                    )}
                                </TableRow>
                                <TableRow>
                                    <TableCell padding='none' align="center">
                                        ¿Ejército destruído?
                                    </TableCell>
                                    {batallaEdit?.combatientes?.map(c =>
                                        <TableCell padding='none' align="center">
                                            <Button onClick={() => toggleDestroy({armyId:c.id})}
                                                    size="small" variant='contained' color={c.destruir ? 'success' : 'error'} fullWidth>
                                                {c.destruir ? 'Destruir' : 'No destruir'}
                                            </Button>
                                        </TableCell>
                                    )}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Grid>
                    <Grid item>
                        <Button onClick={handleRandomValuesService}
                                size="small" variant='contained' color='warning' fullWidth>
                            Ataques iniciales al azar
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={handleSolveBattleService}
                                size="small" variant='contained' color='warning' fullWidth>
                            Resolver Batalla
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
        ;
};

export default SingleBatallaModal;