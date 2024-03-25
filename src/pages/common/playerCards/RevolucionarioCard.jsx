import React from 'react';
import {Card, CardActionArea, CardContent, Typography} from "@mui/material";

const RevolucionarioCard = ({revolucionario}) => {

    return (
        <Card sx={{ border: 'solid black' }}>
            <CardActionArea>
                <CardContent sx={{ backgroundColor: 'DimGray', paddingY: 0 }}>
                    <Typography variant="button" color={'white'} fontSize={10}>
                        REVOLUCIONARIO
                    </Typography>
                </CardContent>
                <CardContent sx={{
                    backgroundColor: 'Black',
                    paddingY: '0.9vh'
                }}>
                    <Typography variant="body1"
                                fontWeight={'bold'}
                                textAlign={'center'}
                                color={'white'}>
                        {revolucionario.username}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default RevolucionarioCard;