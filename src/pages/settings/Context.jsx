import React, { useState } from 'react'

export const SettingsContext = React.createContext();

export default function SettingsContextProvider({ children }) {

    const [games, setGames] = useState([]);
    const [users, setUsers] = useState([])
    const [cities, setCities] = useState([])
    const [stompClient, setStompClient] = useState({})

    return (
        <SettingsContext.Provider
            value={{
                games,
                setGames,
                users,
                setUsers,
                stompClient,
                setStompClient,
                cities,
                setCities
            }}>
            {children}
        </SettingsContext.Provider>
    )
}