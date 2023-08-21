import React from 'react'
import { Modal, Grid, Box, Button } from '@mui/material'
import service from '../../Service'

const ImpuestosModal = ({ open, handleClose, label, aumentar, disminuir}) => {
    
    const handleService = () => {
        service.cambiarImpuestos({ aumentar: aumentar, disminuir: disminuir })
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