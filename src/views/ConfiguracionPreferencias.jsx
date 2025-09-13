import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- Importar
import "../styles/configuracionPreferencias.css"; 

export default function ConfiguracionPreferencias() {
  const navigate = useNavigate(); // <-- Hook de navegación

  const [answers, setAnswers] = useState({
    frecuencia_agua: "",
    tipo_suelo: "",
    exposicion_luz: "",
    tamano_espacio: "",
  });

  const questions = [
    {
      key: "frecuencia_agua",
      text: "¿Con qué frecuencia riegas tu jardín?",
      options: ["Mucho", "Regular", "Poco", "Nunca"],
    },
    {
      key: "tipo_suelo",
      text: "¿Qué tipo de suelo tiene?",
      options: ["Arenoso", "Arcilloso", "Fértil", "Ácido"],
    },
    {
      key: "exposicion_luz",
      text: "¿Cuánta luz solar recibe tu jardín?",
      options: ["Sombra", "Semi sombra", "Sol pleno"],
    },
    {
      key: "tamano_espacio",
      text: "¿Tamaño de espacio?",
      options: ["Pequeño 10m²", "Mediano 20-50m²", "Grande 50-100m²"],
    },
  ];

  const handleSelect = (questionKey, value) => {
    setAnswers(prev => ({ ...prev, [questionKey]: value }));
  };

  const completedCount = Object.values(answers).filter(Boolean).length;
  const totalQuestions = questions.length;
  const allCompleted = completedCount === totalQuestions;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Tus preferencias fueron guardadas correctamente!");
    navigate("/resultados"); // <-- Redirección
  };

  return (
    <main className="preferences-main">
      <h1>Personaliza tu jardín</h1>
      <p className="info-text">
        Responde todas las preguntas para recibir recomendaciones personalizadas.
      </p>

      <div id="progressText">{completedCount} de {totalQuestions} preguntas completadas</div>

      <form onSubmit={handleSubmit}>
        {questions.map((q) => (
          <div className="question" key={q.key}>
            <p>{q.text}</p>
            <div className="options">
              {q.options.map((opt) => (
                <button
                  type="button"
                  key={opt}
                  className={`option ${answers[q.key] === opt ? "selected" : ""}`}
                  onClick={() => handleSelect(q.key, opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}

        <button type="submit" className="submit-button" disabled={!allCompleted}>
          Continuar
        </button>
      </form>
    </main>
  );
}
