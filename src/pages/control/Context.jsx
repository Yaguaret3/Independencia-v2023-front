import React, {useState} from 'react';

export const ControlContext = React.createContext();

export default function ControlContextProvider({ children }) {

    const [gameData, setGameData] = useState({})
    const [regionSelected, setRegionSelected] = useState({});

    return (
        <ControlContext.Provider
            value={{
                gameData,
                setGameData,
                regionSelected,
                setRegionSelected
            }}>
            {children}
        </ControlContext.Provider>
    )
}