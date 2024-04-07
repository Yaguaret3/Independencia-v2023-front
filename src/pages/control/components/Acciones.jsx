import React, {useContext, useState} from 'react';
import {Button, Grid} from "@mui/material";
import {ControlContext} from "../Context.jsx";
import PlayersModal from "./modals/PlayersModal.jsx";
import CongresosModal from "./modals/CongresosModal.jsx";

const Acciones = () => {

    //Context
    const { gameData, regionSelected } = useContext(ControlContext);

    //OpenModal
    const [openPlayersModal, setOpenPlayerModal] = useState(false);
    const handleOpenPlayersModal = () => {
        setOpenPlayerModal(true)
    }
    const handleClosePlayersModal = () => {
        setOpenPlayerModal(false);
    }
    const [openCongresosModal, setOpenCongresosModal] = useState(false);
    const handleOpenCongresosModal = () => {
        setOpenCongresosModal(true);
    }
    const handleCloseCongresosModal = () => {
        setOpenCongresosModal(false);
    }

    return (
        <>
            <Grid container
                  direction={'column'}
                  justifyContent={'space-between'}
                  alignItems={'flex-end'}
                  spacing={1}
            >
                <Grid item>
                    <Button onClick={handleOpenPlayersModal}
                            size="small" variant='contained' color='warning' >
                        Jugadores
                    </Button>
                    <Button onClick={handleOpenCongresosModal}
                            size="small" variant='contained' color='warning' >
                        Congresos
                    </Button>
                </Grid>
            </Grid>
            <PlayersModal
                open={openPlayersModal}
                handleClose={handleClosePlayersModal}
                players={gameData?.playersData}
            />
            <CongresosModal
                open={openCongresosModal}
                handleClose={handleCloseCongresosModal}
                congresos={gameData?.congresos}
            />
        </>
    )
};

export default Acciones;