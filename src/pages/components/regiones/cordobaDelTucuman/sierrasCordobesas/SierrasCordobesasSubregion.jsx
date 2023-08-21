import { Tooltip } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const SierrasCordobesasSubregion = () => {

    const [color, setColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
        setColor('orange')
    }
    const handleMouseOut = () => {
        setColor('black')
    }

    return (
        <Tooltip title="Sierras Cordobesas">
            <g id="Sierras Cordobesas">
                <path style={{ fill: color, opacity: opacity }} d="M422.04,948.64c0-2.62-0.25-4.85,0.05-7c0.56-4.01-0.95-7.14-3.13-10.34c-1.13-1.66-1.78-4.05-1.68-6.07
		c0.5-10.79-4.48-18.97-10.98-27.09c-5.16-6.45-8.42-14.17-8.55-22.96c-0.06-3.99-1.64-7.95-2.56-12.02
		c8.22-2.97,17.05-6.46,22.66-15.07c0.44-0.68,3.22-0.72,4.17-0.03c3.6,2.62,5.16,6.25,6.41,10.75c1.39,5,5.04,9.62,8.53,13.7
		c2.95,3.45,4.92,6.3,3.35,11.1c-0.58,1.78,0.29,5.11,1.71,6.29c9.34,7.81,14.79,17.64,18.28,29.24c1.34,4.47,5.79,8.38,9.61,11.63
		c6.54,5.59,13.98,10.12,20.47,15.76c3.38,2.94,5.52,7.29,9.1,12.21c-8.5,0-15.42-0.24-22.31,0.05c-13.24,0.57-25.52-2.5-37.67-7.67
		C434.31,948.95,428,949.41,422.04,948.64z"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        />
            </g>
        </Tooltip>
    )
}

export default SierrasCordobesasSubregion