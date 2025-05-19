import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const URI = "http://localhost:8000/visita/"

const ShowVisitas = () => {
  const [visitas, setVisitas] = useState([])

  useEffect(() => {
    getVisitas()
  }, [])

  const getVisitas = async () => {
    const res = await axios.get(URI)
    setVisitas(res.data)
  }

  const deleteVisita = async (id) => {
    await axios.delete(`${URI}${id}`)
    getVisitas()
  }

  return (
    <div className="container">
      <h3>Visitas Programadas</h3>
      <Link to="/visitas/create" className="btn btn-primary mb-3">Crear Visita</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Cliente ID</th>
            <th>Orden ID</th>
            <th>Fecha</th>
            <th>Fecha Visita</th>
            <th>Jornada</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {visitas.map((v) => (
            <tr key={v.id}>
              <td>{v.cliente_id}</td>
              <td>{v.orden_id}</td>
              <td>{v.fecha}</td>
              <td>{v.fecha_visita}</td>
              <td>{v.jornada}</td>
              <td>
                <Link to={`/visita/edit/:id${v.id}`} className="btn btn-warning me-2">Editar</Link>
                <button onClick={() => deleteVisita(v.id)} className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShowVisitas
