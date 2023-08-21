import React from 'react'
import { Tooltip } from '@mui/material';
import { useState } from 'react';

const MaldonadoSubregion = () => {

    const [color, setColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
        setColor('red')
    }
    const handleMouseOut = () => {
        setColor('black')
    }

    return (
        <Tooltip title="Maldonado">
            <g id="Maldonado">
                <path style={{ fill: color, opacity: opacity }} d="M892.46,1056.11c-15.55,9.52-28.03,22.99-43.93,29.53c0.98,0.07,3.45,0.26,5.92,0.45
		c-0.01,0.28-0.02,0.56-0.03,0.83c-5.31,0-10.67,0.44-15.9-0.19c-2.54-0.31-4.93-2.49-7.23-4.06c-4.47-3.07-8.74-6.42-13.25-9.42
		c-2.88-1.91-2.98-3.29-0.01-5.14c2.61-1.63,4.91-3.76,7.56-5.32c2.84-1.67,2.85-3.85,0.69-6.27c-1.58-1.77-2.19-4.47-3.02-6.83
		c-1-2.83-2.31-5.71-2.49-8.62c-0.13-2.04,0.78-5.24,2.28-6.1c6.15-3.54,8.7-10.25,13.83-14.66c4.77-4.1,8.68-9.19,13.33-13.45
		c4.91-4.5,10.76-8.07,15.26-12.92c4.72-5.08,8.34-11.49,8.22-18.63c-0.1-5.89,3.28-9.78,5.58-14.4c2.98-5.98,5.81-12.04,8.74-18.04
		c0.38-0.78,0.89-1.69,1.59-2.05c0.41-0.21,1.7,0.37,1.95,0.9c3.72,7.61,7.4,15.24,10.87,22.96c0.42,0.93-0.3,3.46-0.71,3.51
		c-8.73,1.06-10.21,8.86-13.4,14.68c-7.91,14.42-8.71,30.19-8.5,46.29c0.12,8.94,2.67,16.09,9.18,22.03
		C890.18,1052.27,890.91,1053.86,892.46,1056.11z"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />
            </g>
        </Tooltip>
    )
}

export default MaldonadoSubregion