import React, {useContext} from 'react'
import { Modal, Grid, Box, Button } from '@mui/material'
import service from '../../Service'
import {GobernadorContext} from "../../Context.jsx";
import useWebSocket from "../../../../hooks/useWebSocket.jsx";

const ImpuestosModal = ({ open, handleClose, label, aumentar, disminuir}) => {

    const {stompClient} = useContext(GobernadorContext);
    const {disparoControl, disparoGobernadores} = useWebSocket({});
    const handleService = async () => {
        await service.cambiarImpuestos({ aumentar: aumentar, disminuir: disminuir })
        disparoGobernadores({stompClient:stompClient});
        disparoControl({stompClient:stompClient});
    }

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{
                position: 'absolute',
                top: '50vh',
                left: '50vw',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                borderRadius:3
            }}
            >
                <Grid container>
                    <Grid item xs={12}>
                        <Button onClick={handleService}
                            size="small" variant='contained' color='warning' fullWidth>{label}</Button>
                    </Grid>
                </Grid>

            </Box>
        </Modal>
    )
}

export default ImpuestosModal