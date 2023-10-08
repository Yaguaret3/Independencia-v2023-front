import { Route } from "wouter";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import WrapperContextGobernador from "./pages/Gobernador/WrapperContextGobernador";
import WrapperContextMercader from "./pages/mercader/WrapperContextMercader";
import WrapperContextRevolucionario from "./pages/revolucionario/WrapperContextRevolucionario";
import WrapperContextCapitan from "./pages/capitan/WrapperContextCapitan.jsx";

export default function App() {

  return (
    <>
      <Route path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/gobernador" component={WrapperContextGobernador} />
      <Route path="/mercader" component={WrapperContextMercader} />
      <Route path="/revolucionario" component={WrapperContextRevolucionario} />
      <Route path="/capitan" component={WrapperContextCapitan} />
    </>
  )
}
