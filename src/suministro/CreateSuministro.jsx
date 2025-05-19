import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const URI = "http://localhost:8000/suministros/"

const CreateSuministro = () => {
  const [item_id, setItemId] = useState("")
  const [nombre_item, setNombreItem] = useState("")
  const [unidad, setUnidad] = useState("")
  const [cantidad, setCantidad] = useState("")
  const [valor_unitario, setValorUnitario] = useState("")
  const [costo_total, setCostoTotal] = useState("")
  const navigate = useNavigate()

  const store = async (e) => {
    e.preventDefault()
    await axios.post(URI, {
      item_id,
      nombre_item,
      unidad,
      cantidad,
      valor_unitario,
      costo_total
    })
    navigate("/suministros")
  }

  return (
    <div className="container">
      <h3>Crear Suministro</h3>
      <form onSubmit={store}>
        <div className="mb-3">
          <label>ID del Ítem</label>
          <input value={item_id} onChange={(e) => setItemId(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Nombre del Ítem</label>
          <textarea value={nombre_item} onChange={(e) => setNombreItem(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Unidad</label>
          <textarea value={unidad} onChange={(e) => setUnidad(e.target.value)} className="form-control" />
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
          <label>Costo Total</label>
          <input type="number" value={costo_total} onChange={(e) => setCostoTotal(e.target.value)} className="form-control" />
        </div>
        <button type="submit" className="btn btn-success">Guardar</button>
      </form>
    </div>
  )
}

export default CreateSuministro
