import React from 'react'
import { Tooltip } from '@mui/material';
import { useState } from 'react';

const SantaFeSubregion = () => {

    const [color, setColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
        setColor('red')
    }
    const handleMouseOut = () => {
        setColor('black')
    }

  return (
    <Tooltip title="Santa Fe">
        <g id="Santa Fe">
                <path style={{ fill: color, opacity: opacity }} d="M617.84,900.41c7.55,9.4,14.64,19.01,22.62,27.8c3.4,3.74,0.78,5.22-1.19,6.33
		c-9.01,5.11-12.98,13.32-15.25,22.84c-2.17,9.12-4.76,18.14-6.65,27.32c-1.7,8.26-3.77,16.8-0.9,25.04
		c0.98,2.82,5.06,4.46,7.43,6.92c2.35,2.44,4.33,5.25,6.47,7.89c-3.11,1.41-6.1,3.56-9.36,4.09c-6.94,1.12-14.04,1.19-21.02,2.12
		c-3.68,0.49-7.21,1.97-10.85,2.86c-2.8,0.68-5.65,1.12-8.95,1.76c2.02-6.05,4.2-11.1,5.35-16.38c1.84-8.46,3.6-17.02,4.28-25.62
		c0.87-11.01,3.2-21.46,6.93-31.86c6.21-17.3,11.54-34.91,17.36-52.36C615.22,905.83,616.86,902.68,617.84,900.41z"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        />
            </g>
    </Tooltip>
  )
}

export default SantaFeSubregion