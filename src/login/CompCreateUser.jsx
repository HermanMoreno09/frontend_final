import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/usuarios/'

const CompCreateUser = () => {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const store = async (e) => {
    e.preventDefault()
    await axios.post(URI, { nombre, correo, password })
    navigate('/usuarios')
  }

  return (
    <div>
      <h3>Crear Usuario</h3>
      <form onSubmit={store}>
        <div className='mb-3'>
          <label className='form-label'>Nombre</label>
          <input
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            type='text'
            className='form-control'
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Correo</label>
          <input
            value={correo}
            onChange={e => setCorreo(e.target.value)}
            type='email'
            className='form-control'
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Password</label>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
            className='form-control'
            required
          />
        </div>
        <button type='submit' className='btn btn-primary'>Crear</button>
      </form>
    </div>
  )
}

export default CompCreateUser
