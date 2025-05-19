import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const URI = "http://localhost:8000/visita/"

const CreateVisita = () => {
  const [cliente_id, setClienteId] = useState("")
  const [orden_id, setOrdenId] = useState("")
  const [fecha, setFecha] = useState("")
  const [fecha_visita, setFechaVisita] = useState("")
  const [jornada, setJornada] = useState("")
  const navigate = useNavigate()

  const store = async (e) => {
    e.preventDefault()
    await axios.post(URI, {
      cliente_id,
      orden_id,
      fecha,
      fecha_visita,
      jornada
    })
    navigate("/visita")
  }

  return (
    <div className="container">
      <h3>Crear Visita</h3>
      <form onSubmit={store}>
        <div className="mb-3">
          <label>Cliente ID</label>
          <input value={cliente_id} onChange={(e) => setClienteId(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Orden ID</label>
          <input value={orden_id} onChange={(e) => setOrdenId(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Fecha (registro)</label>
          <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Fecha Visita</label>
          <input type="date" value={fecha_visita} onChange={(e) => setFechaVisita(e.target.value)} className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Jornada</label>
          <input value={jornada} onChange={(e) => setJornada(e.target.value)} className="form-control" />
        </div>
        <button type="submit" className="btn btn-success">Guardar</button>
      </form>
    </div>
  )
}

export default CreateVisita
