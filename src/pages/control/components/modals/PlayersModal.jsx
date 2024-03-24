import React, {useState} from 'react';
import {Box, Button, Grid, Modal, TextField} from "@mui/material";
import PlayerCard from "../../../common/playerCards/PlayerCard.jsx";
import PlayerModalViewForControl from "./PlayerModalViewForControl.jsx";

const PlayersModal = ({open, handleClose, playersData} ) => {

    const [playersFilter, setPlayersFilter] = useState('');
    const handlePlayersFilter = (e) => {
        setPlayersFilter(e.target.value.toLowerCase());
        filterPlayers();
    }
    const [playersFiltered, setPlayersFiltered] = useState(playersData);

    const [rolesFilter, setRolesFilter] = useState('');
    const handleRolesFilter = (e) => {
        setRolesFilter(e.target.value.toLowerCase());
        filterPlayers();
    }

    const filterPlayers = () => {

        setPlayersFiltered(playersData.filter(p => p.username?.includes(playersFilter.toLowerCase()) && p.rol?.includes(rolesFilter.toLowerCase())));
    }
    const [playerSelected, setPlayerSelected] = useState({});
    const [openSinglePlayerModal, setOpenSinglePlayerModal] = useState(false);

    const handleSelectPlayer = (e) => {
        setPlayerSelected(e);
        setOpenSinglePlayerModal(true);
    }
    const handleCloseSinglePlayerModal = () => {
        setOpenSinglePlayerModal(false);
    }


    return (
        <>
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
                        <Grid item xs={12}>
                            <TextField onChange={handlePlayersFilter} label={"Jugador"} fullWidth placeholder={"Jugador"} variant={"standard"}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField onChange={handleRolesFilter} label={"Rol"} fullWidth placeholder={"Rol"} variant={"standard"}/>
                        </Grid>

                        <Grid item xs={6}>
                            {playersFiltered?.map((player, index) => (
                                <Button key={index} onClick={() => handleSelectPlayer(player)}>
                                    <PlayerCard player ={player} />
                                </Button>
                            ))}
                        </Grid>

                    </Grid>
                </Box>
            </Modal>
            <PlayerModalViewForControl
                open={openSinglePlayerModal}
                handleClose={handleCloseSinglePlayerModal}
                player={playerSelected}
                 />
        </>
    );
};

export default PlayersModal;