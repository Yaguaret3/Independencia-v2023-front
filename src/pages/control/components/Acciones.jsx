import React, {useContext, useState} from 'react';
import {Button, Grid} from "@mui/material";
import {ControlContext} from "../Context.jsx";
import PlayersModal from "./PlayersModal.jsx";

const Acciones = () => {

    //Context
    const { gameData, regionSelected } = useContext(ControlContext)

    //OpenModal
    const [openPlayersModal, setOpenPlayerModal] = useState(false);
    const handleOpenPlayersModal = () => {
        openPlayersModal(true)
    }
    const handleClosePlayersModal = () => {
        openPlayersModal(false);
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
                </Grid>
            </Grid>
            <PlayersModal
                open={openPlayersModal}
                handleClose={handleClosePlayersModal}
                players={gameData?.playersData}

            />
        </>
    )
};

export default Acciones;