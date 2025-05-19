import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const URI = 'https://backend-1-6p5l.onrender.com/api/visitas/'

const CompEditVisitaEjecucion = () => {
  const [visita_tecnica, setVisitaTecnica] = useState('')
  const [ejecucion_proyecto, setEjecucionProyecto] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getSolicitudById()
  }, [])

  const getSolicitudById = async () => {
    try {
      const res = await axios.get(`${URI}${id}`)
      setVisitaTecnica(res.data.visita_tecnica)
      setEjecucionProyecto(res.data.ejecucion_proyecto)
    } catch (error) {
      console.error('Error obteniendo la solicitud:', error)
    }
  }

  const update = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`${URI}${id}`, {
        visita_tecnica,
        ejecucion_proyecto
      })
      navigate('/li') // o redirige donde quieras
    } catch (error) {
      console.error('Error actualizando la solicitud:', error)
    }
  }

  return (
    <div className='container'>
      <h3>Editar Visita y Ejecución</h3>
      <form onSubmit={update}>
        <div className='mb-3'>
          <label className='form-label'>Visita Técnica</label>
          <input
            type='date'
            className='form-control'
            value={visita_tecnica}
            onChange={(e) => setVisitaTecnica(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Ejecución del Proyecto</label>
          <input
            type='date'
            className='form-control'
            value={ejecucion_proyecto}
            onChange={(e) => setEjecucionProyecto(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Actualizar
        </button>
      </form>
    </div>
  )
}

export default CompEditVisitaEjecucion
