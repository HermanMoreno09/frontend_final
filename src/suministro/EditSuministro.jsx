import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const URI = "http://localhost:8000/suministros/"

const EditSuministro = () => {
  const [item_id, setItemId] = useState("")
  const [nombre_item, setNombreItem] = useState("")
  const [unidad, setUnidad] = useState("")
  const [cantidad, setCantidad] = useState("")
  const [valor_unitario, setValorUnitario] = useState("")
  const [costo_total, setCostoTotal] = useState("")
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    getSuministroById()
  }, [])

  const getSuministroById = async () => {
    const res = await axios.get(`${URI}${id}`)
    const data = res.data
    setItemId(data.item_id)
    setNombreItem(data.nombre_item)
    setUnidad(data.unidad)
    setCantidad(data.cantidad)
    setValorUnitario(data.valor_unitario)
    setCostoTotal(data.costo_total)
  }

  const update = async (e) => {
    e.preventDefault()
    await axios.put(`${URI}${id}`, {
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
      <h3>Editar Suministro</h3>
      <form onSubmit={update}>
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
        <button type="submit" className="btn btn-primary">Actualizar</button>
      </form>
    </div>
  )
}

export default EditSuministro
