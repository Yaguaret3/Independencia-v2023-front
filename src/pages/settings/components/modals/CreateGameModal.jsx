import React, {useContext, useState} from 'react';
import {Box, Button, Grid, Modal, TextField} from "@mui/material";
import service from "../../Service.js";
import {SettingsContext} from "../../Context.jsx";
import useWebSocket from "../../../../hooks/useWebSocket.jsx";

const CreateGameModal = ({open, handleClose}) => {

    const {stompClient} = useContext(SettingsContext);
    const {disparoSettings} = useWebSocket({});

    const [name, setName] = useState(false);
    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleCreateGame = async () => {
        await service.createGame({name:name});
        disparoSettings({stompClient: stompClient})
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
                borderRadius: 3,
                width:'30vw'
            }}
            >
                <Grid container direction={'column'}>
                    <Grid item>
                        <TextField onBlur={handleName} label={"Nombre"} fullWidth
                                   variant={"standard"} type={'text'}/>
                    </Grid>
                    <Grid>
                        <Button onClick={handleCreateGame}
                                size="small" variant='contained' color={'warning'} fullWidth>
                            Crear Juego
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default CreateGameModal;