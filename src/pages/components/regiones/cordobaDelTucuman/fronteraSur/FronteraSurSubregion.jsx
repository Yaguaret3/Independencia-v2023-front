import React from 'react'
import { Tooltip } from '@mui/material';
import { useState } from 'react'

const FronteraSurSubregion = () => {

    const [color, setColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
        setColor('orange')
    }
    const handleMouseOut = () => {
        setColor('black')
    }

    return (
        <Tooltip title="Frontera Sur">
            <g id="Frontera Sur">
                <path style={{ fill: color, opacity: opacity }} d="M458.36,1069.9c1.37-0.19,2.74-0.39,3.56-0.51c-12.65-1.18-25.74-2.76-38.88-3.49
		c-7.26-0.4-15.48-1.3-21.66,1.54c-7.11,3.26-13.73,3.03-20.72,3.3c-3.2-10.41-11.26-17.11-18-24.71
		c7.54-5.33,15.62-7.42,23.95-7.05c5.69,0.25,9.7-2.36,14.27-4.64c3.45-1.72,7.34-3.26,11.12-3.47c18.13-0.99,36.28-1.74,54.43-2.05
		c6.66-0.11,13.44,0.72,19.99,2.03c7.21,1.44,14.18,3.99,21.3,5.91c12.54,3.38,25.11,6.62,37.65,9.98c2.81,0.75,5.57,1.72,9.54,2.97
		c-1.36,3.72-2.75,7.57-4.16,11.41c-1.56,4.24-3.32,8.41-4.61,12.73c-0.73,2.44-0.17,5.36-1.2,7.6c-0.82,1.78-3.15,2.87-4.81,4.27
		c-0.34-0.48-0.69-0.96-1.03-1.44c1-0.28,2-0.56,3.25-0.91c-0.53-0.31-0.75-0.56-0.98-0.56c-1.33-0.04-2.68,0.09-4-0.05
		c-5.94-0.62-12.49,0.03-17.63-2.35c-4.75-2.2-9.22-0.35-14.17-2.17c1.12-0.33,1.77-0.52,2.7-0.8c-16.81-2.43-32.74-9.11-50.02-6.2
		C458.28,1070.78,458.32,1070.34,458.36,1069.9z"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        />
            </g>
        </Tooltip>
    )
}

export default FronteraSurSubregion