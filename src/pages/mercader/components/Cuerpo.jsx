import React, {useContext} from 'react'
import {Box, Grid} from '@mui/material'
import Acciones from './Acciones'
import VirreinatoMapComplete from "../../common/virreinatoMap/complete/VirreinatoMapComplete.jsx";
import {MercaderContext} from '../Context'
import Cartas from "./Cartas.jsx";

const Cuerpo = () => {

    const {gameData} = useContext(MercaderContext);

    return (
        <Box width={'100%'} maxHeight={'100vh'}>
            <Grid container maxHeight={'100vh'}>
                <VirreinatoMapComplete gameData={gameData} xs={6} xl={6}/>
                <Grid item xs={3} xl={3}>
                    <Cartas/>
                </Grid>
                <Grid item xs={3} xl={3}>
                    <Acciones/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Cuerpo