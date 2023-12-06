import React from 'react'
import CordobaSubregion from './cordoba/CordobaSubregion'
import FronteraSurSubregion from './fronteraSur/FronteraSurSubregion'
import MendozaSubregion from './mendoza/MendozaSubregion'
import RioCuartoSubregion from './rioCuarto/RioCuartoSubregion'
import SanJuanSubregion from './sanJuan/SanJuanSubregion'
import SanLuisSubregion from './sanLuis/SanLuisSubregion'
import SierrasCordobesasSubregion from './sierrasCordobesas/SierrasCordobesasSubregion'

const CordobaDelTucumanSubregiones = () => {
	return (
		<svg version="1.1" id="Cordoba_Del_Tucuman" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			viewBox="0 0 1069 1238.48" xmlSpace="preserve"
			style={{
				position: 'absolute',
				height: '370vh',
				top: '-235vh',
				left: '-1.8vw'
			}}>
			<SanJuanSubregion />
			<MendozaSubregion />
			<SanLuisSubregion />
			<FronteraSurSubregion />
			<RioCuartoSubregion />
			<SierrasCordobesasSubregion />
			<CordobaSubregion />
		</svg>
	)
}

export default CordobaDelTucumanSubregiones