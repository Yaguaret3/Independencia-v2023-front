import { Tooltip } from '@mui/material'
import React from 'react'
import { useState } from 'react'
const GuayraSubregion = () => {

    const [color, setColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
        setColor('lime')
    }
    const handleMouseOut = () => {
        setColor('black')
    }

    return (
        <Tooltip title="Guayrá">
            <g id="Guayrá">
                <path style={{ fill: color, opacity: opacity }} d="M859.14,629.04c-2.25-7.67-4.68-14.99-6.46-22.47c-0.87-3.65-1.06-7.66-0.61-11.39
		c1.21-10.07-1.3-19.03-6.84-27.34c-4.15-6.22-8.18-12.52-12.46-19.07c1.2-0.58,3.15-1.18,4.7-2.32c4.51-3.33,1.7-7.52,0.2-10.65
		c-4.23-8.85-10.28-16.46-18.71-21.76c-3.32-2.09-6.95-3.78-10.61-5.19c-4.82-1.86-6.18-6.59-2.22-12.69
		c2.93-4.51,6.96-8.36,10.85-12.15c0.88-0.86,3.66-0.9,4.81-0.15c8.38,5.48,17.7,7.72,27.45,8.88c2.68,0.32,5.43,0.99,7.9,2.06
		c6.36,2.74,12.32,2.17,18.94,0.23c5.89-1.73,12.43-1.22,18.69-1.65c1.32-0.09,2.66,0.03,3.99,0.05c8.93,0.14,8.79,0.15,9.41,8.84
		c0.31,4.4,0.8,8.87,1.95,13.11c1.98,7.29-2.45,11.67-6.61,16.24c-2.65,2.91-5.76,5.43-8.18,8.5c-1.06,1.35-1.43,3.7-1.24,5.5
		c1.07,9.73-4.56,17.03-8.54,25c-6.21,12.43-15.87,23.51-16.24,38.29c-0.2,7.84-4.05,13.69-8.46,19.48
		C860.46,628.89,859.45,628.93,859.14,629.04z"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        />
            </g>
        </Tooltip>
    )
}

export default GuayraSubregion