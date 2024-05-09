import React, {useContext, useState} from 'react'
import {Button, Grid} from '@mui/material'
import PlanificarRutaComercialModal from "./modals/PlanificarRutaComercialModal.jsx";
import LogsModal from "../../common/LogsModal.jsx";
import ComprarRecursosModal from "./modals/ComprarRecursosModal.jsx";
import EntregarRecursosModal from "./modals/EntregarRecursosModal.jsx";
import {MercaderContext} from "../Context.jsx";

const Acciones = () => {

    const { playerData} = useContext(MercaderContext);

    //Comprar recursos
    const [openComprarRecursosModal, setComprarRecursosModal] = useState(false);
    const handleOpenComprarRecursosModal = () => {
        setComprarRecursosModal(true);
    }
    const handleCloseComprarRecursosModal = () => {
        setComprarRecursosModal(false);
    }
    //Entregar recursos
    const [openEntregarRecursosModal, setOpenEntregarRecursosModal] = useState(false);
    const handleOpenEntregarRecursosModal = () => {
        setOpenEntregarRecursosModal(true);
    }
    const handleCloseEntregarRecursosModal = () => {
        setOpenEntregarRecursosModal(false);
    }
    //Ruta
    const [openRutaModal, setOpenRutaModal] = useState(false);
    const handleOpenRutaModal = () => {
        setOpenRutaModal(true);
    }
    const handleCloseRutaModal = () => {
        setOpenRutaModal(false);
    }
    //Logs
    const [openLogsModal, setOpenLogsModal] = useState(false);
    const handleOpenLogsModal = () => {
        setOpenLogsModal(true);
    }
    const handleCloseLogsModal = () => {
        setOpenLogsModal(false);
    }

    return (
        <Grid container direction={'column'} alignItems={'flex-end'} spacing={2}>
            <Grid item>
                <Button onClick={handleOpenComprarRecursosModal} size="medium" variant='contained' color='warning'>Comprar recursos</Button>
            </Grid>
            <Grid item>
                <Button onClick={handleOpenEntregarRecursosModal} size="medium" variant='contained' color='warning'>Entregar recursos</Button>
            </Grid>
            <Grid item>
                <Button onClick={handleOpenRutaModal} size="medium" variant='contained' color='warning'>Planificar Ruta Comercial</Button>
            </Grid>
            <Grid item>
                <Button onClick={handleOpenLogsModal} size="medium" variant='contained' color='warning'>Abrir historial</Button>
            </Grid>
            <ComprarRecursosModal
                open={openComprarRecursosModal}
                handleClose={handleCloseComprarRecursosModal}
            />
            <EntregarRecursosModal
                open={openEntregarRecursosModal}
                handleClose={handleCloseEntregarRecursosModal}
            />
            <PlanificarRutaComercialModal
                open={openRutaModal}
                handleClose={handleCloseRutaModal}
            />
            <LogsModal
                open={openLogsModal}
                handleClose={handleCloseLogsModal}
                logs={playerData?.historial}
            />

        </Grid>
    )
}

export default Acciones