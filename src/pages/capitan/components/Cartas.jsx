import { Card, CardActionArea, Typography, CardContent, Grid, Tooltip } from '@mui/material';
import React, { useContext } from 'react';
import { CapitanContext } from '../Context';
import BattleCard from '../../common/BattleCard';
import ActionCard from '../../common/ActionCard';

const Cartas = () => {

  const { playerData } = useContext(CapitanContext);

  return (
    <Grid container spacing={4}>

        <Grid item xs={6}>
            {playerData.actionCards?.map((action) => (

                <ActionCard actionName={action.actionType} />
            ))}
        </Grid>

        <Grid item xs={6}>
            {playerData.battleCards?.map((battleCard) => (

                <BattleCard battleCardName={battleCard.battleOrderType} />
            ))}
        </Grid>

    </Grid>

  );
};

export default Cartas;