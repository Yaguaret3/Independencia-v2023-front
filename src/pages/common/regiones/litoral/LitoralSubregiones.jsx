import React from 'react'
import AltoParaguaySubregion from './altoParaguay/AltoParaguaySubregion'
import AsuncionSubregion from './asuncion/AsuncionSubregion'
import CorrientesSubregion from './corrientes/CorrientesSubregion'
import GuayraSubregion from './guayra/GuayraSubregion'
import MisionesOccidentalesSubregion from './misionesOccidentales/MisionesOccidentalesSubregion'
import MisionesOrientalesSubregion from './misionesOrientales/MisionesOrientalesSubregion'
import YapeyuSubregion from './yapeyu/YapeyuSubregion'

const LitoralSubregiones = () => {
  return (
    <svg version="1.1" id="Cordoba_Del_Tucuman" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 1069 1238.48" xmlSpace="preserve"
            style={{
                position: 'absolute',
                height: '270vh',
                top: '-88vh',
                left: '-21.8vw'
            }}>
            <CorrientesSubregion />
            <YapeyuSubregion />
            <MisionesOrientalesSubregion />
            <MisionesOccidentalesSubregion />
            <AsuncionSubregion />
            <GuayraSubregion />
            <AltoParaguaySubregion />
        </svg>
  )
}

export default LitoralSubregiones