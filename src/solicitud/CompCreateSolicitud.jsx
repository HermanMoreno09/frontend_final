import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'https://backend-1-6p5l.onrender.com/api/servicios/'

const CompCreateSolicitud = () => {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [direccion, setDireccion] = useState('')
  const [tipoServicio, setTipoServicio] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [fechaSolicitud, setFechaSolicitud] = useState('')
  const navigate = useNavigate()

  const store = async (e) => {
    e.preventDefault()
    await axios.post(URI, {
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
      <h3>Crear Solicitud</h3>
      <form onSubmit={store}>
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

        <button type='submit' className='btn btn-primary'>Guardar</button>
      </form>
    </div>
  )
}

export default CompCreateSolicitud
