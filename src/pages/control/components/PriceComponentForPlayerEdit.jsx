import React, {useState} from 'react';
import {Button, Grid} from "@mui/material";
import PreciosModal from "./modals/PreciosModal.jsx";

const PriceComponentForPlayerEdit = ({player}) => {

    const [showPrecios, setShowPrecios] = useState(false);
    const handleToggleShowPrecios = () => {
        setShowPrecios(!showPrecios);
    }

    return (
        <>
            <Grid item xs={12}>
                <Button onClick={handleToggleShowPrecios}
                        size="small" variant='contained' color='warning' fullWidth>Precios</Button>
            </Grid>
            <PreciosModal
                show={showPrecios}
                precios={player?.prices}
                playerRol={player?.rol}/>
        </>
    );
}

export default PriceComponentForPlayerEdit;