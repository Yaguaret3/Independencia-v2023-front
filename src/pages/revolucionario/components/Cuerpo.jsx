import React, {useContext, useState} from 'react'
import {Box, Button, Grid} from '@mui/material'
import VirreinatoMap from "../../common/virreinatoMap/VirreinatoMap.jsx";
import {RevolucionarioContext} from '../Context'
import Cartas from "./Cartas.jsx";
import LogsModal from "../../common/LogsModal.jsx";
import Congreso from "./Congreso.jsx";

const Cuerpo = () => {

    const {gameData, playerData} = useContext(RevolucionarioContext);

    const [openLogsModal, setOpenLogsModal] = useState(false);
    const handleOpenLogsModal = () => {
        setOpenLogsModal(true);
    }
    const handleCloseLogsModal = () => {
        setOpenLogsModal(false);
    }

    return (
        <>
            <Box width={'100%'} maxHeight={'100vh'}>
                <Grid container maxHeight={'100vh'}>
                    <VirreinatoMap gameData={gameData} xs={9} xl={6}/>
                    <Grid item xs={3} xl={6}>
                        <Grid container spacing={2} direction={'column'}>
                            <Grid item>
                                <Congreso/>
                            </Grid>
                            <Grid item>
                                <Cartas/>
                            </Grid>
                            <Grid item>
                                <Button onClick={handleOpenLogsModal}
                                        size="small" variant='contained' color='warning' fullWidth>
                                    Abrir Historial
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Box>
            <LogsModal
                open={openLogsModal}
                handleClose={handleCloseLogsModal}
                logs={playerData?.historial}
            />
        </>
    )
}

export default Cuerpo