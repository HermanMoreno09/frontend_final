import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const URI = "http://localhost:8000/suministros/"

const ShowSuministros = () => {
  const [suministros, setSuministros] = useState([])

  useEffect(() => {
    getSuministros()
  }, [])

  const getSuministros = async () => {
    const res = await axios.get(URI)
    setSuministros(res.data)
  }

  const deleteSuministro = async (id) => {
    await axios.delete(`${URI}${id}`)
    getSuministros()
  }

  return (
    <div className="container">
      <h3>Suministros</h3>
      <Link to="/suministros/create" className="btn btn-primary mb-3">Crear Suministro</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Nombre Item</th>
            <th>Unidad</th>
            <th>Cantidad</th>
            <th>Valor Unitario</th>
            <th>Costo Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {suministros.map((s) => (
            <tr key={s.id}>
              <td>{s.item_id}</td>
              <td>{s.nombre_item}</td>
              <td>{s.unidad}</td>
              <td>{s.cantidad}</td>
              <td>{s.valor_unitario}</td>
              <td>{s.costo_total}</td>
              <td>
                <Link to={`/suministros/edit/:id${s.id}`} className="btn btn-warning me-2">Editar</Link>
                <button onClick={() => deleteSuministro(s.id)} className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShowSuministros
