import React from 'react'
import CatamarcaSubregion from './catamarca/CatamarcaSubregion'
import JujuySubregion from './jujuy/JujuySubregion'
import LaRiojaSubregion from './laRioja/LaRiojaSubregion'
import SaltaSubregion from './salta/SaltaSubregion'
import SantiagoDelEsteroSubregion from './santiagoDelEstero/SantiagoDelEsteroSubregion'
import TarijaSubregion from './tarija/TarijaSubregion'
import TucumanSubregion from './tucuman/TucumanSubregion'

const SaltaDelTucumanSubregiones = () => {
    return (
        <svg version="1.1" id="Salta_Del_Tucuman" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 1069 1238.48" xmlSpace="preserve"
            style={{
                position: 'absolute',
                height: '290vh',
                top: '-100vh',
                left: '10vw'
            }}>
            <TarijaSubregion />
            <JujuySubregion />
            <SaltaSubregion />
            <TucumanSubregion />
            <SantiagoDelEsteroSubregion />
            <CatamarcaSubregion />
            <LaRiojaSubregion />
        </svg>
    )
}

export default SaltaDelTucumanSubregiones