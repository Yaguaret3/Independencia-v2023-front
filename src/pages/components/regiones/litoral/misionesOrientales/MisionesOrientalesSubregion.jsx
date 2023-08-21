import { Tooltip } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const MisionesOrientalesSubregion = () => {

    const [color, setColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
        setColor('lime')
    }
    const handleMouseOut = () => {
        setColor('black')
    }

    return (
        <Tooltip title="Misiones Orientales">
            <g id="Misiones Orientales">
                <path style={{ fill: color, opacity: opacity }} d="M793.77,816.1c3.17-4.56,6.48-9.04,9.45-13.73c1.28-2.04,2.43-4.48,2.63-6.83
		c0.69-8.18,5.89-13.08,12.07-17.13c9.77-6.4,18.66-13.47,24.59-23.91c1.9-3.34,5.28-5.91,8.25-8.54
		c6.55-5.79,13.27-11.39,20.07-17.19c8.63,6.73,14.01,15.34,15.41,26.64c0.53,4.23,2.54,8.44,4.62,12.26
		c2.77,5.08,2.41,9.94,0.72,15.1c-3.66,11.19-12.65,16.86-22.15,22.35c-4.06,2.35-6.91,6.73-10.9,9.26
		c-7.11,4.49-14.5,8.67-22.14,12.17c-3.32,1.52-7.15,0.34-10.41-2.44c-6.43-5.47-13.4-10.27-22.49-9.26
		c-3.06,0.34-6.02,1.63-9.02,2.48C794.23,816.92,794,816.51,793.77,816.1z"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        />
            </g>
        </Tooltip>
    )
}

export default MisionesOrientalesSubregion