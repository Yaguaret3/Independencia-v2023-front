import { Modal, Box, Button, Grid, Typography } from '@mui/material';
import React, {useContext} from 'react'
import service from '../../Service';
import {ControlContext} from "../../../control/Context.jsx";
import useWebSocket from "../../../../hooks/useWebSocket.jsx";
import {RevolucionarioContext} from "../../Context.jsx";

const VotarModal = ({ open, handleClose, currentVotation }) => {

    const {stompClient} = useContext(RevolucionarioContext);
    const {disparoControl, disparoRevolucionarios} = useWebSocket({});

    const handleService = async (voteType) => {
        if(confirm("¿Enviar voto " + voteType+"?")){
            await service.vote({ votationId: currentVotation.id, voteType: voteType })
            disparoRevolucionarios({stompClient:stompClient});
            disparoControl({stompClient:stompClient});
            handleClose();
        }
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
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant="body1"
                            textAlign={'center'}>
                            {currentVotation && currentVotation.propuesta}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Button onClick={() => handleService('A_FAVOR')}
                            size="small" variant='contained' color='warning' fullWidth>
                            A favor
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button onClick={() => handleService('SE_ABSTIENE')}
                            size="small" variant='contained' color='warning' fullWidth>
                            Se abstiene
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button onClick={() => handleService('EN_CONTRA')}
                            size="small" variant='contained' color='warning' fullWidth>
                            En Contra
                        </Button>
                    </Grid>
                </Grid>


            </Box>
        </Modal>
    )
}

export default VotarModal;