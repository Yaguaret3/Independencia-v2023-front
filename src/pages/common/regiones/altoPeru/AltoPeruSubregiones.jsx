import React from 'react'
import LaPazSubregion from './laPaz/LaPazSubregion'
import MoxosSubregion from './moxos/MoxosSubregion'
import ChuquisacaSubregion from './chiquisaca/ChuquisacaSubregion'
import ChiquitosSubregion from './chiquitos/ChiquitosSubregion'
import CochabambaSubregion from './cochabamba/CochabambaSubregion'
import PotosiSubregion from './potosi/PotosiSubregion'
import AtacamaSubregion from './atacama/AtacamaSubregion'

const AltoPeruSubregiones = () => {
	return (
		<svg version="1.1" id="Alto_Peru" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			viewBox="0 0 1069 1238.48" xmlSpace="preserve"
			style={{
				position: 'absolute',
				height: '230vh',
				top: '-13vh',
				left: '12vw'
			}}>
			<LaPazSubregion />
			<MoxosSubregion />
			<ChiquitosSubregion />
			<CochabambaSubregion />
			<ChuquisacaSubregion />
			<PotosiSubregion />
			<AtacamaSubregion />
			
		</svg>
	)
}

export default AltoPeruSubregiones