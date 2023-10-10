import React, { useContext, useState } from 'react'
import { Grid, Button } from '@mui/material'
import { CapitanContext } from '../Context'
import CambiarRegionModal from "./modals/CambiarRegionModal.jsx";
import OrdenarAccionModal from "./modals/OrdenarAccionModal.jsx";

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
    //Jugar Carta de Acción
    const [openOrdenarAccionModal, setOpenOrdenarAccionModal] = useState(false);
    const handleOpenOrdenarAccionModal = () => {
        setOpenOrdenarAccionModal(true)
    }
    const handleCloseOrdenarAccionModal = () => {
        setOpenOrdenarAccionModal(false);
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
                        Trasladar campamento
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={handleOpenOrdenarAccionModal}
                            size="small" variant='contained' color='warning' >
                        Trasladar campamento
                    </Button>
                </Grid>

            </Grid>
            <CambiarRegionModal
                open={openCambiarRegionModal}
                handleClose={handleCloseCambiarRegionModal}
                regions={gameData?.gameRegionsTiny}
                cards={playerData?.actionCards?.filter(c => c.actionType === 'MOVIMIENTO')}
            />
            <OrdenarAccionModal
                open={openOrdenarAccionModal}
                handleClose={handleCloseOrdenarAccionModal}
                cards={playerData?.actionCards}
                subregions={gameData?.gameRegion?.subregions}
            />
        </>
    )
}

export default Botones