import React from 'react';
import ControlContextProvider from "./Context.jsx";
import Control from "./Control.jsx";

const WrapperContextControl = () => {
    return (
        <ControlContextProvider>
            <Control />
        </ControlContextProvider>
    );
};

export default WrapperContextControl;