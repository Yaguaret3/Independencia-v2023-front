import React, {useState} from 'react';
import {Button, Grid} from "@mui/material";
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
            <Grid item xs={12}>
                <Button onClick={handleOpenPreciosModal}
                        size="small" variant='contained' color='warning' fullWidth>Precios</Button>
            </Grid>
            <PreciosModal
                open={openPreciosModal}
                handleClose={handleClosePreciosModal}
                precios={player?.prices}/>
        </>
    );
};

export default PriceComponentForPlayerEdit;