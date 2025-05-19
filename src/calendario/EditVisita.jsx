import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const URI = "http://localhost:8000/visita/"

const EditVisita = () => {
  const [cliente_id, setClienteId] = useState("")
  const [orden_id, setOrdenId] = useState("")
  const [fecha, setFecha] = useState("")
  const [fecha_visita, setFechaVisita] = useState("")
  const [jornada, setJornada] = useState("")
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    getVisitaById()
  }, [])

  const getVisitaById = async () => {
    const res = await axios.get(`${URI}${id}`)
    const data = res.data
    setClienteId(data.cliente_id)
    setOrdenId(data.orden_id)
    setFecha(data.fecha)
    setFechaVisita(data.fecha_visita)
    setJornada(data.jornada)
  }

  const update = async (e) => {
    e.preventDefault()
    await axios.put(`${URI}${id}`, {
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
      <h3>Editar Visita</h3>
      <form onSubmit={update}>
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
          <input type="date" value={fecha_visita} onChange={(e) => setFechaVisita(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Jornada</label>
          <input value={jornada} onChange={(e) => setJornada(e.target.value)} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Actualizar</button>
      </form>
    </div>
  )
}

export default EditVisita
