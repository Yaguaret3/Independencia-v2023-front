import React, { useState } from 'react'

export const GobernadorContext = React.createContext();

export default function GobernadorContextProvider ({children}) {
    
    const [playerData, setPlayerData] = useState({});
    const [gameData, setGameData] = useState({});

    return (
        <GobernadorContext.Provider value={
            {
                playerData,
                setPlayerData,
                gameData, 
                setGameData
            }}>
            {children}
        </GobernadorContext.Provider>
    )

}