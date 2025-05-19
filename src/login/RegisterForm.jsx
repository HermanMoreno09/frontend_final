import { useState } from "react";
import "./RegisterForm.css"
const RegisterForm = ({ onRegisterSuccess }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, correo, contrasena }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      alert("Registro exitoso!");
      setNombre("");
      setCorreo("");
      setContrasena("");

      if (onRegisterSuccess) onRegisterSuccess();

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="auth-wrapper">
      <form className="auth-form" onSubmit={handleRegister}>
        <h2>Registro</h2>

        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterForm;
