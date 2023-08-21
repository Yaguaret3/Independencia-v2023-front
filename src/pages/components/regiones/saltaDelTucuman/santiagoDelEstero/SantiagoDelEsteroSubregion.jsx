import { Tooltip } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const SantiagoDelEsteroSubregion = () => {

    const [color, setColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
        setColor('aqua')
    }
    const handleMouseOut = () => {
        setColor('black')
    }

    return (
        <Tooltip title="Santiago del Estero">
            <g id="Santiago del Estero">
                <path style={{ fill: color, opacity: opacity }} d="M435.27,793.8c1.38-4.89,2.15-8.3,3.32-11.58c2.32-6.52,2.37-13.09-0.51-19.25
		c-3.13-6.67-7.05-12.97-10.43-19.09c3.06-2.06,5.95-4.09,8.92-5.99c3.85-2.46,7.75-4.87,11.68-7.21c1.49-0.89,3.23-1.36,4.67-2.3
		c5.46-3.56,10.7-7.48,16.32-10.75c2.06-1.2,4.95-0.95,7.6-1.38c-0.59-0.42-1.1-0.78-2.21-1.58c3.07,0,5.37-0.02,7.67,0.01
		c3.14,0.04,6.31,0.56,8.64-2.56c0.68-0.91,2.28-1.49,3.5-1.58c9.82-0.7,19.64-1.37,29.47-1.79c4.87-0.21,5.91,1.68,4.38,6.39
		c-1.18,3.64-2.16,7.36-3.07,11.09c-2.6,10.7,5.19,16.41,11.57,22.18c7.75,7.01,14.26,14.75,19.06,23.98
		c0.95,1.83,1.97,3.64,3.28,6.05c-4.52,0.85-8.92,1.32-13.11,2.53c-13.51,3.91-27.12,7.6-40.36,12.32
		c-14.26,5.09-28.45,5.08-42.74,1.4C454.26,792.47,445.78,790.35,435.27,793.8z"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        />
            </g>
        </Tooltip>
    )
}

export default SantiagoDelEsteroSubregion