import React, { useState } from 'react'

export const CapitanContext = React.createContext();

export default function RevolucionarioContextProvider({ children }) {

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