import React from 'react';
import {Card, CardActionArea, CardContent, Tooltip, Typography} from "@mui/material";

const BuildingCard = ({building}) => {
    return (
        <Tooltip title={building.bonification}>
            <Card sx={{ border: 'solid black' }}>
                <CardActionArea>
                    <CardContent sx={{ backgroundColor: 'lightslategrey', paddingY: 0 }}>
                        <Typography variant="button" color={'white'} fontSize={10}>
                            Edificio:
                        </Typography>
                    </CardContent>
                    <CardContent sx={{
                        backgroundColor: 'lightslategrey',
                        paddingY: '0.9vh'
                    }}>
                        <Typography variant="body1"
                                    fontWeight={'bold'}
                                    color={'white'}
                                    textAlign={'center'}>
                            {building.buildingType}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Tooltip>
    );
};

export default BuildingCard;