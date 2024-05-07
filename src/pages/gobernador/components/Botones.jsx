import React, { useContext, useState } from 'react'
import { Grid, Button } from '@mui/material'
import service from '../Service/'
import { GobernadorContext } from '../Context'
import EntregarMercadoModal from './modals/EntregarMercadoModal'
import ImpuestosModal from './modals/ImpuestosModal'
import CrearEdificioModal from './modals/CrearEdificioModal'
import PagarModal from '../../common/PagarModal.jsx'
import ElegirDiputadoModal from './modals/ElegirDiputadoModal'
import AsignarMiliciaModal from './modals/AsignarMiliciaModal'

const Botones = () => {

    //Context
    const { gameData, playerData } = useContext(GobernadorContext)

    //Entregar Mercado
    const [openEntregarMercadoModal, setOpenEntregarMercadoModal] = useState(false);
    const handleOpenEntregarMercadoModal = () => {
        setOpenEntregarMercadoModal(true)
    }
    const handleCloseEntregarMercadoModal = () => {
        setOpenEntregarMercadoModal(false);
    }

    //Aumentar y Disminuir Impuestos
    const [openImpuestosModal, setOpenImpuestosModal] = useState(false);
    const [aumentarBoolean, setAumentarBoolean] = useState(false);
    const [disminuirBoolean, setDisminuirBoolean] = useState(false);
    const [impuestosLabel, setImpuestosLabel] = useState('');
    const handleOpenImpuestosModalFromAumentar = () => {
        setAumentarBoolean(true);
        setDisminuirBoolean(false);
        setImpuestosLabel('Aumentar Impuestos')
        setOpenImpuestosModal(true)
    }
    const handleOpenImpuestosModalFromDisminuir = () => {
        setAumentarBoolean(false);
        setDisminuirBoolean(true);
        setImpuestosLabel('Disminuir Impuestos')
        setOpenImpuestosModal(true)
    }
    const handleCloseImpuestosModal = () => {
        setOpenImpuestosModal(false);
    }

    //Crear Edificio
    const [openCrearEdificioModal, setOpenCrearEdificioModal] = useState(false)
    const handleOpenCrearEdificioModal = () => {
        setOpenCrearEdificioModal(true);
    }
    const handleCloseCrearEdificioModal = () => {
        setOpenCrearEdificioModal(false);
    }

    //Mejorar Mercado y Reclutar Milicia
    const [openPagarModal, setOpenPagarModal] = useState(false);
    const [payingActionLabel, setPayingActionLabel] = useState('');
    const [itemWanted, setItemWanted] = useState({});

    const handleOpenPagarModal = ({ label, itemWanted }) => {
        setPayingActionLabel(label)
        setItemWanted(itemWanted)
        setOpenPagarModal(true);
    }
    const handleClosePagarModal = () => {
        setOpenPagarModal(false);
        setPayingActionLabel('')
        setItemWanted({})
    }
    const handlePayingService = ({ plata, resourcesIds }) => {
        if (payingActionLabel === 'Mejorar Mercado') {
            service.mejorarMercado({
                plata: plata,
                resourcesIds: resourcesIds
            })
        }
        if (payingActionLabel === 'Reclutar Milicia') {
            service.reclutarMilicia({
                plata: plata,
                resourcesIds: resourcesIds
            })
        }
    }

    //Elegir Diputado
    const [openElegirDiputadoModal, setElegirDiputadoModal] = useState(false)
    const handleOpenElegirDiputadoModal = () => {
        setElegirDiputadoModal(true)
    }
    const handleCloseElegirDiputadoModal = () => {
        setElegirDiputadoModal(false)
    }

    //Asignar Milicia
    const [openAsignarMiliciaModal, setOpenAsignarMiliciaModal] = useState(false)
    const handleOpenAsignarMiliciaModal = () => {
        setOpenAsignarMiliciaModal(true)
    }
    const handleCloseAsignarMiliciaModal = () => {
        setOpenAsignarMiliciaModal(false)
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
                    <Button onClick={handleOpenEntregarMercadoModal}
                        size="small" variant='contained' color='warning' >
                        Entregar Mercado
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={handleOpenImpuestosModalFromAumentar}
                        size="small" variant='contained' color='warning' >
                        Aumentar Impuestos
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={handleOpenImpuestosModalFromDisminuir}
                        size="small" variant='contained' color='warning' >
                        Disminuir Impuestos
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={handleOpenCrearEdificioModal}
                        size="small" variant='contained' color='warning' >
                        Crear Edificios
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={() => handleOpenPagarModal({
                        label: 'Mejorar Mercado',
                        itemWanted: playerData.precios.marketPrice
                    })}
                        size="small" variant='contained' color='warning' >
                        Mejorar Mercado
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={handleOpenElegirDiputadoModal}
                        size="small" variant='contained' color='warning' >
                        Elegir Diputado
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={() => handleOpenPagarModal({
                        label: 'Reclutar Milicia',
                        itemWanted: playerData.precios.militiaPrice
                    })}
                        size="small" variant='contained' color='warning' >
                        Reclutar Milicia
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={handleOpenAsignarMiliciaModal}
                        size="small" variant='contained' color='warning' >
                        Asignar Milicia
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        size="small" variant='contained' color='warning' disabled={true}>
                        Promover Corrupción
                    </Button>
                </Grid>
                <Grid item>
                    <Button size="small" variant='contained' color='warning' disabled={true}>
                        Financiar Congreso
                    </Button>
                </Grid>
            </Grid>
            <EntregarMercadoModal
                open={openEntregarMercadoModal}
                handleClose={handleCloseEntregarMercadoModal}
                mercaderes={gameData && gameData.players && gameData.players.filter((p) => p.rol === 'MERCADER')}
                mercados={playerData && playerData.mercados}
            />
            <ImpuestosModal
                open={openImpuestosModal}
                handleClose={handleCloseImpuestosModal}
                label={impuestosLabel}
                aumentar={aumentarBoolean}
                disminuir={disminuirBoolean}
            />
            <CrearEdificioModal
                open={openCrearEdificioModal}
                handleClose={handleCloseCrearEdificioModal}
                buildings={playerData?.precios?.buildingPrices}
                recursos={playerData.recursos}
            />
            <PagarModal
                open={openPagarModal}
                handleClose={handleClosePagarModal}
                itemWanted={itemWanted}
                handleService={handlePayingService}
                payLabel={payingActionLabel}
                recursoList={playerData.recursos}
            />
            <ElegirDiputadoModal
                open={openElegirDiputadoModal}
                handleClose={handleCloseElegirDiputadoModal}
                revolucionarios={gameData && gameData.players && gameData.players.filter((p) => p.rol === 'REVOLUCIONARIO')}
                representationCard={playerData && playerData.representacion}
            />
            <AsignarMiliciaModal
                open={openAsignarMiliciaModal}
                handleClose={handleCloseAsignarMiliciaModal}
                capitanes={gameData && gameData.players && gameData.players.filter((p) => p.rol === 'CAPITAN')}
            />
        </>
    )
}

export default Botones