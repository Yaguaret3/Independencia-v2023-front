import { TextField, Modal, Box, Button, Grid } from '@mui/material';
import React, {useContext, useState} from 'react'
import service from '../../Service';
import {ControlContext} from "../../../control/Context.jsx";
import useWebSocket from "../../../../hooks/useWebSocket.jsx";
import {RevolucionarioContext} from "../../Context.jsx";

const NuevaPropuestaModal = ({ open, handleClose }) => {

    const {stompClient} = useContext(RevolucionarioContext);
    const {disparoControl, disparoRevolucionarios} = useWebSocket({});

    const [textField, setTextField] = useState('')

    const handleTextField = (e) => {
        setTextField(e.target.value)
    }
    const handleService = async () => {
        if (textField === '' || textField === null) {
            alert('Por favor, enviar propuesta correctamente')
            return;
        }
        await service.propose({ proposal: textField })
        disparoControl({stompClient:stompClient});
        disparoRevolucionarios({stompClient:stompClient});
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
                        <TextField
                            onChange={handleTextField}
                            value={textField}
                            variant='outlined'
                            label='Nueva Propuesta'
                            fullWidth
                            helperText={textField.length > 100 ? 'La propuesta no puede tener más de 100 caracteres.' : ''}
                            error={textField.length > 100}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            onClick={handleService}
                            size="small"
                            variant='contained'
                            color='warning'
                            fullWidth
                            disabled={textField.length > 100}
                        >
                            Proponer
                        </Button>
                    </Grid>
                </Grid>


            </Box>
        </Modal>
    )
}

export default NuevaPropuestaModal;