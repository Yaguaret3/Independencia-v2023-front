import { Tooltip } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const SanLuisSubregion = () => {

    const [color, setColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
        setColor('orange')
    }
    const handleMouseOut = () => {
        setColor('black')
    }

    return (
        <Tooltip title="San Luis">
            <g id="San Luis">
                <path style={{ fill: color, opacity: opacity }} d="M411.95,956.69c-0.01,9.33-3.98,16.26-9.32,22.81c-1.81,2.21-2.95,5.36-3.38,8.23
		c-1.63,10.73-2.61,21.55-4.29,32.27c-1.4,8.97-6.3,13.13-15.36,12.62c-7.88-0.44-14.07,3.24-20.21,6.97
		c-3.19,1.94-5.22,1.61-7.1-1.05c-3.6-5.1-5.91-10.74-4.32-17.07c2.96-11.81,4.58-23.57,1-35.56c-0.26-0.87,0.48-2.21,1.07-3.13
		c2.37-3.71,4.98-7.26,7.23-11.03c0.88-1.48,1.2-3.36,1.51-5.1c0.79-4.41,1.54-7.82,7.63-8.37c2.95-0.27,7.08,1.11,7.93,0.17
		c2.93-3.26,6.15-1.52,9.08-1.64c7.7-0.31,15.43-0.12,23.14-0.13C408.2,956.69,409.85,956.69,411.95,956.69z"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        />
            </g>
        </Tooltip>
    )
}

export default SanLuisSubregion