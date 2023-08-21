import React from 'react'
import Mercader from './Mercader'
import MercaderContextProvider from './Context'

const WrapperContextMercader = () => {
  return (
        <MercaderContextProvider>
            <Mercader />
        </MercaderContextProvider>
  )
}

export default WrapperContextMercader