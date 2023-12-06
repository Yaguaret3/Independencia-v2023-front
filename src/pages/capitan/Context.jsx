import React, { useState } from 'react'

export const CapitanContext = React.createContext();

export default function CapitanContextProvider({ children }) {

    const [playerData, setPlayerData] = useState({});
    const [gameData, setGameData] = useState({})

    return (
        <CapitanContext.Provider
            value={{
                playerData,
                setPlayerData,
                gameData,
                setGameData
            }}>
            {children}
        </CapitanContext.Provider>
    )
}