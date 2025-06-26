import React, {useContext, useState} from 'react';
import service from '../../Service'
import {
    Box,
    Button,
    Grid,
    Modal,
    Table, TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@mui/material";
import BattleCard from "../../../common/BattleCard.jsx";
import AsignarMiliciasModal from "./AsignarMiliciasModal.jsx";
import {CapitanContext} from "../../Context.jsx";
import useWebSocket from "../../../../hooks/useWebSocket.jsx";
import EnviarOrdenBatallaModal from "./EnviarOrdenBatallaModal.jsx";

const SingleBattleModal = ({open, handleClose, batalla, player}) => {

    const {stompClient} = useContext(CapitanContext);
    const {disparoCapitanes, disparoControl} = useWebSocket({});

    const [openAsignacionMiliciasModal, setOpenAsignacionMiliciasModal] = useState(false);
    const handleOpenAsignacionMiliciasModal = () => {
        setOpenAsignacionMiliciasModal(true);
    }
    const handleCloseAsignacionMiliciasModal = () => {
        setOpenAsignacionMiliciasModal(false);
    }
    const [openEnviarOrdenBatallaModal, setOpenEnviarOrdenBatallaModal] = useState(false);
    const handleOpenEnviarOrdenBatallaModal = () => {
        setOpenEnviarOrdenBatallaModal(true);
    }
    const handleCloseEnviarOrdenBatallaModal = () => {
        setOpenEnviarOrdenBatallaModal(false);
    }

    const handlePlayBattleCardService = async ({cardSelected}) => {

        await service.playBattleCard({cardId: cardSelected?.id, battleId: batalla.id});
        disparoCapitanes({stompClient:stompClient});
        disparoControl({stompClient:stompClient});
    }


    const handleAssignMilitiaService = async ({milicia}) => {
        if(milicia > player?.reserva){
            alert('Reserva insuficiente');
            return;
        }
        confirm('¿Estás seguro? Una vez asignada la milicia no se puede re-asignar para esta batalla');
        await service.assignMilitia({militia: milicia, battleId: batalla.id})
        disparoCapitanes({stompClient:stompClient});
        disparoControl({stompClient:stompClient});
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
                        <Grid item xs={2}>
                            Batalla en {batalla?.subregionName}
                        </Grid>
                        <Grid item>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell padding='none' align="center">
                                            Capitán
                                        </TableCell>
                                        {batalla?.combatientes?.map(c =>
                                            <TableCell padding='none' align="center" key={c.id}>
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
                                        {batalla?.combatientes?.map(c =>
                                            <TableCell padding='none' align="center" key={c.id}>
                                                {c.milicias}
                                            </TableCell>
                                        )}
                                    </TableRow>
                                    <TableRow>
                                        <TableCell padding='none' align="center">
                                            Ataque inicial
                                        </TableCell>
                                        {batalla?.combatientes?.map(c =>
                                            <TableCell padding='none' align="center" key={c.id}>
                                                {c.valorAzar || 0}
                                            </TableCell>
                                        )}
                                    </TableRow>
                                    <TableRow>
                                        <TableCell padding='none' align="center">
                                            Órdenes de batalla
                                        </TableCell>
                                        {batalla?.combatientes?.map(c =>
                                            <TableCell padding='none' align="center" key={c.id}>
                                                {c.cartasJugadas?.map(o =>
                                                    <div><BattleCard battleCardName={o.nombre}
                                                                     descripcion={o.descripcion}/></div>
                                                )}
                                            </TableCell>
                                        )}
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Grid>
                        <Grid item>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Button onClick={handleOpenAsignacionMiliciasModal}
                                            size="small" variant='contained' color='warning' fullWidth>
                                        Asignar milicia a la batalla
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button onClick={handleOpenEnviarOrdenBatallaModal}
                                            size="small" variant='contained' color='warning' fullWidth>
                                        Ordenar acción
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
            <AsignarMiliciasModal
                    open={openAsignacionMiliciasModal}
                    handleClose={handleCloseAsignacionMiliciasModal}
                    handleService={handleAssignMilitiaService}
            />
            <EnviarOrdenBatallaModal
                open={openEnviarOrdenBatallaModal}
                handleClose={handleCloseEnviarOrdenBatallaModal}
                handleService={handlePlayBattleCardService}
                battleCards={player?.battleCards}
                />
        </>
    );
};

export default SingleBattleModal;