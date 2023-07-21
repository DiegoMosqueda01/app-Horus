import { BrowserRouter } from "react-router-dom";
import Rutas from "./rutas/Rutas";
import RutasCliente from "./rutas/RutasClient";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Rutas />
        <RutasCliente/>
      </div>
    </BrowserRouter>
  );
}

export default App;
