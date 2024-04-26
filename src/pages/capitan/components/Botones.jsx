import React, { useContext, useState } from 'react'
import { Grid, Button } from '@mui/material'
import { CapitanContext } from '../Context'
import CambiarRegionModal from "./modals/CambiarRegionModal.jsx";
import OrdenarAccionModal from "./modals/OrdenarAccionModal.jsx";
import ComprarCartaModal from "./modals/ComprarCartaModal.jsx";
import BatallasModal from "./modals/BatallasModal.jsx";

const Botones = () => {

    //Context
    const { gameData, playerData } = useContext(CapitanContext)

    //Entregar Mercado
    const [openCambiarRegionModal, setOpenCambiarRegionModal] = useState(false);
    const handleOpenCambiarRegionModal = () => {
        setOpenCambiarRegionModal(true)
    }
    const handleCloseCambiarRegionModal = () => {
        setOpenCambiarRegionModal(false);
    }
    //Jugar Carta de Acción
    const [openOrdenarAccionModal, setOpenOrdenarAccionModal] = useState(false);
    const handleOpenOrdenarAccionModal = () => {
        setOpenOrdenarAccionModal(true)
    }
    const handleCloseOrdenarAccionModal = () => {
        setOpenOrdenarAccionModal(false);
    }
    //Comprar Carta de Acción
    const [openComprarAccionModal, setOpenComprarAccionModal] = useState(false);
    const handleOpenComprarAccionModal = () => {
        setOpenComprarAccionModal(true)
    }
    const handleCloseComprarAccionModal = () => {
        setOpenComprarAccionModal(false);
    }
    //Jugar Carta de Acción
    const [openComprarOrdenBatallaModal, setOpenComprarOrdenBatallaModal] = useState(false);
    const handleOpenComprarOrdenBatallaModal = () => {
        setOpenComprarOrdenBatallaModal(true)
    }
    const handleCloseComprarOrdenBatallaModal = () => {
        setOpenComprarOrdenBatallaModal(false);
    }
    //Abrir Batallas
    const [openBatallas, setOpenBatallas] = useState(false);
    const handleOpenBatallas = () => {
        setOpenBatallas(true);
    }
    const handleCloseBatallas = () => {
        setOpenBatallas(false);
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
                        Ordenar Acción
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={handleOpenComprarAccionModal}
                            size="small" variant='contained' color='warning' >
                        Comprar Acción
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={handleOpenComprarOrdenBatallaModal}
                            size="small" variant='contained' color='warning' >
                        Comprar Orden de Batalla
                    </Button>
                </Grid>
                <Grid item>
                    <Button disabled={!gameData?.ownBattles || gameData?.ownBattles?.length === 0}
                            onClick={handleOpenBatallas}
                            size="small" variant='contained' color='warning' >
                        ¡Batallas!
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
            <ComprarCartaModal
                open={openComprarAccionModal}
                handleClose={handleCloseComprarAccionModal}
                cards={playerData?.prices?.actionCardPrices}
                recursos={playerData?.recursos}
                accion={true}
                ordenDeBatalla={false}
                label={'Comprar Acción'}
            />
            <ComprarCartaModal
                open={openComprarOrdenBatallaModal}
                handleClose={handleCloseComprarOrdenBatallaModal}
                cards={playerData?.prices?.battleCardPrices}
                recursos={playerData?.recursos}
                accion={false}
                ordenDeBatalla={true}
                label={'Comprar Orden de Batalla'}
            />
            <BatallasModal
                open={openBatallas}
                handleClose={handleCloseBatallas}
                batallas={gameData?.ownBattles}
                cards={playerData?.battleCards}
            />
        </>
    )
}

export default Botones