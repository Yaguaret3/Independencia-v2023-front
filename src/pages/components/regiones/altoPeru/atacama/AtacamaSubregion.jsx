import React from 'react'
import { useState } from 'react'
import { Tooltip } from '@mui/material'

const AtacamaSubregion = () => {

    const [color, setColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
        setColor('yellow')
    }
    const handleMouseOut = () => {
        setColor('black')
    }

    return (
        <Tooltip title="Atacama">
            <g id="Atacama">
                <path style={{ fill: color, opacity: opacity }}
                    d="M194.6,455.57c6.36-2.6,12.75-4.68,18.58-7.79c3.95-2.11,7.14-3.4,9.81,0.99c2.91,4.79,8.95,8.57,6.83,15.22
		c-1.2,3.77-3.88,7.13-6.19,10.48c-5.34,7.75-11.04,15.25-16.24,23.09c-3.25,4.91-6.68,9.97-8.55,15.46
		c-2.54,7.46-3.92,14.87-0.44,23.24c4.03,9.69,12.2,15.08,18.47,22.4c5.02,5.87,8.17,12.51,9.51,20.77
		c-3.76-0.28-6.89-0.96-9.92-0.66c-6.55,0.65-13.1,1.58-19.56,2.83c-5.75,1.11-9.43,5.3-12.49,9.96
		c-3.64,5.53-7.11,11.17-10.66,16.76c-0.44-0.12-0.87-0.24-1.31-0.36c0.96-3.61,1.43-7.44,2.99-10.77
		c2.68-5.71,6.01-11.13,9.1-16.64c4.79-8.55,3.22-17.11-1.65-24.54c-4.84-7.37-6.33-14.26-3.23-22.59
		c3.49-9.36,6.77-18.86,9.17-28.54c1.58-6.35,1.48-13.11,2.06-19.7c0.46-5.26,0.63-10.55,1.28-15.78
		C192.74,464.69,193.79,460.02,194.6,455.57z"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        />
            </g>
        </Tooltip>
    )
}

export default AtacamaSubregion