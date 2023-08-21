import React from 'react'
import { Tooltip } from '@mui/material';
import { useState } from 'react';

const TarijaSubregion = () => {

  const [color, setColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
        setColor('aqua')
    }
    const handleMouseOut = () => {
        setColor('black')
    }

  return (
    <Tooltip title="Tarija">
      <g id="Tarija">
        <path style={{ fill: color, opacity: opacity }} d="M415.97,473.19c0-4.06-0.01-7.36,0-10.66c0.02-4.5,0.59-8.83-3.18-12.74c-2.76-2.87-2.01-6.53,1.75-9.01
		c5.82-3.85,11.3-8.05,18.17-10.32c8.81-2.91,17.18-7.12,25.88-10.41c2.23-0.84,6.7-1.17,7.17-0.24c1.65,3.3,3.03,7.35,2.65,10.91
		c-0.88,8.25-3.18,16.34-4.26,24.58c-0.72,5.54-2.06,7.69-7.56,7.42c-9.97-0.5-19.15,1.1-27.74,6.8
		C425.48,471.77,420.71,471.92,415.97,473.19z"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      </g>
    </Tooltip>
  )
}

export default TarijaSubregion