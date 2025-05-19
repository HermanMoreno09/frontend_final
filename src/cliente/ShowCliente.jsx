import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const URI = "http://localhost:8000/clientes/"

const ShowCliente = () => {
  const [clientes, setClientes] = useState([])

  useEffect(() => {
    getClientes()
  }, [])

  const getClientes = async () => {
    const res = await axios.get(URI)
    setClientes(res.data)
  }

  const deleteCliente = async (id) => {
    await axios.delete(`${URI}${id}`)
    getClientes()
  }

  return (
    <div className="container">
      <h3>Clientes</h3>
      <Link to="/clientes/create" className="btn btn-primary mb-3">Crear Cliente</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>NIT/Cédula</th>
            <th>Ciudad</th>
            <th>Departamento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.nombre}</td>
              <td>{cliente.nit_cedula}</td>
              <td>{cliente.ciudad}</td>
              <td>{cliente.departamento}</td>
              <td>
                <Link to={`/clientes/edit/:id${cliente.id}`} className="btn btn-warning me-2">Editar</Link>
                <button onClick={() => deleteCliente(cliente.id)} className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShowCliente
