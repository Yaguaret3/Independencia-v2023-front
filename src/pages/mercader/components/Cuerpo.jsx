import React, {useContext} from 'react'
import {Box, Grid} from '@mui/material'
import Acciones from './Acciones'
import VirreinatoMap from "../../common/virreinatoMap/VirreinatoMap.jsx";
import {MercaderContext} from '../Context'

const Cuerpo = () => {

    const {gameData} = useContext(MercaderContext);

    return (
        <Box width={'100%'} maxHeight={'100vh'}>
            <Grid container maxHeight={'100vh'}>
                <VirreinatoMap gameData={gameData} xs={9} xl={6}/>
                <Grid item xs={3} xl={6}>
                    <Acciones/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Cuerpo