import React from 'react'
import { useState } from 'react';
import { Tooltip, Modal, Box } from '@mui/material';
import Subregiones from './Subregiones';

const Region = ({ region }) => {
    const [color, setColor] = useState('black');
    const opacity = 0.3;
    const [open, setOpen] = useState(false);

    const handleMouseOver = () => {
        setColor(region.color)
    }
    const handleMouseOut = () => {
        setColor('black');
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Tooltip title={region.name}>
                <g>
                    <path
                        style={{
                            fill: color,
                            opacity: opacity
                        }}
                        d={region.area}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        onClick={handleOpen} />
                </g>
            </Tooltip>
            <Modal open={open} onClose={handleClose}>
                <Box style={{
                    position: 'absolute',
                    left: '20vw',
                    maxHeigth: '100vh',
                    maxWidth: '60vw',
                    color: 'black',
                    overflow: 'hidden'
                }}>
                    <img src='src\assets\img\map_independencia_recortado.jpg' style={{
                        position: 'relative',
                        left: region.bgLeft,
                        top: region.bgTop,
                        scale: region.bgScale
                    }} />
                    <Subregiones region={region}/>
                </Box>
            </Modal>
        </>
    )
}

export default Region