import React, {useContext, useEffect, useState} from 'react';
import {Box, Button, Grid, Modal, TextField} from "@mui/material";
import service from "../../Service.js";
import {SettingsContext} from "../../Context.jsx";
import useWebSocket from "../../../../hooks/useWebSocket.jsx";

const UpdateUsernameModal = ({open, handleClose, player}) => {

    const {stompClient} = useContext(SettingsContext);
    const {disparoSettings} = useWebSocket({});

    useEffect(() => {
        setNewUsername(player?.username);
    }, [player]);

    const [newUsername, setNewUsername] = useState();
    const handleChangeUsername = (e) => {
        setNewUsername(e.target.value);
    }
    const handleUpdateUsername = async () => {

        await service.updateUsername({id: player.id, username: newUsername});
        setNewUsername('');
        handleClose();
        disparoSettings({stompClient:stompClient});
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
                        <p>Actualizar username de</p><h3> {player.username}</h3>
                    </Grid>
                    <Grid item>
                        <TextField onChange={handleChangeUsername} label={"Nuevo Username"} fullWidth
                                   variant={"standard"} type={'text'} value={newUsername}/>
                    </Grid>
                    <Grid>
                        <Button onClick={handleUpdateUsername}
                                size="small" variant='contained' color={'warning'} fullWidth>
                            Actualizar
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default UpdateUsernameModal;