import React from 'react'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

const BattleCard = ({battleCardName, color='black', handleFunction=(()=>{})}) => {

    const cardBorder = {
        border: 'solid '+color
    }

    return (
        <Card sx={cardBorder} onClick={handleFunction}>
            <CardActionArea>
              <CardContent sx={{ backgroundColor: 'gray', paddingY: 0 }}>
                <Typography variant="button" color={'white'} fontSize={10}>
                  Orden de batalla:
                </Typography>
              </CardContent>
              <CardContent sx={{
                backgroundColor: 'lightblue',
                paddingY: '0.9vh'
              }}>
                <Typography variant="body1"
                  fontWeight={'bold'}
                  textAlign={'center'}>
                  {battleCardName}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
    )
}

export default BattleCard