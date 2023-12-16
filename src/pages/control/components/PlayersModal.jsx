import React, {useState} from 'react';
import {Box, Button, Grid, Modal, TextField, Typography} from "@mui/material";
import PlayerCard from "../../common/playerCards/PlayerCard.jsx";
import SinglePlayerModal from "./SinglePlayerModal.jsx";

const PlayersModal = ({open, handleClose, playersData} ) => {

    const [playersFilter, setPlayersFilter] = useState('');
    const handlePlayersFilter = (e) => {
        setPlayersFilter(e.target.value.toLowerCase());
    }
    const playersFiltered = () => {
        return playersData.filter(p => p.username.includes(playersFilter.toLowerCase()));
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
                            <TextField onBlur={handlePlayersFilter} label={"Jugador"} fullWidth placeholder={"Jugador"} variant={"standard"}/>
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
            <SinglePlayerModal
                open={openSinglePlayerModal}
                handleClose={handleCloseSinglePlayerModal}
                players={playerSelected}
                 />
        </>
    );
};

export default PlayersModal;