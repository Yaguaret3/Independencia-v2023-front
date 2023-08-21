import { Tooltip } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const CorrientesSubregion = () => {

    const [color, setColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
        setColor('lime')
    }
    const handleMouseOut = () => {
        setColor('black')
    }

    return (
        <Tooltip title="Corrientes">
            <g id="Corrientes">
                <path style={{ fill: color, opacity: opacity }} d="M698.85,832.99c1.41-3.08,2.18-6.77,4.37-9.18c6.44-7.1,6.93-16.6,10.81-24.7c4.11-8.56,3.9-17.77,4.17-27.03
		c0.13-4.41,2.52-8.79,4.06-13.12c1.3-3.66,4.41-7.1,0.3-11.08c-0.5-0.48,0.63-3.75,1.81-4.59c1.79-1.27,4.71-2.7,6.43-2.07
		c10.95,3.98,22.14,5.75,33.74,5.12c3.68-0.2,7.36-0.42,12.01-0.69c-2.18,4.43-4.21,7.54-5.22,10.95c-0.74,2.52-0.98,5.79,0.02,8.09
		c1.84,4.23,0.46,8.93-2.73,12.36c-6.23,6.7-14.19,12.18-17.19,21.43c-1.42,4.37-1.83,9.1-3.52,13.34
		c-1.94,4.86-4.2,9.81-7.37,13.91C731.68,837.21,711.66,840.52,698.85,832.99z"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        />
            </g>
        </Tooltip>
    )
}

export default CorrientesSubregion