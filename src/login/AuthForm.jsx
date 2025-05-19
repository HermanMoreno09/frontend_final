import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css";  // Usando tus estilos originales

const AuthForm = () => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const navigate = useNavigate();

  const showAlerta = (title, text, icon = "info") => {
    Swal.fire({
      icon,
      title,
      text,
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://backend-2-evp4.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo, contrasena }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      localStorage.setItem("usuario", JSON.stringify(data.usuario));
      showAlerta("¡Bienvenido!", data.message, "success");
      navigate("/dashboard");
    } catch (error) {
      showAlerta("Error de autenticación", error.message, "error");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="text-center text-dark">Iniciar sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-secondary w-100 mb-3">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
