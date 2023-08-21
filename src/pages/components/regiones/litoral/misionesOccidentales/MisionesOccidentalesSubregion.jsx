import { Tooltip } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const MisionesOccidentalesSubregion = () => {

    const [color, setColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
        setColor('lime')
    }
    const handleMouseOut = () => {
        setColor('black')
    }

    return (
        <Tooltip title="Misiones Occidentales">
            <g id="Misiones Occidentales">
                <path style={{ fill: color, opacity: opacity }} d="M888.01,674.66c2.25,6.06-3.69,8.71-7.31,11.56c-6.06,4.77-9.51,10.33-10.81,17.84
		c-1.08,6.23-2.44,12.56-4.87,18.36c-1.38,3.31-5.03,5.74-7.85,8.35c-6.48,6.02-13.32,11.69-19.55,17.96
		c-3.23,3.25-5.25,7.67-8.24,11.2c-2.95,3.47-4.76,4.7-9.51,0.09c-6.13-5.96-12.74-11.53-19.69-16.49c-3.45-2.47-2.34-4.3-0.71-6.33
		c2.11-2.62,4.67-4.89,7.09-7.25c0.54-0.52,1.27-1.04,1.98-1.16c4.34-0.74,8.68-1.85,13.05-1.94c12.07-0.25,19.78-7.14,26.26-16.26
		c4.26-6,8.87-11.76,12.98-17.86c5.09-7.56,9.43-15.47,9.16-25.09c-0.08-2.6,0.35-5.28,0.97-7.81c0.19-0.78,1.98-1.91,2.69-1.71
		c3.7,1.06,8.07,1.65,10.68,4.06c2.28,2.11,2.56,6.41,3.65,9.76C888.18,672.52,888.01,673.24,888.01,674.66z"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        />
            </g>
        </Tooltip>
    )
}

export default MisionesOccidentalesSubregion