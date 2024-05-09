import React from 'react'
import Subregion from './Subregion.jsx'

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
            {region?.subregions?.map((subregion)=> (
                <Subregion subregion={subregion} key={subregion.id}/>
            ))}
			
		</svg>
	)
}

export default Subregiones