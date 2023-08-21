import React from 'react'
import Regiones from './regiones/Regiones';


const VirreinatoMap = ({gameData}) => {

  const backgroundSrc = "src/assets/img/map_independencia_recortado.jpg";

  const backgroundMapComponent =
    <img src={backgroundSrc} alt="BackgroundImage" style={{ position:'absolute', top:0, left:0, maxHeight: '100%', width: 'auto' }} />;

  return (
    <>
        {backgroundMapComponent}
        <Regiones gameData={gameData}/>
    </>
  )
}

export default VirreinatoMap