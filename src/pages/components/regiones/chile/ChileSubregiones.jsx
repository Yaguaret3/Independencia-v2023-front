import React from 'react'
import ConcepcionDeChileSubregion from './concepcionDeChile/ConcepcionDeChileSubregion'
import CopiapoSubregion from './copiapo/CopiapoSubregion'
import CoquimboSubregion from './coquimbo/CoquimboSubregion'
import CordilleraDeLosAndesSubregion from './cordilleraDeLosAndes/CordilleraDeLosAndesSubregion'
import OceanoPacificoSubregion from './oceanoPacifico/OceanoPacificoSubregion'
import SantiagoDeChileSubregion from './santiagoDeChile/SantiagoDeChileSubregion'
import ValparaisoSubregion from './valparaiso/ValparaisoSubregion'

const ChileSubregiones = () => {
  return (
    <svg version="1.1" id="Cordoba_Del_Tucuman" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 1069 1238.48" xmlSpace="preserve"
            style={{
                position: 'absolute',
                height: '195vh',
                top: '-95vh',
                left: '19.7vw'
            }}>
            
            <ConcepcionDeChileSubregion />
			<CopiapoSubregion />
			<CoquimboSubregion />
			<CordilleraDeLosAndesSubregion />
			<OceanoPacificoSubregion />
			<SantiagoDeChileSubregion />
			<ValparaisoSubregion />
        </svg>
  )
}

export default ChileSubregiones