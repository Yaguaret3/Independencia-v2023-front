import { Tooltip } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const RioCuartoSubregion = () => {

    const [color, setColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
        setColor('orange')
    }
    const handleMouseOut = () => {
        setColor('black')
    }

    return (
        <Tooltip title="Río Cuarto">
            <g id="Río Cuarto">
                <path style={{ fill: color, opacity: opacity }} d="M401.31,1024.46c1.28-7.75,2.65-16.13,4.04-24.5c0.14-0.82,0.7-1.68,0.54-2.41
		c-1.9-8.29,2.73-14.16,7.28-20.09c2.97-3.86,4.82-7.98,5.01-13.11c0.07-1.94,2.89-4.05,4.86-5.55c1.49-1.13,3.65-2.06,5.45-1.95
		c3.21,0.19,6.41,1.04,9.53,1.93c8.75,2.49,17.32,6.5,26.21,7.37c10.96,1.07,22.27,0.35,33.26-1.02
		c10.22-1.27,20.37-0.92,30.42-0.12c5.66,0.45,11.02,4.3,16.59,6.43c4.96,1.89,9.96,3.7,15.05,5.2c5.35,1.58,10.98,2.44,14.02,7.17
		c-6.74,19.23-7.92,40.01-18.32,57.18c-8.75-1.38-17.69-2.15-26.26-4.32c-8.94-2.27-17.46-6.16-26.32-8.85
		c-6.82-2.07-13.8-4.2-20.84-4.85c-10.56-0.99-21.24-1.14-31.85-0.86C434.15,1022.51,418.35,1023.6,401.31,1024.46z"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        />
            </g>
        </Tooltip>
    )
}

export default RioCuartoSubregion