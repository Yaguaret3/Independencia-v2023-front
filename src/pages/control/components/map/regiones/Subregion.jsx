import React from 'react'
import { useState } from 'react'
import { Tooltip } from '@mui/material'

const Subregion = ({subregion}) => {

	const [color, setColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
        setColor(subregion.color)
    }
    const handleMouseOut = () => {
        setColor('black')
    }

	return (
		<Tooltip title={subregion.nombre}>
			<g id={subregion.nombre}>
				<path
					style={{ fill: color, opacity: opacity }}
					d={subregion.area}
		onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
		/>
			</g>
		</Tooltip>
	)
}

export default Subregion