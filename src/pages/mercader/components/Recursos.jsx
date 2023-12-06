import React, { useContext, useState } from 'react'
import { MercaderContext } from '../Context';
import ResourceCard from '../../controlComponents/ResourceCard';
import { Typography, Grid, Button } from '@mui/material';
import EntregarRecursoModal from './modals/EntregarRecursoModal';

const Recursos = () => {

    const { playerData, gameData } = useContext(MercaderContext)
    const [openModal, setOpenModal] = useState(false);
    const [resource, setResource] = useState();
    
    const handleButton = ({ resource }) => {
        setResource(resource);
        handleOpen();
    }

    const handleOpen = () => {
        setOpenModal(true);
    }

    const handleClose = () => {
        setOpenModal(false);
    }

    return (
        <>
            <Grid container direction="row"
                justifyContent="space-evenly">

                <Grid item xs={12}>
                    <Typography textAlign={'center'}>
                        Recursos
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Grid container justifyContent={'center'}>
                        {playerData.recursos && playerData.recursos.map((recurso) => (
                            <Grid item>
                                <Button onClick={() => handleButton({resource: recurso})}>
                                    <ResourceCard resourceName={recurso.resourceTypeEnum} />
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <EntregarRecursoModal 
                open={openModal}
                handleClose={handleClose}
                resource={resource}
                players={gameData.players}
            />
        </>
    )
}

export default Recursos