import React, {useState} from 'react';

export const ControlContext = React.createContext();

export default function ControlContextProvider({ children }) {

    const [gameData, setGameData] = useState({})
    const [controlData, setControlData] = useState({});
    const [stompClient, setStompClient] = useState({});

    return (
        <ControlContext.Provider
            value={{
                gameData,
                setGameData,
                controlData,
                setControlData,
                stompClient,
                setStompClient
            }}>
            {children}
        </ControlContext.Provider>
    )
}