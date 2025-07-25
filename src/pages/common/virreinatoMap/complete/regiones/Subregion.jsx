import React from 'react'
import { useState } from 'react'
import { Tooltip } from '@mui/material'

const Subregion = ({subregion}) => {

	const [color, setColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
		console.log()
        setColor(subregion.color)
    }
    const handleMouseOut = () => {
        setColor('black')
    }

	const title =
		<div>
			<p>{subregion?.nombre}</p>
			{subregion?.city  &&
				<>
					<p>Ciudad: {subregion?.city?.name || '-'}</p>
					<p><dd>Gob: {subregion?.city?.gobernadorName || '-'}</dd></p>
				</>}
			{subregion?.ejercitos.length !== 0  &&
				<p>Ejércitos:</p>}
			{subregion?.ejercitos?.map(e =>
				(<p key={e.id}><dd>{e.capitanName}</dd></p>)
			)}
			{subregion?.campamentos.length !== 0  &&
				<p>Campamentos:</p>}
			{subregion?.campamentos?.map(c =>
				(<p key={c.id}><dd>{c.capitanName}</dd></p>)
			)}
		</div>



	return (
		<Tooltip title={title} arrow>
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