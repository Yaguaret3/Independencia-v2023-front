import React from 'react'
import { Tooltip } from '@mui/material';
import { useState } from 'react';

const JujuySubregion = () => {

    const [color, setColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
        setColor('aqua')
    }
    const handleMouseOut = () => {
        setColor('black')
    }

    return (
        <Tooltip title="Jujuy">
            <g id="Jujuy">
                <path style={{ fill: color, opacity: opacity }} d="M444.69,536.65c-7.26,0.06-14.23-0.43-20.35,4.06c-4.69,3.44-9.97,1-14.44-0.3
		c-3.84-1.12-6.87,0.31-10.25,0.44c-2.6,0.1-3.74-0.8-4.45-3.33c-1.5-5.32-3.84-10.44-4.95-15.82c-0.51-2.48,0.37-5.89,1.84-8.03
		c5.21-7.57,9.51-15.97,17.46-21.33c0.15-0.1,0-0.58,0.07-0.86c2.57-10.46,11.95-11.63,19.98-14.68c3.77-1.43,7.39-3.34,11.25-4.45
		c4.91-1.41,9.96-2.56,15.02-3.21c3.51-0.45,3.12,2.34,2.13,4.39c-4.63,9.7-9.74,19.18-13.93,29.06c-1.31,3.1-0.43,7.2-0.3,10.83
		c0.17,4.72,0.65,9.44,0.87,14.16C444.8,530.52,444.69,533.45,444.69,536.65z"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />
            </g>
        </Tooltip>
    )
}

export default JujuySubregion