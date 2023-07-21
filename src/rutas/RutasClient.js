import { Routes, Route } from "react-router-dom";

import Home from "../paginas/client/Home";
import ClienteLayout from "../Layout/clientLayout/ClienteLayout";
//import piePagina from "../components/piepagina";
import Logo from "../paginas/client/Home";
import { useState, useEffect } from "react";

const loadingContainerStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "#fff",
};

function RutasCliente() {
  const [timer, setTimer] = useState(1000);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTimer(0);
    }, 3000);
    return () => clearTimeout(timerId);
  });

  if (timer > 0) {
    return (
      <div style={loadingContainerStyles}>
        <img
          src="/image/bg.jpeg"
          height="100%"
          width="100%"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    );
  }

  return (
    <ClienteLayout>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Logo />} />
      </Routes>
    </ClienteLayout>
  );
}
export default RutasCliente;
