import React from 'react'
import Capitan from './Capitan.jsx'
import CapitanContextProvider from "./Context.jsx";

const WrapperContextCapitan = () => {
    
  return (
    <CapitanContextProvider>
        <Capitan />
    </CapitanContextProvider>
  )
}

export default WrapperContextCapitan