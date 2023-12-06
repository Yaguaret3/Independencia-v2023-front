import React, {useState} from 'react';

export const ControlContext = React.createContext();

export default function ControlContextProvider({ children }) {

    const [gameData, setGameData] = useState({})

    return (
        <ControlContext.Provider
            value={{
                gameData,
                setGameData
            }}>
            {children}
        </ControlContext.Provider>
    )
}