import React, {useContext} from 'react';
import {Box, Grid} from "@mui/material";
import VirreinatoMap from "../../control/components/map/VirreinatoMap.jsx";
import Acciones from "../../control/components/Acciones.jsx";
import {ControlContext} from "../Context.jsx";

const Cuerpo = () => {

    return (
        <Box width={'100%'} maxHeight={'100vh'}>
            <Grid container maxHeight={'100vh'}>
                <VirreinatoMap/>
                <Grid item xs={3}>
                    <Acciones />
                </Grid>
            </Grid>
        </Box>
    )
};

export default Cuerpo;