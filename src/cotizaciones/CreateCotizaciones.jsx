import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const URI = "http://localhost:8000/cotizaciones/"

const CreateCotizacion = () => {
  const [codigo_cotizacion, setCodigo] = useState("")
  const [fecha, setFecha] = useState("")
  const [total, setTotal] = useState("")
  const [representante_legal, setRepresentante] = useState("")
  const navigate = useNavigate()

  const store = async (e) => {
    e.preventDefault()
    await axios.post(URI, {
      codigo_cotizacion,
      fecha,
      total,
      representante_legal,
    })
    navigate("/cotizaciones")
  }

  return (
    <div className="container">
      <h3>Crear Cotización</h3>
      <form onSubmit={store}>
        <div className="mb-3">
          <label>Código Cotización</label>
          <input value={codigo_cotizacion} onChange={(e) => setCodigo(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Fecha</label>
          <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Total</label>
          <input type="number" value={total} onChange={(e) => setTotal(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Representante Legal</label>
          <input value={representante_legal} onChange={(e) => setRepresentante(e.target.value)} className="form-control" />
        </div>
        <button type="submit" className="btn btn-success">Guardar</button>
      </form>
    </div>
  )
}

export default CreateCotizacion
