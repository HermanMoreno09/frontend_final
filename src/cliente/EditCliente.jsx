import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const URI = "http://localhost:8000/clientes/"

const EditCliente = () => {
  const [nombre, setNombre] = useState("")
  const [nit_cedula, setNit] = useState("")
  const [direccion, setDireccion] = useState("")
  const [departamento, setDepartamento] = useState("")
  const [ciudad, setCiudad] = useState("")
  const [barrio, setBarrio] = useState("")
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    getClienteById()
  }, [])

  const getClienteById = async () => {
    const res = await axios.get(`${URI}${id}`)
    setNombre(res.data.nombre)
    setNit(res.data.nit_cedula)
    setDireccion(res.data.direccion)
    setDepartamento(res.data.departamento)
    setCiudad(res.data.ciudad)
    setBarrio(res.data.barrio)
  }

  const update = async (e) => {
    e.preventDefault()
    await axios.put(`${URI}${id}`, {
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
      <h3>Editar Cliente</h3>
      <form onSubmit={update}>
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
        <button type="submit" className="btn btn-primary">Actualizar</button>
      </form>
    </div>
  )
}

export default EditCliente
