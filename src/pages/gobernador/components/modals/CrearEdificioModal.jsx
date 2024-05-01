import React, {useContext, useState} from 'react'
import { Modal, Grid, Box, Button, Typography, Tooltip } from '@mui/material'
import PagarModal from '../../../common/PagarModal.jsx'
import service from '../../Service'
import {GobernadorContext} from "../../Context.jsx";
import useWebSocket from "../../../../hooks/useWebSocket.jsx";

const CrearEdificioModal = ({ open, handleClose, buildings, recursos }) => {

    const {stompClient} = useContext(GobernadorContext);
    const {disparoControl, disparoGobernadores} = useWebSocket({});

    const [buildingSelectedOpen, setBuildingSelectedOpen] = useState(false)
    const [buildingSelected, setBuildingSelected] = useState({})

    const handleBuildingSelected = (building) => {
        setBuildingSelectedOpen(true);
        setBuildingSelected(building);
    }
    const handleBuildingModalClose = () => {
        setBuildingSelectedOpen(false);
    }

    const handleService = async ({ plata, resourcesIds }) => {
        await service.crearEdificio({
            priceId: buildingSelected.id,
            plata: plata,
            resourcesIds: resourcesIds
        })
        disparoControl({stompClient:stompClient});
        disparoGobernadores({stompClient:stompClient});
    }

    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{
                    position: 'absolute',
                    top: '50vh',
                    left: '50vw',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 3
                }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography >
                                Seleccionar tipo de edificio
                            </Typography>
                        </Grid>
                        {buildings?.map((building) => (
                            <Grid item xs={4} key={building.id}>
                                <Tooltip title={building.bonification}>
                                    <Button onClick={() => handleBuildingSelected(building)}
                                        size="small" variant='contained' color='warning' fullWidth>{building.name}</Button>
                                </Tooltip>
                            </Grid>
                        ))}

                    </Grid>
                </Box>
            </Modal>
            <PagarModal
                open={buildingSelectedOpen}
                handleClose={handleBuildingModalClose}
                itemWanted={buildingSelected}
                handleService={handleService}
                payLabel={'Crear Edificio'}
                recursoList={recursos}
            />
        </>
    )
}

export default CrearEdificioModal