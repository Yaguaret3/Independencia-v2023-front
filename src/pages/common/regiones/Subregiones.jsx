import React from 'react'
import Subregion from './Subregion'

const Subregiones = ({region}) => {
	return (
		<svg id={region?.nombre}
			viewBox={region?.fgViewBox}
			style={{
				position: 'absolute',
				height: region?.fgHeight,
				top: region?.fgTop,
				left: region?.fgLeft
			}}>
            {region.subregions.map((subregion)=> (
                <Subregion subregion={subregion} />
            ))}
			
		</svg>
	)
}

export default Subregiones