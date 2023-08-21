import React from 'react'
import { useState } from 'react'
import { Tooltip } from '@mui/material'

const LaPazSubregion = () => {

	const [color, setColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
        setColor('yellow')
    }
    const handleMouseOut = () => {
        setColor('black')
    }

	return (
		<Tooltip title="La Paz">
			<g id="La Paz">
				<path
					style={{ fill: color, opacity: opacity }}
					d="M198.55,293.29c-4.84-7.48-8.56-13.9-13.03-19.75c-1.55-2.03-5.35-0.77-7.48-4.18
		c-4.8-7.7-10.77-14.66-16.12-22.03c-3.63-5.01-7.34-10.01-10.41-15.35c-4.45-7.72-11.07-12.83-18.15-17.93
		c-6-4.32-10.9-10.17-16.4-15.21c-2.87-2.62-7.36-4.39-8.7-7.56c-2.39-5.67-3.48-12.05-4.14-18.24c-0.65-6.14-0.54-12.45,0.19-18.58
		c0.27-2.25,2.86-4.89,5.08-6.12c5.28-2.95,11.6-4.33,16.27-7.94c3.62-2.79,9.49-3.48,10.65-9.28c0.15-0.76,1.24-1.68,2.06-1.91
		c7.66-2.08,14.08-8.61,22.93-6.49c0.63,0.15,1.69,0.29,1.94-0.03c4.5-5.8,13.8-4.59,17.26-11.87c1.38-2.91,3.02-5.7,4.32-8.64
		c1.78-4.02,3.63-8.05,4.94-12.23c1.41-4.51,6.82-6.49,6.77-12.1c-0.02-2.51,9.1-4.83,13.29-4.31c3.05,0.38,6.2-0.15,9.27,0.14
		c9.04,0.83,18.08,1.71,27.08,2.87c5.48,0.71,10.89,1.97,16.99,3.1c0,2.67-0.24,5.98,0.04,9.23c0.93,10.59,2.3,21.14,2.99,31.74
		c0.43,6.57,0.02,13.19-0.18,19.79c-0.17,5.44,0.21,11.07-1.07,16.27c-2.21,8.96,3.64,14.53,7.17,21.28
		c2.42,4.62,5.65,8.68,6.32,14.49c1.67,14.53,8.58,26.97,18.88,37.19c3.74,3.71,0.47,6.33,0.07,9.27
		c-0.64,4.68-1.99,9.29-3.38,13.82c-1.27,4.13-3.09,8.08-4.5,12.18c-0.68,1.97-0.73,4.16-1.44,6.12c-0.93,2.55-1.58,6.05-3.51,7.22
		c-5.53,3.34-10.21,8.04-17.45,8.9c-4.25,0.5-7.85,5.11-12.16,6.81c-3.35,1.31-7.37,1.47-11.04,1.23c-3.85-0.25-7.78-1.16-11.41-2.5
		c-8.36-3.09-16.96-1.8-25.45-1.71C203.89,290.99,200.76,292.65,198.55,293.29z"
		onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
		/>
			</g>
		</Tooltip>
	)
}

export default LaPazSubregion