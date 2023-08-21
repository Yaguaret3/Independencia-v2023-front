import React from 'react'
import { Tooltip } from '@mui/material';
import { useState } from 'react';

const ConcepcionDeChileSubregion = () => {

  const [color, setColor] = useState('black')
  const opacity = 0.3;

  const handleMouseOver = () => {
    setColor('purple')
  }
  const handleMouseOut = () => {
    setColor('black')
  }

  return (
    <Tooltip title="Concepción de Chile">
      <g id="Concepción de Chile">
        <path style={{ fill: color, opacity: opacity }} d="M142.46,1094.1c10.02,1.42,18.03,6.01,25.76,11.54c10.67,7.62,22.66,7.8,35.28,6.55
		c7.68-0.76,15.65,0.81,23.43,1.82c3.13,0.41,6.1,2.1,10.32,3.64c-2.2,2.6-3.99,4.94-6,7.06c-9.32,9.86-12.81,20.95-8.22,34.26
		c2.17,6.29,4.22,12.83,4.85,19.39c0.89,9.21-3.06,17.61-6.57,25.99c-2.55,6.09-4.56,12.44-6.31,18.81
		c-0.55,1.98,0.59,4.41,0.87,6.64c0.38,3.07,0.15,4.93-4.14,4.42c-5.37-0.64-10.88,0.05-16.32-0.12
		c-10.89-0.34-21.78-1.32-32.65-1.21c-12.77,0.13-25.55,0.93-38.29,1.85c-4.96,0.36-8.32-0.57-10.92-5.27
		c-2.33-4.23-5.75-7.88-8.87-11.64c-2.67-3.22-4.21-6.3-0.83-10.01c0.5-0.55,0.19-1.85,0.25-2.72c9.75-1.1,13.01-5.55,14.07-15.29
		c0.99-9.15,2.69-18.39,5.54-27.11c3.27-10.02,8.3-19.45,12.21-29.28c1.25-3.15,1.46-6.75,2-10.16
		C139.44,1113.75,140.89,1104.24,142.46,1094.1z"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      </g>
    </Tooltip>
  )
}

export default ConcepcionDeChileSubregion