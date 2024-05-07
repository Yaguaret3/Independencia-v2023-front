import React from 'react'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

const ResourceCard = ({resourceName, handleService=()=> {}}) => {

    const renderColorCard = (resourceName) => {
        switch (resourceName) {
          case 'AGROPECUARIA': return 'greenyellow';
          case 'METALMECANICA': return 'lightgray';
          case 'CONSTRUCCION': return 'peru';
          case 'COMERCIAL': return 'gold';
          case 'TEXTIL': return 'plum';
        }
      }

    return (
        <Card sx={{ border: 'solid black' }} onClick={handleService}>
            <CardActionArea>
              <CardContent sx={{ backgroundColor: 'purple', paddingY: 0 }}>
                <Typography variant="button" color={'white'} fontSize={10}>
                  Recurso de Industria:
                </Typography>
              </CardContent>
              <CardContent sx={{
                backgroundColor: renderColorCard(resourceName),
                paddingY: '0.9vh'
              }}>
                <Typography variant="body1"
                  fontWeight={'bold'}
                  textAlign={'center'}>
                  {resourceName}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
    )
}

export default ResourceCard