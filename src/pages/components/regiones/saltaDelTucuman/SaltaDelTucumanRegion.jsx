import React from 'react'
import { useState } from 'react';
import { Tooltip, Modal } from '@mui/material';
import SaltaDelTucumanSubregiones from './SaltaDelTucumanSubregiones';

const SaltaDelTucumanRegion = () => {

	const [saltaDelTucumanColor, setSaltaDelTucumanColor] = useState('black');
	const saltaDelTucumanOpacity = 0.3;
	const [open, setOpen] = useState(false);

	const handleMouseOverSaltaDelTucuman = () => {
		setSaltaDelTucumanColor('aqua');
	}
	const handleMouseOutSaltaDelTucuman = () => {
		setSaltaDelTucumanColor('black');
	}
	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Tooltip title="Salta del Tucumán">
				<g id="salta_del_tucuman">
					<path
						style={{
							fill: saltaDelTucumanColor,
							opacity: saltaDelTucumanOpacity
						}}
						d="M565.37,772.16c-0.73-1.34-1.37-2.5-1.99-3.68c-4.92-9.46-11.76-18.08-20.9-26.36
		c-0.56-0.51-1.14-1.02-1.71-1.53c-6.56-5.82-8.31-8.15-7.3-12.33c1.05-4.3,1.94-7.53,2.89-10.47c0.64-1.97,2.58-7.96-1.2-12.94
		c-0.72-0.95-1.59-1.74-2.55-2.4l0.47-0.22l-11.25-8.53c-8.43-6.4-15.67-12.33-18.95-20.2c-0.83-2-1.76-3.89-2.67-5.71
		c-2.25-4.56-4.19-8.49-3.67-12.27c0.58-4.17,1.39-7.5,2.47-10.17c5.24-12.93,2.89-20.54-8.68-28.09c-0.94-0.61-1.94-1.4-3.01-2.24
		c-1.38-1.09-2.95-2.33-4.73-3.44c-6.17-3.87-10.5-4.19-14.5-2.18c-0.45-0.89-0.89-1.77-1.31-2.64c-1.58-3.24-3.21-6.59-5.59-9.7
		c-1.99-2.6-3.22-5.41-3.88-8.84c-0.09-0.47-0.17-0.94-0.26-1.42c-0.43-2.39-0.91-5.1-2.1-7.88c-2.92-6.84-3.35-12.94-1.34-19.21
		c1.74-5.43,1.42-10.45-0.77-14.63h0.35v-8.43c0-0.98,0.01-1.93,0.02-2.86c0.02-2.13,0.05-4.34-0.05-6.58
		c-0.1-2.27-0.27-4.52-0.42-6.7c-0.18-2.55-0.36-4.96-0.44-7.37c-0.04-1.13-0.13-2.21-0.22-3.25c-0.11-1.33-0.28-3.33-0.12-4.03
		c2.63-6.2,5.62-12.19,8.77-18.52c1.64-3.3,3.34-6.71,4.97-10.12c1.47-3.08,1.84-6.15,1.16-8.87c3.09-2.44,5.02-6.42,5.73-11.94
		c0.46-3.53,1.17-7.07,1.93-10.82c0.91-4.49,1.84-9.14,2.35-13.96c0.5-4.71-0.68-9.96-3.51-15.62c-4.42-8.84-17.64-3.96-17.78-3.91
		c-3.8,1.44-7.52,3.03-11.12,4.58c-4.96,2.13-9.64,4.13-14.42,5.71c-6.85,2.26-12.2,5.89-17.37,9.39c-0.94,0.64-1.88,1.28-2.83,1.91
		c-4.13,2.73-6.67,6.61-7.14,10.92c-0.45,4.03,0.96,7.97,3.96,11.08c0.73,0.76,0.9,1.33,0.82,5.18c-0.01,0.54-0.02,1.08-0.02,1.63
		c-0.01,2.25-0.01,4.49-0.01,6.98v8.93c-1.22,1.23-2.34,2.64-3.32,4.27c-0.29-0.22-0.6-0.44-0.92-0.64
		c-1.51-0.93-4.57-2.37-8.15-1.48l-1.29,0.32c-4.07,1-8.28,2.04-12.48,3.68c-2.74,1.07-5.29,2.31-7.77,3.51
		c-3.5,1.7-6.8,3.3-9.94,4.07c-9.95,2.41-18.03,7.3-24.01,14.51c-2.45,2.96-4.16,6.21-5.67,9.08c-1.11,2.12-2.16,4.11-3.33,5.66
		c-2.24,2.97-4.82,5.79-7.56,8.78c-2,2.19-4.07,4.45-6.06,6.83c-3.2,3.84-6.73,9.03-5.64,15.14c0.02,0.13,0.06,0.24,0.08,0.37
		c-1.79,0.48-3.49,1.32-4.86,2.6c-2.53,2.35-4.82,4.82-7.04,7.2c-2.02,2.16-3.92,4.2-5.91,6.08c-7.68,7.25-6.18,15.82-5.28,20.94
		c0.27,1.54,0.52,2.98,0.5,4.01c-0.15,6.82,0.06,13.65,0.26,20.25c0.08,2.56,0.16,5.13,0.22,7.69c-3.06,4.63-6.52,7.76-10.81,9.77
		c-3.83,1.8-7.64,3.71-11.31,5.56c-3.14,1.58-6.4,3.21-9.58,4.73c-6.98,3.33-9.97,10.48-7.45,17.78c1.31,3.8,3.03,7.21,4.69,10.52
		c0.4,0.8,0.8,1.6,1.2,2.4c0.99,2.02,2.05,3.96,3.07,5.83c1.91,3.51,3.72,6.82,4.77,10.07c0.48,1.5,0.6,3.64,0.73,5.92
		c0.19,3.31,0.4,7.06,1.77,10.86c3.05,8.48,5.79,17.84,5.13,28.72l-0.02,0.51c0,0.96,0.08,1.91,0.15,2.82
		c0.08,0.97,0.23,2.78,0.05,3.37c-0.88,2.79-1.5,7.8,3.05,12.11l-0.56,1.32c-1.03,2.44-1.84,4.89-2.54,7.05
		c-0.99,3.04-2.12,6.48-3.29,7.57c-7.06,6.54-16.61,15.39-15.06,30.17c-0.56,1.41-1.15,2.82-1.77,4.29
		c-1.89,4.52-3.83,9.18-5.17,14.24c-0.09,0.34-0.2,0.69-0.32,1.06c-3.52,11.23,1.56,16.53,6.45,19c2.3,1.16,4.54,1.33,5.88,1.43
		c0.18,0.01,0.37,0.02,0.55,0.04c2.3,0.67,4.62,1.53,7.08,2.44c5.97,2.21,12.75,4.72,20.57,4.76c2.09,0.01,4.58,0.71,6.05,1.71
		c4.8,3.25,9.22,7.28,13.91,11.55l0.8,0.73c3.25,2.95,6.23,6.29,8.98,9.46c3.03,3.5,6.23,4.31,8.55,4.31c0.18,0,0.36,0,0.53-0.01
		c5.12-0.28,7.89-4.27,8.8-5.59l0.69-1c3.55-5.15,5.75-8.12,9.6-9.17c3.17-0.86,6.04-2.05,8.82-3.19c3.21-1.33,6.24-2.58,8.91-2.93
		c1.2-0.16,2.4-0.28,3.59-0.41c5.69-0.59,12.14-1.27,18.53-5.1c0.91-0.54,2.4-1.02,3.97-1.52c2.15-0.69,4.58-1.46,7.02-2.83
		c6.19-3.47,12.37-7.41,18.36-11.71c4.03-2.89,7.22-6.51,9.89-9.68c1.24-1.47,2.58-4.02,2.01-7.82c0.84-0.28,1.66-0.62,2.45-1.04
		c3.58-1.9,6.26-5.03,7.64-8.76l2.29-0.75c8.24-2.71,15.02-0.96,22.87,1.06c16.87,4.35,32.48,3.81,47.72-1.62
		c10.54-3.76,21.64-6.94,32.38-10.01c2.5-0.71,5-1.43,7.49-2.15c2.36-0.68,5.02-1.12,7.84-1.58c1.48-0.24,2.97-0.48,4.48-0.77
		l11.47-2.16L565.37,772.16z"
						onMouseOut={handleMouseOutSaltaDelTucuman}
						onMouseOver={handleMouseOverSaltaDelTucuman}
						onClick={handleOpen} />
				</g>
			</Tooltip>
			<Modal open={open} onClose={handleClose}>
				<div onClick={handleClose}
					style={{ height: '100vh', width: 'auto', display: 'flex', justifyContent: 'center' }}>
					<div style={{ height: '100vh', width: '60vw', left: '30vw', overflow: 'hidden' }}>
						<img src='src\assets\img\map_independencia_recortado.jpg' style={{
							position: 'relative',
							height: '280vh',
							left: '-7vw',
							top: '-90vh'
						}} />
						<SaltaDelTucumanSubregiones />
					</div>
				</div>
			</Modal>
		</>
	)
}

export default SaltaDelTucumanRegion