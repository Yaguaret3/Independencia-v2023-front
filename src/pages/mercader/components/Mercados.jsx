import React, { useContext } from 'react'
import { MercaderContext } from '../Context';
import { Typography, Grid, Button } from '@mui/material';
import MarketCard from '../../components/MarketCard';

const Mercados = () => {

    const { playerData } = useContext(MercaderContext)

    const handleButton = ({ priceId, puntajeAPagar }) => {
        service.buyResources({ priceId: priceId, puntajeAPagar: puntajeAPagar })
    }

    return (
        <Grid container direction="row"
            justifyContent="space-evenly">

            <Grid item xs={12}>
                <Typography textAlign={'center'}>
                    Mercados
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Grid container justifyContent={'center'}>
                    {playerData.mercados && playerData.mercados.map((mercado) => (
                        <Grid item>
                            <Button onClick={handleButton}>
                                <MarketCard level={mercado.level} cityName={mercado.cityName} />
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Mercados