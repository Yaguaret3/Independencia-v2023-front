import React from 'react';
import {Card, CardActionArea, CardContent, Tooltip, Typography} from "@mui/material";

const ExtraCard = ({nombre, descripcion, bonificacion}) => {
    return (
        <Tooltip title={bonificacion} arrow>
            <Card sx={{border: 'solid black'}}>
                <CardActionArea>
                    <CardContent sx={{
                        backgroundColor: 'lightGreen', paddingY: 0,
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <Typography variant="button" color={'black'} textAlign={'left'} fontSize={10}>
                            Extra:
                        </Typography>
                    </CardContent>
                    <CardContent sx={{
                        backgroundColor: 'lightGreen',
                        paddingY: '0.9vh'
                    }}>
                        <Typography variant="body1"
                                    fontWeight={'bold'}
                                    textAlign={'center'}
                                    color={'black'}
                        >
                            {nombre}
                        </Typography>
                        <Typography variant="body1"
                                    fontWeight={'bold'}
                                    textAlign={'center'}
                                    color={'black'}
                        >
                            {descripcion}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Tooltip>

    );
};

export default ExtraCard;