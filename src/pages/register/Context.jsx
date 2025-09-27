import React, { useState } from 'react'

export const RegisterContext = React.createContext();

export default function RegisterContextProvider({ children }) {

    const [stompClient, setStompClient] = useState({})

    return (
        <RegisterContext.Provider
            value={{
                stompClient,
                setStompClient
            }}>
            {children}
        </RegisterContext.Provider>
    )
}