import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const URI = "http://localhost:8000/seguimientos/"

const EditSeguimiento = () => {
  const [orden_id, setOrdenId] = useState("")
  const [estado, setEstado] = useState("")
  const [comentario, setComentario] = useState("")
  const [comentarios, setComentarios] = useState("")
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    getSeguimientoById()
  }, [])

  const getSeguimientoById = async () => {
    const res = await axios.get(`${URI}${id}`)
    const data = res.data
    setOrdenId(data.orden_id)
    setEstado(data.estado)
    setComentario(data.comentario)
    setComentarios(data.comentarios)
  }

  const update = async (e) => {
    e.preventDefault()
    await axios.put(`${URI}${id}`, {
      orden_id,
      estado,
      comentario,
      comentarios
    })
    navigate("/seguimiento")
  }

  return (
    <div className="container">
      <h3>Editar Seguimiento</h3>
      <form onSubmit={update}>
        <div className="mb-3">
          <label>Orden ID</label>
          <input value={orden_id} onChange={(e) => setOrdenId(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Estado</label>
          <input value={estado} onChange={(e) => setEstado(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Comentario</label>
          <textarea value={comentario} onChange={(e) => setComentario(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Comentarios</label>
          <textarea value={comentarios} onChange={(e) => setComentarios(e.target.value)} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Actualizar</button>
      </form>
    </div>
  )
}

export default EditSeguimiento
