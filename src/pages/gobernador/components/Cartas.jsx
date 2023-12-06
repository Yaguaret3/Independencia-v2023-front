import { Card, CardActionArea, Typography, CardContent, Grid, Tooltip } from '@mui/material';
import React, { useContext } from 'react';
import { GobernadorContext } from '../Context';
import ResourceCard from '../../common/ResourceCard';
import MarketCard from '../../common/MarketCard';
import RepresentationCard from '../../common/RepresentationCard';

const Cartas = () => {

  const { playerData } = useContext(GobernadorContext);

  return (
    <Grid container spacing={4}>

      <Grid item xs={6}>
        {playerData.city && playerData.city.buildings && playerData.city.buildings.map((building) => (

          <Tooltip title={building.bonification}>
            <Card sx={{ border: 'solid black' }}>
              <CardActionArea>
                <CardContent sx={{ backgroundColor: 'lightslategrey', paddingY: 0 }}>
                  <Typography variant="button" color={'white'} fontSize={10}>
                    Edificio:
                  </Typography>
                </CardContent>
                <CardContent sx={{
                  backgroundColor: 'lightslategrey',
                  paddingY: '0.9vh'
                }}>
                  <Typography variant="body1"
                    fontWeight={'bold'}
                    color={'white'}
                    textAlign={'center'}>
                    {building.buildingType}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Tooltip>
        ))}
      </Grid>

      <Grid item xs={6}>
        {playerData.recursos && playerData.recursos.map((recurso) => (

          <ResourceCard resourceName={recurso.resourceTypeEnum} />
        ))}

        {playerData.mercados && playerData.mercados.map((mercado) => (

          <MarketCard level={mercado.level} cityName={mercado.cityName} />
        ))}

        {playerData.representacion && (<RepresentationCard poblacion={playerData.representacion && playerData.representacion.poblacion}
          ciudad={playerData.representacion && playerData.representacion.ciudad} />)}
      </Grid>

    </Grid>

  );
};

export default Cartas;