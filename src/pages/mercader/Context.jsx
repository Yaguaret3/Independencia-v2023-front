import React, { useState } from 'react'

export const MercaderContext = React.createContext();

export default function MercaderContextProvider({ children }) {

    const [playerData, setPlayerData] = useState({});
    const [gameData, setGameData] = useState({})
    const [stompClient, setStompClient] = useState({});

    return (
        <MercaderContext.Provider
            value={{
                playerData,
                setPlayerData,
                gameData,
                setGameData,
                stompClient,
                setStompClient
            }}>
            {children}
        </MercaderContext.Provider>
    )
}