import React, {useState} from 'react';
import {Button} from "@mui/material";
import PreciosModal from "./modals/PreciosModal.jsx";

const PriceComponentForPlayerEdit = ({player}) => {

    const [openPreciosModal, setOpenPreciosModal] = useState(false);
    const handleOpenPreciosModal = () => {
        setOpenPreciosModal(true);
    }
    const handleClosePreciosModal = () => {
        setOpenPreciosModal(false);
    }

    return (
        <>
            <Button onClick={handleOpenPreciosModal}
                    size="small" variant='contained' color='warning' fullWidth>Precios</Button>
            <PreciosModal
                open={openPreciosModal}
                handleClose={handleClosePreciosModal}
                precios={player?.prices}/>
        </>
    );
};

export default PriceComponentForPlayerEdit;