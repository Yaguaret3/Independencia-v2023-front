import React, {useContext} from 'react';
import {Box, Grid} from "@mui/material";
import VirreinatoMap from "../../control/components/map/VirreinatoMap.jsx";
import Acciones from "../../control/components/Acciones.jsx";
import {ControlContext} from "../Context.jsx";

const Cuerpo = () => {

    return (
        <Box sx={{ flexGrow: 1, padding: 0, height: '80vh', position: 'relative', overflow: 'hidden' }}>
            <Grid container spacing={5}>
                <Grid item xs={4} >
                    <VirreinatoMap/>
                </Grid>
                <Grid item xs={8}>
                    <Acciones />
                </Grid>
            </Grid>
        </Box>
    )
};

export default Cuerpo;