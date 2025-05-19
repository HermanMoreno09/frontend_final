import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const URI = "http://localhost:8000/clientes/"

const CreateCliente = () => {
  const [nombre, setNombre] = useState("")
  const [nit_cedula, setNit] = useState("")
  const [direccion, setDireccion] = useState("")
  const [departamento, setDepartamento] = useState("")
  const [ciudad, setCiudad] = useState("")
  const [barrio, setBarrio] = useState("")
  const navigate = useNavigate()

  const store = async (e) => {
    e.preventDefault()
    await axios.post(URI, {
      nombre,
      nit_cedula,
      direccion,
      departamento,
      ciudad,
      barrio
    })
    navigate("/clientes")
  }

  return (
    <div className="container">
      <h3>Crear Cliente</h3>
      <form onSubmit={store}>
        <div className="mb-3">
          <label>Nombre</label>
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label>NIT/Cédula</label>
          <input value={nit_cedula} onChange={(e) => setNit(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Dirección</label>
          <input value={direccion} onChange={(e) => setDireccion(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Departamento</label>
          <input value={departamento} onChange={(e) => setDepartamento(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Ciudad</label>
          <input value={ciudad} onChange={(e) => setCiudad(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Barrio</label>
          <input value={barrio} onChange={(e) => setBarrio(e.target.value)} className="form-control" />
        </div>
        <button type="submit" className="btn btn-success">Guardar</button>
      </form>
    </div>
  )
}

export default CreateCliente
