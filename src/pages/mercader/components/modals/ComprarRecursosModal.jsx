import React, {useContext} from 'react';
import {Box, Button, Grid, Modal, Typography} from "@mui/material";
import ResourceCard from "../../../common/ResourceCard.jsx";
import {MercaderContext} from "../../Context.jsx";
import useWebSocket from "../../../../hooks/useWebSocket.jsx";
import service from "../../Service.js";

const ComprarRecursosModal = ({open, handleClose}) => {

    const { playerData, stompClient } = useContext(MercaderContext)
    const {disparoControl, disparoMercaderes} = useWebSocket({});

    const handleButton = async ({ priceId, puntajeAPagar }) => {
        await service.buyResources({ priceId: priceId, puntajeAPagar: puntajeAPagar })
        disparoMercaderes({stompClient:stompClient});
        disparoControl({stompClient:stompClient});
    }

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{
                position: 'absolute',
                top: '50vh',
                left: '50vw',
                width: "50vw",
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                borderRadius: 3
            }}
            >
                <Grid container justifyContent="space-evenly" spacing={2}>

                    <Grid item xs={12}>
                        <Typography textAlign={'center'}>
                            Precios
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container justifyContent={'center'}>
                            {playerData?.preciosDeRecursos?.map((precio) => (
                                <Grid item key={precio.id}>
                                    <ResourceCard resourceName={precio.name} />
                                    <Button onClick={() => handleButton({ priceId: precio.id, puntajeAPagar: precio.puntajeComercial })}
                                            size="small" variant='contained' color='warning' fullWidth >
                                        Comprar a {precio.puntajeComercial}
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default ComprarRecursosModal;