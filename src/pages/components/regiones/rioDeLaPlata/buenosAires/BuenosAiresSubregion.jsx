import React from 'react'
import { Tooltip } from '@mui/material';
import { useState } from 'react';

const BuenosAiresSubregion = () => {

    const [color, setColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
        setColor('red')
    }
    const handleMouseOut = () => {
        setColor('black')
    }

    return (
        <Tooltip title="Buenos Aires">
            <g id="Buenos Aires">
                <path style={{ fill: color, opacity: opacity }} d="M667.95,1049.04c0.44,7.12,0.55,14.27,1.45,21.32c0.51,3.97,1.91,7.97,3.63,11.62
		c4.21,8.98,11.02,15.84,19.02,21.55c0.84,0.6,1.94,1.04,2.97,1.15c8.74,0.94,17.41,2.12,25.47,5.97c2.78,1.33,3.31,4.46,0.64,5.97
		c-5.45,3.08-7.52,7.53-7.18,13.69c0.16,2.8-0.67,5.69-1.38,8.46c-0.21,0.81-1.72,2.03-2.36,1.89c-7.53-1.75-12.14,3.98-17.76,6.91
		c-2.45,1.28-3.57,1.89-6.21-0.42c-6.04-5.31-13.16-9.4-19.27-14.65c-2.75-2.37-6.06-2.79-8.92-4.57
		c-4.91-3.06-10.34-5.33-15.62-7.78c-1.56-0.72-3.36-1.35-5.03-1.3c-10.27,0.32-20.54,1.17-30.81,1.21
		c-13.4,0.06-23.54-5.46-33.1-15.61c-9.85-10.46-8.12-20.22-4.84-31.51c1.97-6.77,4.39-13.6,4.95-20.54
		c0.5-6.23,4.31-8.06,8.72-9.45c12.13-3.83,24.25-7.34,37.38-6.54c4.56,0.28,9.41-2.88,13.99-4.78c3.22-1.33,5.99-1.7,8.42,1.28
		c5.91,7.25,14.49,10.7,22.12,15.48C665.15,1048.94,666.48,1048.8,667.95,1049.04z"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />
            </g>
        </Tooltip>
    )
}

export default BuenosAiresSubregion