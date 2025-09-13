import React from "react";
import "../styles/Resultados.css";

export default function Resultados() {
  // Datos simulados de plantas
  const plantas = [
    {
      id: 1,
      nombre: "Rosa",
      nombre_cientifico: "Rosa indica",
      imagen: "/img/rosa.jpg",
      exposicion_luz: "Sol pleno",
      tipo_suelo: "Fértil",
      frecuencia_agua: "Media",
    },
    {
      id: 2,
      nombre: "Lavanda",
      nombre_cientifico: "Lavandula",
      imagen: "/img/lavanda.jpg",
      exposicion_luz: "Semi sombra",
      tipo_suelo: "Arenoso",
      frecuencia_agua: "Baja",
    },
    {
      id: 3,
      nombre: "Tulipán",
      nombre_cientifico: "Tulipa",
      imagen: "/img/tulipan.jpg",
      exposicion_luz: "Sol pleno",
      tipo_suelo: "Arcilloso",
      frecuencia_agua: "Media",
    },
  ];

  const agregarFavorito = (plantaId) => {
    alert(`Planta ${plantaId} añadida a favoritos (simulado)`);
  };

  return (

      <main className="resultados-main">
        <h1>Recomendaciones de Plantas</h1>
        <p className="info-text">
          Estas son las plantas que mejor se adaptan a tus preferencias de jardín.
        </p>

        <div className="plant-grid">
          {plantas.map((planta) => (
            <div className="plant-card" key={planta.id}>
              <div className="plant-image">
                <img
                  src={planta.imagen}
                  alt={planta.nombre}
                  width="300"
                  height="160"
                />
              </div>
              <div className="plant-info">
                <div className="plant-name">{planta.nombre}</div>
                <div className="plant-scientific">
                  <em>{planta.nombre_cientifico}</em>
                </div>
                <div className="plant-tags">
                  <span className="plant-tag">{planta.exposicion_luz}</span>
                  <span className="plant-tag">{planta.tipo_suelo}</span>
                  <span className="plant-tag">{planta.frecuencia_agua} agua</span>
                </div>
              </div>
              <div className="favorito-wrapper">
                <button
                  className="btn-favorito"
                  onClick={() => agregarFavorito(planta.id)}
                >
                  ❤️
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
 
  );
}
