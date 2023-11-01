import React, { useState } from 'react'
import {Box, Button, Grid, Modal, Typography} from "@mui/material";
import SingleBattleModal from "./SingleBattleModal.jsx";

const BatallasModal = ({open, handleClose, batallas, cards}) => {

    const [batallaSelected, setBatallaSelected] = useState({});
    const [openSingleBattleModal, setOpenSingleBattleModal] = useState(false);

    const handleOpenSingleBattleModal = ({batalla}) => {
        setBatallaSelected(batalla);
        setOpenSingleBattleModal(true);
    }
    const handleCloseSingleBattleModal = () => {
        setBatallaSelected({});
        setOpenSingleBattleModal(false);
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
                            <Typography >
                                Selecciona una batalla
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            {batallas?.map((batalla, index) => (
                                <Button key={index} onClick={() => handleOpenSingleBattleModal(batalla)}
                                        size="small" variant='contained' color='warning' fullWidth>
                                    <Typography >
                                        {batalla?.ejercitos?.map((ejercito, index) => {
                                            if(index !== 0){
                                                return ' - ' + ejercito?.capitanName;
                                            } else {
                                                return ejercito?.capitanName;
                                            }
                                        })}
                                    </Typography>
                                </Button>
                            ))}
                        </Grid>

                    </Grid>
                </Box>
            </Modal>
            <SingleBattleModal
                open={openSingleBattleModal}
                handleClose={handleCloseSingleBattleModal}
                batalla={batallaSelected}
                cards={cards}
            />
        </>
    )

}

export default BatallasModal;