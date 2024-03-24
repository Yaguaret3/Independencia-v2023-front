import React from 'react';
import {Box, Grid, Modal, TextField, Typography} from "@mui/material";
import CardsComponentForPlayerEdit from "../CardsComponentForPlayerEdit.jsx";
import PriceComponentForPlayerEdit from "../PriceComponentForPlayerEdit.jsx";
import RoleComponentForPlayerEdit from "./RoleComponentForPlayerEdit.jsx";

const PlayerModalViewForControl = ({open, handleClose, player}) => {

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
                        <Grid item xs={6}>
                            <Typography>Username</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField disabled={true} label={"Username"} fullWidth value={player?.username} variant={"standard"}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography>Rol</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField disabled={true} label={"Rol"} fullWidth value={player?.rol} variant={"standard"}/>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Grid container spacing={2}>
                                <RoleComponentForPlayerEdit player={player}/>
                                <PriceComponentForPlayerEdit player={player} />
                            </Grid>
                        </Grid>
                        <Grid item xs={8}>
                            <CardsComponentForPlayerEdit player={player}/>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    );
};

export default PlayerModalViewForControl;