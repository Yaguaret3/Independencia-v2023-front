import React from 'react'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

const ResourceCard = ({actionName:actionName}) => {

    return (
        <Card sx={{ border: 'solid black' }}>
            <CardActionArea>
              <CardContent sx={{ backgroundColor: 'blue', paddingY: 0 }}>
                <Typography variant="button" color={'white'} fontSize={10}>
                  Recurso de Industria:
                </Typography>
              </CardContent>
              <CardContent sx={{
                backgroundColor: 'lightgray',
                paddingY: '0.9vh'
              }}>
                <Typography variant="body1"
                  fontWeight={'bold'}
                  textAlign={'center'}>
                  {actionName}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
    )
}

export default ResourceCard