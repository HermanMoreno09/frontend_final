import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const URI = "http://localhost:8000/items/"

const CreateCotizacionItem = () => {
  const [cotizacion_id, setCotizacionId] = useState("")
  const [item_numero, setItemNumero] = useState("")
  const [actividad, setActividad] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [unidad, setUnidad] = useState("")
  const [cantidad, setCantidad] = useState("")
  const [valor_unitario, setValorUnitario] = useState("")
  const [subtotal, setSubtotal] = useState("")
  const navigate = useNavigate()

  const store = async (e) => {
    e.preventDefault()
    await axios.post(URI, {
      cotizacion_id,
      item_numero,
      actividad,
      descripcion,
      unidad,
      cantidad,
      valor_unitario,
      subtotal
    })
    navigate("/cotizacion_items")
  }

  return (
    <div className="container">
      <h3>Crear Ítem</h3>
      <form onSubmit={store}>
        <div className="mb-3">
          <label>ID Cotización</label>
          <input value={cotizacion_id} onChange={(e) => setCotizacionId(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Número de Ítem</label>
          <input value={item_numero} onChange={(e) => setItemNumero(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Actividad</label>
          <textarea value={actividad} onChange={(e) => setActividad(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Descripción</label>
          <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Unidad</label>
          <input value={unidad} onChange={(e) => setUnidad(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Cantidad</label>
          <input type="number" value={cantidad} onChange={(e) => setCantidad(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Valor Unitario</label>
          <input type="number" value={valor_unitario} onChange={(e) => setValorUnitario(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Subtotal</label>
          <input type="number" value={subtotal} onChange={(e) => setSubtotal(e.target.value)} className="form-control" />
        </div>
        <button type="submit" className="btn btn-success">Guardar</button>
      </form>
    </div>
  )
}

export default CreateCotizacionItem
