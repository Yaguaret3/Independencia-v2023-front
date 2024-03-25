import React from 'react';
import {Card, CardActionArea, CardContent, Typography} from "@mui/material";

const GobernadorCard = ({gobernador}) => {

    // Cambiar el onlick del Button a la Card
    return (

        <Card sx={{ border: 'solid black' }}>
            <CardActionArea>
                <CardContent sx={{ backgroundColor: 'white', paddingY: 0 }}>
                    <Typography variant="button" color={'crimson'} fontSize={10}>
                        GOBERNADOR
                    </Typography>
                </CardContent>
                <CardContent sx={{
                    backgroundColor: 'firebrick',
                    paddingY: '0.9vh'
                }}>
                    <Typography variant="body1"
                                fontWeight={'bold'}
                                textAlign={'center'}>
                        {gobernador.username}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default GobernadorCard;