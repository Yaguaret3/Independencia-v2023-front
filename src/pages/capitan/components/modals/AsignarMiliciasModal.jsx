import React, {useState} from 'react';
import {Box, Button, Grid, Modal, TextField} from "@mui/material";

const AsignarMiliciasModal = ({open, handleClose, handleService}) => {

    const [militiaSelected, setMilitiaSelected] = useState(0);
    const handleSelectMilitia = ({milicia}) => {
        setMilitiaSelected(milicia);
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
                borderRadius: 3
            }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            value={militiaSelected}
                            onChange={(e) => handleSelectMilitia({milicia:e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={() => handleService({milicia: militiaSelected})}
                                size="small" variant='contained' color='warning' fullWidth>
                            Asignar milicias
                        </Button>
                    </Grid>
                </Grid>

            </Box>

        </Modal>
    );
};

export default AsignarMiliciasModal;