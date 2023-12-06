import React from 'react'
import { Tooltip } from '@mui/material';
import { useState } from 'react';

const ValparaisoSubregion = () => {

    const [color, setColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
        setColor('purple')
    }
    const handleMouseOut = () => {
        setColor('black')
    }

    return (
        <Tooltip title="Valparaíso">

            <g id="Valparaíso">
                <path style={{ fill: color, opacity: opacity }} d="M184.8,1031.34c-7.58-1.67-15.62-3.35-23.59-5.32c-0.97-0.24-2.07-1.96-2.23-3.12
		c-0.55-4.09-0.67-8.24-1.03-12.36c-0.66-7.55,2.25-13.29,8.07-18.12c3.01-2.5,3.37-6.41,2.63-10.43c-0.86-4.65-1.15-9.4-1.81-15.11
		c6.45,0.68,12.45,0.68,18.02,2.2c2.19,0.6,4.59,4.47,4.89,7.08c0.72,6.3,0.81,12.79,0.14,19.1
		C188.64,1006.9,186.66,1018.47,184.8,1031.34z"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />
            </g>
        </Tooltip>
    )
}

export default ValparaisoSubregion