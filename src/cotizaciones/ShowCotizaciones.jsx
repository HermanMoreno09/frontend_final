import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const URI = "http://localhost:8000/cotizaciones/"

const ShowCotizaciones = () => {
  const [cotizaciones, setCotizaciones] = useState([])

  useEffect(() => {
    getCotizaciones()
  }, [])

  const getCotizaciones = async () => {
    const res = await axios.get(URI)
    setCotizaciones(res.data)
  }

  const deleteCotizacion = async (id) => {
    await axios.delete(`${URI}${id}`)
    getCotizaciones()
  }

  return (
    <div className="container">
      <h3>Cotizaciones</h3>
      <Link to="/create/cotizaciones" className="btn btn-primary mb-3">Crear Cotización</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Código</th>
            <th>Fecha</th>
            <th>Total</th>
            <th>Representante</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cotizaciones.map((cot) => (
            <tr key={cot.id}>
              <td>{cot.codigo_cotizacion}</td>
              <td>{cot.fecha}</td>
              <td>{cot.total}</td>
              <td>{cot.representante_legal}</td>
              <td>
                <Link to={`/cotizaciones/edit/:id${cot.id}`} className="btn btn-warning me-2">Editar</Link>
                <button onClick={() => deleteCotizacion(cot.id)} className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShowCotizaciones
