import React from 'react'
import BuenosAiresSubregion from './buenosAires/BuenosAiresSubregion'
import BandaOrientalSubregion from './bandaOriental/BandaOrientalSubregion'
import EntreRiosSubregion from './entreRios/EntreRiosSubregion'
import MaldonadoSubregion from './maldonado/MaldonadoSubregion'
import MontevideoSubregion from './montevideo/MontevideoSubregion'
import RioDeLaPlataSubregion from './rioDeLaPlata/RioDeLaPlataSubregion'
import SantaFeSubregion from './santaFe/SantaFeSubregion'

const RioDeLaPlataSubregiones = () => {
    return (
        <svg version="1.1" id="Cordoba_Del_Tucuman" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 1069 1238.48" xmlSpace="preserve"
            style={{
                position: 'absolute',
                height: '370vh',
                top: '-248vh',
                left: '-108vh'
            }}>

            <BuenosAiresSubregion />
            <SantaFeSubregion />
            <EntreRiosSubregion />
            <BandaOrientalSubregion />
            <MaldonadoSubregion />
            <MontevideoSubregion />
            <RioDeLaPlataSubregion />
        </svg>
    )
}

export default RioDeLaPlataSubregiones