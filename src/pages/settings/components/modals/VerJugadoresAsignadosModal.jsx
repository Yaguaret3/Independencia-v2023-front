import React, {useContext} from 'react';
import {
    Box, Button, Grid, List, ListItem,
    Modal
} from "@mui/material";
import service from "../../Service.js";
import useWebSocket from "../../../../hooks/useWebSocket.jsx";
import {SettingsContext} from "../../Context.jsx";

const VerJugadoresAsignadosModal = ({open, handleClose, players}) => {

    const {disparoSettings} = useWebSocket({});
    const {stompClient} = useContext(SettingsContext);

    const handleQuitarRol = async ({player}) => {
        await service.removeRole({id: player.id, rol: player.rol});
        disparoSettings({stompClient: stompClient});
    }

    const renderLabel = ({player}) => {
        if(player.role === 'GOBERNADOR'){
            return player.username + ' (' + player.ciudad + ')';
        }
        return player.username;
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
                    {Array.from(new Set(players.map(player => player.rol))).map(role => (
                        <Grid item xs={2} key={role}>
                            {role}
                            <List>
                                {players.filter(player => player.rol === role).map(player => (
                                    <Grid container spacing={2}>
                                        <Grid item xs={10}>
                                            <ListItem key={player.id}>
                                                {renderLabel({player: player})}
                                            </ListItem>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Button onClick={() => handleQuitarRol({player: player})}
                                                    size="small" variant='outlined'
                                                    color={'error'}>
                                                -
                                            </Button>
                                        </Grid>
                                    </Grid>
                                ))}
                            </List>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Modal>
    )
        ;
};

export default VerJugadoresAsignadosModal;