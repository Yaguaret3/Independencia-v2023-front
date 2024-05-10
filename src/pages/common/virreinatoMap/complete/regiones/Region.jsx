import React from 'react'
import { useState } from 'react';
import { Tooltip, Modal, Box } from '@mui/material';
import Subregiones from './Subregiones.jsx';

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

    const backgroundRegion =  encodeURI('src/assets/img/'+region.nombre+'.jpg');

    return (
        <>
            <Tooltip title={region.nombre}>
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
                    top: '50vh',
                    left: '50vw',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 3,
                    height:'95vh',
                    overflow:"hidden"

                }}>
                    <img src={backgroundRegion} height={'100%'}/>
                    <Subregiones region={region}/>
                </Box>
            </Modal>
        </>
    )
}

export default Region