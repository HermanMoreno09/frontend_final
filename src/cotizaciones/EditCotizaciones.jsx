import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const URI = "http://localhost:8000/cotizaciones/"

const EditCotizacion = () => {
  const [codigo_cotizacion, setCodigo] = useState("")
  const [fecha, setFecha] = useState("")
  const [total, setTotal] = useState("")
  const [representante_legal, setRepresentante] = useState("")
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    getCotizacionById()
  }, [])

  const getCotizacionById = async () => {
    const res = await axios.get(`${URI}${id}`)
    setCodigo(res.data.codigo_cotizacion)
    setFecha(res.data.fecha)
    setTotal(res.data.total)
    setRepresentante(res.data.representante_legal)
  }

  const update = async (e) => {
    e.preventDefault()
    await axios.put(`${URI}${id}`, {
      codigo_cotizacion,
      fecha,
      total,
      representante_legal,
    })
    navigate("/cotizaciones")
  }

  return (
    <div className="container">
      <h3>Editar Cotización</h3>
      <form onSubmit={update}>
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
        <button type="submit" className="btn btn-primary">Actualizar</button>
      </form>
    </div>
  )
}

export default EditCotizacion
