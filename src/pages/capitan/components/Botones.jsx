import React, { useContext, useState } from 'react'
import { Grid, Button } from '@mui/material'
import { CapitanContext } from '../Context'
import CambiarRegionModal from "./modals/CambiarRegionModal.jsx";

const Botones = () => {

    //Context
    const { gameData, playerData } = useContext(CapitanContext)

    //Entregar Mercado
    const [openCambiarRegionModal, setOpenCambiarRegionModal] = useState(false);
    const handleOpenCambiarRegionModal = () => {
        setOpenCambiarRegionModal(true)
    }
    const handleCloseCambiarRegionModal = () => {
        setOpenEntregarMercadoModal(false);
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
                    <Button onClick={handleOpenCambiarRegionModal}
                        size="small" variant='contained' color='warning' >
                        Entregar Mercado
                    </Button>
                </Grid>

            </Grid>
            <CambiarRegionModal
                open={openCambiarRegionModal}
                handleClose={handleCloseCambiarRegionModal}
                regions={gameData?.gameRegionsTiny}
            />
        </>
    )
}

export default Botones