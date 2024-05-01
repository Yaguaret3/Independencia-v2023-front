import React, { useState } from 'react'

export const GobernadorContext = React.createContext();

export default function GobernadorContextProvider ({children}) {
    
    const [playerData, setPlayerData] = useState({});
    const [gameData, setGameData] = useState({});
    const [stompClient, setStompClient] = useState({});

    return (
        <GobernadorContext.Provider value={
            {
                playerData,
                setPlayerData,
                gameData, 
                setGameData,
                stompClient,
                setStompClient
            }}>
            {children}
        </GobernadorContext.Provider>
    )

}