import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const URI = "http://localhost:8000/seguimiento/"

const ShowSeguimientos = () => {
  const [seguimientos, setSeguimientos] = useState([])

  useEffect(() => {
    getSeguimientos()
  }, [])

  const getSeguimientos = async () => {
    const res = await axios.get(URI)
    setSeguimientos(res.data)
  }

  const deleteSeguimiento = async (id) => {
    await axios.delete(`${URI}${id}`)
    getSeguimientos()
  }

  return (
    <div className="container">
      <h3>Seguimiento de Órdenes</h3>
      <Link to="/seguimiento/create" className="btn btn-primary mb-3">Crear Seguimiento</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Orden ID</th>
            <th>Estado</th>
            <th>Comentario</th>
            <th>Comentarios</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {seguimientos.map((s) => (
            <tr key={s.id}>
              <td>{s.orden_id}</td>
              <td>{s.estado}</td>
              <td>{s.comentario}</td>
              <td>{s.comentarios}</td>
              <td>{s.fecha}</td>
              <td>
                <Link to={`/seguimiento/edit/:id${s.id}`} className="btn btn-warning me-2">Editar</Link>
                <button onClick={() => deleteSeguimiento(s.id)} className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShowSeguimientos
