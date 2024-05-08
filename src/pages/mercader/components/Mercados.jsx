import React, {useContext, useState} from 'react'
import { MercaderContext } from '../Context';
import { Typography, Grid, Button } from '@mui/material';
import MarketCard from '../../common/MarketCard';
import PlanificarRutaComercialModal from "./modals/PlanificarRutaComercialModal.jsx";
import LogsModal from "../../common/LogsModal.jsx";

const Mercados = () => {

    const { playerData } = useContext(MercaderContext)
    const [openModal, setOpenModal] = useState(false);

    const handleButton = () => {
        handleOpen();
    }

    const handleOpen = () => {
        setOpenModal(true);
    }

    const handleClose = () => {
        setOpenModal(false);
    }
    const [openLogsModal, setOpenLogsModal] = useState(false);
    const handleOpenLogsModal = () => {
        setOpenLogsModal(true)
    }
    const handleCloseLogsModal = () => {
        setOpenLogsModal(false);
    }

    return (
        <>
            <Grid container direction="row"
                justifyContent="space-evenly"
                spacing={2}>

                <Grid item xs={12}>
                    <Typography textAlign={'center'}>
                        Mercados
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Grid container justifyContent={'center'}>
                        {playerData.mercados?.map((mercado) => (
                            <Grid item xs={6} key={mercado.id}>
                                <MarketCard level={mercado.level} cityName={mercado.cityName} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <Button onClick={handleButton} size="medium" variant='contained' color='warning'>Planificar Ruta Comercial</Button>
                </Grid>
                <Grid item xs={12} >
                    <Button onClick={handleOpenLogsModal} size="medium" variant='contained' color='warning'>Abrir Historial</Button>
                </Grid>
            </Grid>
            <PlanificarRutaComercialModal
                open={openModal}
                handleClose={handleClose}
                markets={playerData.mercados}
            />
            <LogsModal
                open={openLogsModal}
                handleClose={handleCloseLogsModal}
                logs={playerData?.historial}
                />
        </>
    )
}

export default Mercados