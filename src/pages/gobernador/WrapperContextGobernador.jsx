import React from 'react'
import GobernadorContextProvider from './Context'
import Gobernador from './Gobernador'

const WrapperContextGobernador = () => {
    return (
        <GobernadorContextProvider>
            <Gobernador />
        </GobernadorContextProvider>
    )
}

export default WrapperContextGobernador