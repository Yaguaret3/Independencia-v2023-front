import React from 'react'
import RevolucionarioContextProvider from './Context'
import Revolucionario from './Revolucionario'

const WrapperContextRevolucionario = () => {
    
  return (
    <RevolucionarioContextProvider>
        <Revolucionario />
    </RevolucionarioContextProvider>
  )
}

export default WrapperContextRevolucionario