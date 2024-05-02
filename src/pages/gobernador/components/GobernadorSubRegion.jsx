import React from 'react'
import { Tooltip } from '@mui/material';
import { useState } from 'react';

const GobernadorSubRegion = ({subregion }) => {

    const [currentColor, setCurrentColor] = useState('black')
    const opacity = 0.3;

    const handleMouseOver = () => {
        setCurrentColor(subregion?.color)
    }
    const handleMouseOut = () => {
        setCurrentColor('black')
    }

    const title =
        <div>
            <p>{subregion?.nombre}</p>
            {subregion?.city  &&
                <>
                    <p>Ciudad: {subregion?.city?.name || '-'}</p>
                    <p><dd>Gob: {subregion?.city?.gobernadorName || '-'}</dd></p>
                </>}
            {subregion?.ejercitos.length !== 0  &&
                <p>Ejércitos:</p>}
            {subregion?.ejercitos?.map(e =>
                (<p key={e.id}><dd>{e.capitanName}</dd></p>)
            )}
            {subregion?.campamentos.length !== 0  &&
                <p>Campamentos:</p>}
            {subregion?.campamentos?.map(c =>
                (<p key={c.id}><dd>{c.capitanName}</dd></p>)
            )}
        </div>

    return (
        <Tooltip title={title} arrow>
            <g>
                <path style={{ fill: currentColor, opacity: opacity }} d={subregion?.area}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />
            </g>
        </Tooltip>
    )
}

export default GobernadorSubRegion