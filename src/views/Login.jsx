import React, { useState } from "react";
import "../styles/Login.css"; // Tu CSS adaptado

export default function LoginView() {
  const [showRegister, setShowRegister] = useState(false);
  const [loginPasswordVisible, setLoginPasswordVisible] = useState(false);
  const [registerPasswordVisible, setRegisterPasswordVisible] = useState(false);

  // Alterna entre Login y Registro
  const toggleForms = () => setShowRegister(!showRegister);

  // Alterna visibilidad de contraseña
  const togglePassword = (type) => {
    if (type === "login") setLoginPasswordVisible(!loginPasswordVisible);
    if (type === "register") setRegisterPasswordVisible(!registerPasswordVisible);
  };

  return (
    <div className="page">
      <div className={`container ${showRegister ? "show-register" : ""}`}>

        {/* Panel lateral Login */}
        <div className="side-panel login-panel">
          <img src="/logo_imagen.png" alt="Logo" className="logo" />
          <h2>¡Hola!</h2>
          <p>Regístrese con sus datos personales para usar todas las funciones del sitio</p>
          <button className="toggle-btn" onClick={toggleForms}>Indeloid</button>
        </div>

        {/* Panel lateral Registro */}
        <div className="side-panel register-panel">
        <img src="/logo_imagen.png" alt="Logo" className="logo" />
          <h2>¡Bienvenido!</h2>
          <p>Inicie sesión con sus datos para acceder a sus recomendaciones personalizadas</p>
          <button className="toggle-btn" onClick={toggleForms}>Iniciar Sesión</button>
        </div>

        {/* Formulario Login */}
        <div className="form-container login-container">
          <div className="form-header">
            <h1>Iniciar Sesión</h1>
            <p>Accede a tu cuenta para ver tus recomendaciones</p>
          </div>
          <form>
            <div className="form-group">
              <input type="email" name="email" placeholder="Correo electrónico" required />
            </div>
            <div className="form-group password-wrapper">
              <input
                type={loginPasswordVisible ? "text" : "password"}
                name="password"
                placeholder="Contraseña"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => togglePassword("login")}
              >
                <i className={`bi ${loginPasswordVisible ? "bi-eye" : "bi-eye-slash"}`}></i>
              </button>
            </div>
            <button type="submit" className="btn">Iniciar Sesión</button>
          </form>
        </div>

        {/* Formulario Registro */}
        <div className="form-container register-container">
          <div className="form-header">
            <h1>Crear Cuenta</h1>
            <p>Comienza a recibir recomendaciones para tu jardín</p>
          </div>
          <form>
            <div className="form-group">
              <input type="text" name="name" placeholder="Nombre" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Correo electrónico" required />
            </div>
            <div className="form-group password-wrapper">
              <input
                type={registerPasswordVisible ? "text" : "password"}
                name="password"
                placeholder="Contraseña"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => togglePassword("register")}
              >
                <i className={`bi ${registerPasswordVisible ? "bi-eye" : "bi-eye-slash"}`}></i>
              </button>
            </div>
            <div className="form-group">
              <select name="municipio" required>
                <option value="" disabled selected hidden>Selecciona un municipio</option>
                <option value="Alegría">Alegría</option>
                <option value="Berlín">Berlín</option>
                <option value="California">California</option>
                {/* Completa los demás municipios aquí */}
              </select>
            </div>
            <p className="note">Podés personalizar más tus recomendaciones después</p>
            <button type="submit" className="btn">Indeloid</button>
          </form>
        </div>

      </div>
    </div>
  );
}
