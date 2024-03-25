import React from 'react';
import {Card, CardActionArea, CardContent, Typography} from "@mui/material";

const CapitanCard = ({capitan}) => {
    return (
        <Card sx={{ border: 'solid black' }}>
            <CardActionArea>
                <CardContent sx={{ backgroundColor: 'white', paddingY: 0 }}>
                    <Typography variant="button" color={'cornflowerblue'} fontSize={10}>
                        CAPITAN
                    </Typography>
                </CardContent>
                <CardContent sx={{
                    backgroundColor: 'cornflowerblue',
                    paddingY: '0.9vh'
                }}>
                    <Typography variant="body1"
                                fontWeight={'bold'}
                                textAlign={'center'}
                                color={'white'}>
                        {capitan.username}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CapitanCard;