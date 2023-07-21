import React from "react";
import { refrescos } from "../../bd/datos";

function Card() {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-4 row-cols-g-4">
        {refrescos.map((refresco) => {
          return (
            <div class="col p-3">
              <div class="card h-100">
                <img src={refresco.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{refresco.nombre}</h5>
                  <p class="card-text">{refresco.descripción}</p>
                </div>
                <div
                  class="card-footer bg-transparent border-success"
                  align="right"
                >
                  <label for="floatingPlaintextInput">
                   Costo: ${refresco.precio}&nbsp;
                  </label>
                  <label for="floatingPlaintextInput">
                    Cantidad:{refresco.cantidad}&nbsp;
                  </label>
                  <button type="button" className="btn btn-outline-success">
                    <i className="bi bi-cart4"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
