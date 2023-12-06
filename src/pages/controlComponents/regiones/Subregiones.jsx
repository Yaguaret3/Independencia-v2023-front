import React from 'react'
import Subregion from './Subregion'

const Subregiones = ({region}) => {
	return (
		<svg id={region && region.nombre} 
			viewBox={region && region.fgViewBox}
			style={{
				position: 'absolute',
				height: region && region.fgHeight,
				top: region && region.fgTop,
				left: region && region.fgLeft
			}}>
            {region && region.subRegions && region.subRegions.map((subregion)=> (
                <Subregion subregion={subregion} />
            ))}
			
		</svg>
	)
}

export default Subregiones