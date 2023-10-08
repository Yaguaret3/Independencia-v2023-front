import React from 'react'
import { Tooltip } from '@mui/material';
import { useState } from 'react';

const CapitanSubRegion = ({color, area, title }) => {

    const [currentColor, setCurrentColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
        setCurrentColor(color)
    }
    const handleMouseOut = () => {
        setCurrentColor('black')
    }

    return (
        <Tooltip title={title} arrow>
            <g>
                <path style={{ fill: currentColor, opacity: opacity }} d={area}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />
            </g>
        </Tooltip>
    )
}

export default CapitanSubRegion