import React, { useState } from 'react'

export const CapitanContext = React.createContext();

export default function CapitanContextProvider({ children }) {

    const [playerData, setPlayerData] = useState({});
    const [gameData, setGameData] = useState({})
    const [stompClient, setStompClient] = useState({});

    return (
        <CapitanContext.Provider
            value={{
                playerData,
                setPlayerData,
                gameData,
                setGameData,
                stompClient,
                setStompClient
            }}>
            {children}
        </CapitanContext.Provider>
    )
}