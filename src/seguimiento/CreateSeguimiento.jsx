import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const URI = "http://localhost:8000/seguimientos/"

const CreateSeguimiento = () => {
  const [orden_id, setOrdenId] = useState("")
  const [estado, setEstado] = useState("")
  const [comentario, setComentario] = useState("")
  const [comentarios, setComentarios] = useState("")
  const navigate = useNavigate()

  const store = async (e) => {
    e.preventDefault()
    await axios.post(URI, {
      orden_id,
      estado,
      comentario,
      comentarios
    })
    navigate("/seguimiento")
  }

  return (
    <div className="container">
      <h3>Crear Seguimiento</h3>
      <form onSubmit={store}>
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
        <button type="submit" className="btn btn-success">Guardar</button>
      </form>
    </div>
  )
}

export default CreateSeguimiento
