import React from 'react'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'

const MarketCard = ({cityName, level}) => {
    return (
        <Card sx={{ border: 'solid black' }}>
            <CardActionArea>
                <CardContent sx={{
                    backgroundColor: 'yellow',
                    paddingY: 0,
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Typography variant="button" fontWeight={'bold'} color={'black'} fontSize={10}>
                        Mercado:
                    </Typography>
                    <Typography variant="button" fontWeight={'bold'} color={'black'} fontSize={10}>
                        {level}
                    </Typography>
                </CardContent>
                <CardContent sx={{
                    backgroundColor: 'white',
                    paddingY: '0.9vh'
                }}>
                    <Typography variant="body1"
                        fontWeight={'bold'}
                        textAlign={'center'}>
                        {cityName}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default MarketCard