import {Route} from "wouter";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import WrapperContextGobernador from "./pages/gobernador/WrapperContextGobernador";
import WrapperContextMercader from "./pages/mercader/WrapperContextMercader";
import WrapperContextRevolucionario from "./pages/revolucionario/WrapperContextRevolucionario";
import WrapperContextCapitan from "./pages/capitan/WrapperContextCapitan.jsx";
import WrapperContextControl from "./pages/control/WrapperContextControl.jsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import WrapperContextSettings from "./pages/settings/WrapperContextSettings.jsx";

export default function App() {

    return (
        <>
            <Route path="/" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/gobernador" component={WrapperContextGobernador}/>
            <Route path="/mercader" component={WrapperContextMercader}/>
            <Route path="/revolucionario" component={WrapperContextRevolucionario}/>
            <Route path="/capitan" component={WrapperContextCapitan}/>
            <Route path="/control" component={WrapperContextControl}/>
            <Route path="/settings" component={WrapperContextSettings}/>

            <ToastContainer/>
        </>
    )
}
