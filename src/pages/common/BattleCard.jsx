import React from 'react'
import {Card, CardActionArea, CardContent, Tooltip, Typography} from '@mui/material';

const BattleCard = ({battleCardName, descripcion, color='black', handleFunction=(()=>{})}) => {

    const cardBorder = {
        border: 'solid '+color
    }

    return (
        <Tooltip title={descripcion} arrow>
            <Card sx={cardBorder} onClick={handleFunction}>
                <CardActionArea>
                    <CardContent sx={{backgroundColor: 'gray', paddingY: 0}}>
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
        </Tooltip>
    )
}

export default BattleCard