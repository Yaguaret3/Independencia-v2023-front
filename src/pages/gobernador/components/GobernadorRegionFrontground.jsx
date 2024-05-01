import React from 'react'
import GobernadorSubRegion from './GobernadorSubRegion';

const GobernadorRegionFrontground = ({gameRegion}) => {

    return (
        <svg height={gameRegion && gameRegion.fgHeight} width={gameRegion && gameRegion.fgHeight}
             viewBox={gameRegion && gameRegion.fgViewBox}
             style={{
                 position: 'absolute',
                 zIndex: 1,
                 top: gameRegion && gameRegion.fgTop,
                 left: gameRegion && gameRegion.fgLeft
             }}>

            {gameRegion?.subRegions.map((subregion) => {
                return (
                    <GobernadorSubRegion
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

export default GobernadorRegionFrontground