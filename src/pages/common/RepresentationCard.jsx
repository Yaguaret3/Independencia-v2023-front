import React from 'react'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'

const RepresentationCard = ({poblacion, ciudad}) => {
  return (
      <Card sx={{border: 'solid black'}}>
          <CardActionArea>
              <CardContent sx={{
                  backgroundColor: 'white', paddingY: 0,
                  display: 'flex',
                  justifyContent: 'space-between'
              }}>
                  <Typography variant="button" color={'skyblue'} textAlign={'left'} fontSize={10}>
                      Representacion:
                  </Typography>
                  <Typography variant="button" color={'skyblue'} textAlign={'right'} fontSize={10}>
                      {poblacion + 'h.'}
                  </Typography>
              </CardContent>
              <CardContent sx={{
                  backgroundColor: 'skyblue',
                  paddingY: '0.9vh'
              }}>
                  <Typography variant="body1"
                              fontWeight={'bold'}
                              textAlign={'center'}
                              color={'white'}
                  >
                      {ciudad}
                  </Typography>
              </CardContent>
          </CardActionArea>
      </Card>
  )
}

export default RepresentationCard