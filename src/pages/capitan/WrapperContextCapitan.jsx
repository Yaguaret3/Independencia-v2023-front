import React from 'react'
import Capitan from './Capitan.jsx'

const WrapperContextCapitan = () => {
    
  return (
    <CapitanContextProvider>
        <Capitan />
    </CapitanContextProvider>
  )
}

export default WrapperContextCapitan