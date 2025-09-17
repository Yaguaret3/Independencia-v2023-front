import React from 'react';
import {Box, Modal, Typography} from "@mui/material";

const LogsModal = ({logs, open, handleClose}) => {
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
                borderRadius: 3,
                maxHeight:'80vh',
                overflow:'auto'
            }}
            >
                {logs?.map(l => <Typography color={l?.tipo === 'RECIBIDO' ? 'orange' : 'green'}>{l?.nota}</Typography>)}
            </Box>
        </Modal>
    );
};

export default LogsModal;