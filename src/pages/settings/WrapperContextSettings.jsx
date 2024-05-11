import React from 'react'
import SettingsContextProvider from "./Context.jsx";
import Settings from "./Settings.jsx";

const WrapperContextSettings = () => {

    return (
        <SettingsContextProvider>
            <Settings />
        </SettingsContextProvider>
    )
}

export default WrapperContextSettings