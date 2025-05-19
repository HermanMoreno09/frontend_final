import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const URI = 'https://backend-1-6p5l.onrender.com/api/servicios/'

const CompEditSolicitud = () => {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [direccion, setDireccion] = useState('')
  const [tipoServicio, setTipoServicio] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [fechaSolicitud, setFechaSolicitud] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    getSolicitudById()
  }, [])

  const getSolicitudById = async () => {
    const res = await axios.get(URI + id)
    setNombre(res.data.nombre)
    setCorreo(res.data.correo)
    setTelefono(res.data.telefono)
    setDireccion(res.data.direccion || '')
    setTipoServicio(res.data.tipo_servicio || '')
    setMensaje(res.data.mensaje || '')
    setFechaSolicitud(res.data.fecha_solicitud)
  }

  const update = async (e) => {
    e.preventDefault()
    await axios.put(URI + id, {
      nombre,
      correo,
      telefono,
      direccion,
      tipo_servicio: tipoServicio,
      mensaje,
      fecha_solicitud: fechaSolicitud
    })
    navigate('/solicitud')
  }

  return (
    <div>
      <h3>Editar Solicitud</h3>
        <Link to={`/solicitud/`} className="btn btn-sm btn-danger"> Regresar
          </Link>  
      <form onSubmit={update}>
        <div className='mb-3'>
          <label className='form-label'>Nombre</label>
          <input
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            type="text"
            className='form-control'
            required
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Correo</label>
          <input
            value={correo}
            onChange={e => setCorreo(e.target.value)}
            type="email"
            className='form-control'
            required
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Teléfono</label>
          <input
            value={telefono}
            onChange={e => setTelefono(e.target.value)}
            type="text"
            className='form-control'
            required
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Dirección</label>
          <input
            value={direccion}
            onChange={e => setDireccion(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Tipo de Servicio</label>
          <input
            value={tipoServicio}
            onChange={e => setTipoServicio(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Mensaje</label>
          <textarea
            value={mensaje}
            onChange={e => setMensaje(e.target.value)}
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Fecha Solicitud</label>
          <input
            value={fechaSolicitud}
            onChange={e => setFechaSolicitud(e.target.value)}
            type="date"
            className='form-control'
            required
          />

        </div>
          
        <button type='submit' className='btn btn-primary'>Actualizar</button>
      </form>
          
    </div>
  )
}

export default CompEditSolicitud
