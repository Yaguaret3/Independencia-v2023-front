import React from 'react'
import { Tooltip } from '@mui/material';
import { useState } from 'react';

const CordilleraDeLosAndesSubregion = () => {

    const [color, setColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
        setColor('purple')
    }
    const handleMouseOut = () => {
        setColor('black')
    }

    return (
        <Tooltip title="Cordillera de los Andes">
            <g id="Cordillera de Los Andes">
                <path style={{ fill: color, opacity: opacity }} d="M243.44,1112.66c-5.07-1.97-8.82-6.48-15.04-6.12c-3,0.18-6.15-1.73-5.58-6.14
		c1.15-8.84,1.96-17.73,3.26-26.54c0.85-5.73,2.85-11.32,3.38-17.06c0.87-9.39,0.52-18.89,1.5-28.26
		c1.16-11.09,3.48-22.05,4.76-33.13c0.93-8,0.98-16.1,1.49-25.28c2.86,0.93,5.32,2.19,7.9,2.46c3.79,0.4,7.65,0.04,11.47,0.1
		c5.05,0.09,7.29,3.24,4.99,7.77c-1.92,3.8-4.75,7.15-7.12,10.73c-0.87,1.32-2.35,2.77-2.28,4.09c0.67,11.84-4.8,22.71-5.43,34.14
		c-0.63,11.47,1.01,23.07,1.75,34.61c0.28,4.39,0.76,8.77,1.26,13.14c0.7,6.22,1.4,12.43,2.29,18.62c0.8,5.54-0.96,9.83-5.45,13.17
		C245.32,1109.93,244.47,1111.44,243.44,1112.66z"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />
            </g>
        </Tooltip>
    )
}

export default CordilleraDeLosAndesSubregion