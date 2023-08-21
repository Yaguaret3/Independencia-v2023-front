import { Modal, Box, Button, Grid, Typography } from '@mui/material';
import React from 'react'
import service from '../../Service';

const VotarModal = ({ open, handleClose, currentVotation }) => {

    const handleService = (voteType) => {
        if(confirm("¿Enviar voto " + voteType+"?")){
            service.vote({ votationId: currentVotation.id, voteType: voteType })
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