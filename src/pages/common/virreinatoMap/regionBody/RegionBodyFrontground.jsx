import React from 'react'
import SubRegionBody from "./SubRegionBody.jsx";

const RegionBodyFrontground = ({ gameRegion }) => {

  return (
    <svg height={gameRegion?.fgHeight} width={gameRegion?.fgHeight}
      viewBox={gameRegion?.fgViewBox}
      style={{
        position: 'absolute',
        zIndex: 1,
        top: gameRegion?.fgTop,
        left: gameRegion?.fgLeft
      }}>

      {gameRegion?.subregions?.map((subregion) => {
        return (
          <SubRegionBody
            key={subregion.id}
            subregion={subregion}
          />
        )
      })}
    </svg>
  )
}

export default RegionBodyFrontground