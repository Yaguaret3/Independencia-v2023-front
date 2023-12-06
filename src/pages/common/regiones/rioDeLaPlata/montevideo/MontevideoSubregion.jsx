import React from 'react'
import { Tooltip } from '@mui/material';
import { useState } from 'react';

const MontevideoSubregion = () => {

    const [color, setColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
        setColor('red')
    }
    const handleMouseOut = () => {
        setColor('black')
    }

    return (
        <Tooltip title="Montevideo">
            <g id="Montevideo">
                <path style={{ fill: color, opacity: opacity }} d="M731.89,1044.3c4.21-8.3,4.23-7.57,12.63-7.85c8.69-0.29,17.32-2.28,26-3.35c3.12-0.39,6.3-0.32,9.45-0.38
		c3.99-0.07,8.23,0.75,11.92-0.33c3.63-1.06,6.6,0.82,10.02,0.54c3.7-0.31,7.57,1.38,11.02,2.12c1.05,7.14,1.9,14.6,3.34,21.94
		c0.73,3.72-1.55,4.58-3.89,5.76c-0.69,0.34-1.8,0.21-2.19,0.71c-3.85,5-8.81,6.74-14.79,4.98c-2.84,4.53-5.23,8.91-8.2,12.84
		c-2.15,2.86-10.14,2.03-13.92-1.09c-5.32-4.39-8.94-10.13-11.13-16.49c-1.4-4.08-5.05-5.6-7.71-6.65
		C746.22,1053.8,738.75,1049.63,731.89,1044.3z"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        />
            </g>
        </Tooltip>
    )
}

export default MontevideoSubregion