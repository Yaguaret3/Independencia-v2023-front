import React from 'react'
import { Tooltip } from '@mui/material';
import { useState } from 'react'

const MendozaSubregion = () => {

    const [color, setColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
        setColor('orange')
    }
    const handleMouseOut = () => {
        setColor('black')
    }

  return (
    <Tooltip title="Mendoza">
        <g id="Mendoza">
				<path style={{ fill: color, opacity: opacity }} d="M372.3,1070.75c-2.57,0-4.42,0.18-6.22-0.03c-6.32-0.75-11.43,1.59-16.89,4.7c-5.98,3.41-12.9,5.43-19.63,7.23
		c-9.05,2.41-18.24,4.6-27.51,5.78c-5.85,0.75-11.58,0.76-16.7,4.26c-2.12,1.44-4.72,2.17-8.07,3.65
		c-2.39-6.75-6.4-13.33-6.81-20.12c-1.05-17.4-0.93-34.9-0.34-52.33c0.19-5.71,3.3-11.31,5.06-16.96c0.28-0.91,0.89-1.89,0.74-2.73
		c-1.58-8.87,4.54-15.61,6.5-23.49c0.22-0.89,1.74-1.85,2.81-2.09c7.89-1.74,15.44-4.62,23.9-4.35c3.28,0.11,6.7-4.49,10.48-7.25
		c1.21,1.86,3,4.06,4.19,6.54c3.27,6.82,7.79,12.3,14.87,15.4c5.17,2.27,6.32,6.23,5.01,13.89c-1.47,8.56-3.37,17.22-3.33,25.82
		c0.03,7.01,3.41,13.38,9.53,18.08C358.43,1053.3,367.7,1059.33,372.3,1070.75z"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        />
			</g>
    </Tooltip>
  )
}

export default MendozaSubregion