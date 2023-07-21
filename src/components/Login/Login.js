import React from "react";
import "./Login.css";
import "../paginas/client/Home";

function Login(){
    return (
        <form>
            <img src="img4"/>
            <h2>iniciar sesion</h2>

            <label for="Correo">Correo</label>
            <input type="text" id="username"></input>

            <label for="Contraseña">Contraseña</label>
            <input type="password" id="password"></input>

            <div className="remember">
                <p>¿No tienes una cuenta?</p>
                <button type="button" class="btn btn-link">Registrarse</button>
          </div>

          <input type="submit" className="btn-1" value="iniciar"/>
        </form>
    )
}

export default Login;