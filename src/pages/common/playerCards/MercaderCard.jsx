import React from 'react';
import {Card, CardActionArea, CardContent, Typography} from "@mui/material";

const MercaderCard = (mercader) => {
    return (
        <Card sx={{ border: 'solid black' }}>
            <CardActionArea>
                <CardContent sx={{ backgroundColor: 'yellow', paddingY: 0 }}>
                    <Typography variant="button" color={'black'} fontSize={10}>
                        MERCADER
                    </Typography>
                </CardContent>
                <CardContent sx={{
                    backgroundColor: 'DarkKhaki',
                    paddingY: '0.9vh'
                }}>
                    <Typography variant="body1"
                                fontWeight={'bold'}
                                textAlign={'center'}
                                color={'black'}>
                        {mercader.username}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default MercaderCard;