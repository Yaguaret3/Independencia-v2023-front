import { Card, CardActionArea, Typography, CardContent, Grid, Tooltip } from '@mui/material';
import React, { useContext } from 'react';
import { GobernadorContext } from '../Context';
import ResourceCard from '../../common/ResourceCard';
import MarketCard from '../../common/MarketCard';
import RepresentationCard from '../../common/RepresentationCard';
import BuildingCard from "../../common/BuildingCard.jsx";

const Cartas = () => {

  const { playerData } = useContext(GobernadorContext);

  return (
    <Grid container spacing={4}>

      <Grid item xs={6}>
        {playerData?.city?.buildings.map((building) => (

          <BuildingCard building={building} />
        ))}
      </Grid>

      <Grid item xs={6}>
        {playerData?.recursos?.map((recurso) => (

          <ResourceCard resourceName={recurso.resourceTypeEnum} key={recurso.id}/>
        ))}

        {playerData?.mercados?.map((mercado) => (

          <MarketCard level={mercado.level} cityName={mercado.cityName}  key={mercado.id}/>
        ))}

        {playerData.representacion && (<RepresentationCard poblacion={playerData.representacion.poblacion}
          ciudad={playerData.representacion?.ciudad}/>)}
      </Grid>

    </Grid>

  );
};

export default Cartas;