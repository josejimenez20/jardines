import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Inicio.css";

export default function Inicio() {
  const navigate = useNavigate();

  return (
    <main className="main-content">
      <h1>Recomendación de especies para tu jardín</h1>

      <p className="info-text">
        Basado en tu ubicación <strong>NombreMunicipio</strong> <br />
        ¿Deseas ajustar los filtros manualmente?
      </p>

      <div className="toggle-buttons">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate("/preferencias")}
        >
          Sí, ajustar filtros
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate("/resultados")}
        >
          No, continuar
        </button>
      </div>

      <form className="reco-form">
        <label htmlFor="suelo">Tipo de suelo</label>
        <input type="text" id="suelo" value="Arenoso" readOnly />

        <label htmlFor="agua">Disponibilidad de agua</label>
        <input type="text" id="agua" value="Media" readOnly />

        <label htmlFor="luz">Exposición a la luz</label>
        <input type="text" id="luz" value="Pleno sol" readOnly />

        <label htmlFor="espacio">Tamaño de jardín ideal para ti</label>
        <input type="text" id="espacio" value="Pequeño" readOnly />
      </form>
    </main>
  );
}
