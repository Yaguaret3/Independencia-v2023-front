import { Tooltip } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const YapeyuSubregion = () => {

    const [color, setColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
        setColor('lime')
    }
    const handleMouseOut = () => {
        setColor('black')
    }

    return (
        <Tooltip title="Yapeyú">
            <g id="Yapeyú">
                <path style={{ fill: color, opacity: opacity }} d="M751.13,827.44c2.45-7.9,5.43-14.43,6.34-21.24c0.94-7.05,4.63-11.69,9.38-16.09
		c2.98-2.76,6.04-5.42,9.05-8.14c5.92-5.36,4.52-12.35,3.32-18.75c-0.53-2.81-0.96-4.86,0.67-7.17c0.74-1.06,1.34-2.22,2-3.33
		c1.19-1.99,2.51-5.72,3.56-5.65c3.62,0.25,7.7,1.04,10.59,3.08c6.09,4.3,11.5,9.54,17.24,14.34c3.69,3.08,4.02,4.84,0.13,7.41
		c-5.66,3.74-9.84,8.62-12.67,14.6c-1.37,2.89-1.18,6.6-2.79,9.29c-3.56,5.94-7.96,11.38-11.76,17.19
		C778.01,825.47,764.56,824.51,751.13,827.44z"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        />
            </g>
        </Tooltip>
    )
}

export default YapeyuSubregion