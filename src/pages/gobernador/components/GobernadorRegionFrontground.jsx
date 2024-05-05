import React from 'react'
import GobernadorSubRegion from './GobernadorSubRegion';

const GobernadorRegionFrontground = ({gameRegion}) => {

    return (
        <svg height={gameRegion?.fgHeight} width={gameRegion?.fgHeight}
             viewBox={gameRegion?.fgViewBox}
             style={{
                 position: 'absolute',
                 zIndex: 1,
                 top: gameRegion?.fgTop,
                 left: gameRegion?.fgLeft
             }}>

            {gameRegion?.subregions.map((subregion) => {
                return (
                    <GobernadorSubRegion
                        key={subregion.id}
                        subregion={subregion}
                    />
                )
            })}
        </svg>
    )
}

export default GobernadorRegionFrontground