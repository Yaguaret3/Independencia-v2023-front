import { TextField, Modal, Box, Button, Grid } from '@mui/material';
import React, { useState } from 'react'
import service from '../../Service';

const NuevaPropuestaModal = ({ open, handleClose }) => {

    const [textField, setTextField] = useState('')

    const handleTextField = (e) => {
        setTextField(e.target.value)
    }
    const handleService = () => {
        if (playerSelected === '' || playerSelected === null) {
            alert('Por favor, enviar propuesta correctamente')
            return;
        }
        service.propose({ proposal: textField })
        handleClose();
    }

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{
                position: 'absolute',
                width: '1000px',
                top: '50vh',
                left: '50vw',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                borderRadius: 3
            }}
            >
                <Grid container>
                    <Grid item xs={12}>
                        <TextField onChange={handleTextField} value={textField} variant='outlined' label='Nueva Propuesta' fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={handleService}
                            size="small" variant='contained' color='warning' fullWidth>
                            Proponer
                        </Button>
                    </Grid>
                </Grid>


            </Box>
        </Modal>
    )
}

export default NuevaPropuestaModal;