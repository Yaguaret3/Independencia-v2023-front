import React, { useContext } from 'react'
import { MercaderContext } from '../Context';
import ResourceCard from '../../components/ResourceCard';
import { Typography, Grid, Button } from '@mui/material';
import service from '../Service';

const Comercio = () => {

    const { playerData } = useContext(MercaderContext)

    const handleButton = ({ priceId, puntajeAPagar }) => {
        service.buyResources({ priceId: priceId, puntajeAPagar: puntajeAPagar })
    }

    return (
        <Grid container direction="row"
            justifyContent="space-evenly">

            <Grid item xs={12}>
                <Typography textAlign={'center'}>
                    Precios
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Grid container justifyContent={'center'}>
                    {playerData.preciosDeRecursos && playerData.preciosDeRecursos.map((precio) => (
                        <Grid item>
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
    )
}

export default Comercio