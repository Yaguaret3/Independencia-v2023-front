import React, {useContext, useState} from 'react'
import {Button, Grid} from '@mui/material'
import Congreso from './Congreso'
import LogsModal from "../../common/LogsModal.jsx";
import {RevolucionarioContext} from "../Context.jsx";

const Acciones = () => {

    const {playerData} = useContext(RevolucionarioContext);

    const [openLogsModal, setOpenLogsModal] = useState(false);
    const handleOpenLogsModal = () => {
        setOpenLogsModal(true);
    }
    const handleCloseLogsModal = () => {
        setOpenLogsModal(false);
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={11}>
                    <Congreso/>
                </Grid>
                <Grid item xs={1}>
                    <Button onClick={handleOpenLogsModal}
                            size="small" variant='contained' color='warning'>
                        Abrir Historial
                    </Button>
                </Grid>
            </Grid>
            <LogsModal
                open={openLogsModal}
                handleClose={handleCloseLogsModal}
                logs={playerData?.historial}
            />
        </>
    )
}

export default Acciones