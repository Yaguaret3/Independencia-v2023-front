import React from 'react'
import CapitanSubRegion from "./CapitanSubRegion.jsx";

const CapitanRegionFrontground = ({ gameRegion }) => {

    debugger

  return (
    <svg height={gameRegion?.fgHeight} width={gameRegion?.fgHeight}
      viewBox={gameRegion?.fgViewBox}
      style={{
        position: 'absolute',
        zIndex: 1,
        top: gameRegion?.fgTop,
        left: gameRegion?.fgLeft
      }}>

      {gameRegion?.subRegions?.map((subregion) => {
        return (
          <CapitanSubRegion
            key={subregion.id}
            color={subregion.color}
            area={subregion.area}
            title={subregion.nombre}
          />
        )
      })}
    </svg>
  )
}

export default CapitanRegionFrontground