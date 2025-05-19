import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const URI = "http://localhost:8000/items/"

const ShowCotizacionItems = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    getItems()
  }, [])

  const getItems = async () => {
    const res = await axios.get(URI)
    setItems(res.data)
  }

  const deleteItem = async (id) => {
    await axios.delete(`${URI}${id}`)
    getItems()
  }

  return (
    <div className="container">
      <h3>Ítems de Cotización</h3>
      <Link to="/cotizacion_items/create" className="btn btn-primary mb-3">Crear Ítem</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Actividad</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Valor Unitario</th>
            <th>Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.item_numero}</td>
              <td>{item.actividad}</td>
              <td>{item.descripcion}</td>
              <td>{item.cantidad}</td>
              <td>{item.valor_unitario}</td>
              <td>{item.subtotal}</td>
              <td>
                <Link to={`/cotizacion_items/edit/:id${item.id}`} className="btn btn-warning me-2">Editar</Link>
                <button onClick={() => deleteItem(item.id)} className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShowCotizacionItems
