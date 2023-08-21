import React, { useState } from 'react'

export const RevolucionarioContext = React.createContext();

export default function RevolucionarioContextProvider({ children }) {

    const [playerData, setPlayerData] = useState({});
    const [gameData, setGameData] = useState({})
    const [congresosData, setCongresosData] = useState({})

    return (
        <RevolucionarioContext.Provider
            value={{
                playerData,
                setPlayerData,
                gameData,
                setGameData,
                congresosData,
                setCongresosData
            }}>
            {children}
        </RevolucionarioContext.Provider>
    )
}