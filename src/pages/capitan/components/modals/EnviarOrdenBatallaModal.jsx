import React, {useState} from 'react';
import {Box, Button, Grid, Modal} from "@mui/material";
import BattleCard from "../../../common/BattleCard.jsx";

const EnviarOrdenBatallaModal = ({open, handleClose, handleService, battleCards}) => {

    const [cardSelected, setCardSelected] = useState();
    const handleCardSelected = ({newValue}) => {
        setCardSelected(newValue);
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
                    {battleCards?.map(bc =>
                        <Grid item xs={6} key={bc.id}>
                            <BattleCard battleCardName={bc.nombre}
                                        color={bc.id === cardSelected?.id ? 'green' : 'black'}
                                        handleFunction={() => handleCardSelected({newValue:bc})}/>
                        </Grid>)
                    }
                    <Grid item xs={12}>
                        <Button onClick={() => handleService({cardSelected: cardSelected})}
                                size="small" variant='contained' color='warning' fullWidth>
                            Enviar orden de batalla
                        </Button>
                    </Grid>
                </Grid>

            </Box>

        </Modal>
    );
};

export default EnviarOrdenBatallaModal;