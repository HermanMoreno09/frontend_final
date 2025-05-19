import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const URI = 'http://localhost:3000/api/servicios/'
const VISITA_URI = 'http://localhost:3000/api/visitas/' // Ajusta si usas otra ruta

const CompInfoSolicitud = () => {
  const { id } = useParams()
  const [solicitud, setSolicitud] = useState({})
  const [visita, setVisita] = useState(null)

  useEffect(() => {
    getSolicitud()
    getVisita()
  }, [])

  const getSolicitud = async () => {
    try {
      const res = await axios.get(`${URI}${id}`)
      setSolicitud(res.data)
    } catch (error) {
      console.error('Error al obtener la solicitud:', error)
    }
  }

  const getVisita = async () => {
    try {
      const res = await axios.get(`${VISITA_URI}solicitud/${id}`)
      setVisita(res.data)
    } catch (error) {
      console.log('No hay visita registrada para esta solicitud')
    }
  }

  return (
    <div className="container mt-4">
      <h3>Información de la Solicitud</h3>
      <p><strong>Cliente:</strong> {solicitud.nombre || '-'}</p>
      <p><strong>Tipo de Servicio:</strong> {solicitud.tipo_servicio || '-'}</p>
      <p><strong>Mensaje:</strong> {solicitud.mensaje || '-'}</p>
      <p><strong>Fecha:</strong> {solicitud.fecha_solicitud || '-'}</p>

      <hr />

      <h4>Información de la Visita Técnica</h4>
      {visita?.visita_tecnica ? (
        <p>{visita.visita_tecnica}</p>
      ) : (
        <p>No se ha registrado visita técnica.</p>
      )}

      <h4>Información de la Ejecución del Proyecto</h4>
      {visita?.ejecucion_proyecto ? (
        <p>{visita.ejecucion_proyecto}</p>
      ) : (
        <p>No se ha registrado ejecución del proyecto.</p>
      )}
    </div>
  )
}

export default CompInfoSolicitud
