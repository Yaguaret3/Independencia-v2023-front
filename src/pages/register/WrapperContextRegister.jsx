import React from 'react'
import RegisterContextProvider from "./Context.jsx";
import Register from "./Register.jsx";

const WrapperContextRegister = () => {

    return (
        <RegisterContextProvider>
            <Register />
        </RegisterContextProvider>
    )
}

export default WrapperContextRegister