import React from 'react'
import { Tooltip } from '@mui/material';
import { useState } from 'react';

const RioDeLaPlataSubregion = () => {

    const [color, setColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
        setColor('red')
    }
    const handleMouseOut = () => {
        setColor('black')
    }

    return (
        <Tooltip title="Río de la Plata">
            <g id="Rio de la Plata">
                <path style={{ fill: color, opacity: opacity }} d="M730.73,1114.83c1.53,0.7,2.71,2.14,2.76,4.32c0.22,10.77,6.47,17.97,12.96,25.89
	c6.34,7.73,11,16.07,14.75,25.26c2.63-3.05,5.44-5.92,8.82-8.2c5.3-3.58,11.33-4.42,16.38-8.63c4.76-3.97,8.94-8.01,15.01-9.89
	c6.17-1.91,13.93-1.06,19.21-5.21c5.15-4.05,7.37-10.71,11.8-15.43c4.06-4.32,10.69-6.57,13.78-11.74
	c2.64-4.42,2.5-10.37,4.36-15.16c0.17-0.44,0.37-0.87,0.56-1.3c-5.65,0.11-11.38,0.66-16.83-0.32c-3.61-0.65-6.81-4.09-10-6.52
	c-4.62-3.51-8.88-7.52-13.64-10.81c-3.71-2.57-11.28,0.26-14.08,4.71c-6.82,10.84-17.78,11.83-28.36,4.46
	c-6.59-4.6-9.14-10.78-11.99-17.34c-0.37-0.86-1.14-1.65-1.92-2.2c-2.04-1.43-4.14-2.79-6.31-4.02c-4.13-2.33-8.48-4.32-12.44-6.9
	c-2.97-1.94-5.33-4.8-8.24-6.86c-2.43-1.71-10.03,3.4-11.8,7.7c-1.23,3-2.33,6.05-3.64,9.01c-1.77,4-6.18,4.15-9.3,0.17
	c-4.15-5.3-8.19-10.7-12.08-16.2c-3.63-5.13-6.93-10.5-10.57-15.62c-0.61-0.86-2.22-1.02-3.37-1.5c-0.4,0.31-0.8,0.63-1.2,0.94
	c0.77,1.88,1.77,3.7,2.23,5.65c0.38,1.65,0.66,4.7,0.05,4.96c-4.01,1.74-2.72,5.7-2.35,7.7c1.9,10.41,3.47,21.17,7.53,30.8
	c2.51,5.94,7.47,11.5,14.72,14.61c3.7,1.58,6.98,0.38,10.08,1.62c6.55,2.62,14.02,2.82,19.7,7.85
	C729.6,1108.72,731.02,1111.88,730.73,1114.83z"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />
            </g>
        </Tooltip>
    )
}

export default RioDeLaPlataSubregion