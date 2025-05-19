import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const URI = 'http://localhost:8000/usuarios/'

const CompEditUser = () => {
  const [usuario, setUsuario] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    getUserById()
  }, [])

  const getUserById = async () => {
    const res = await axios.get(URI + id)
    setUsuario(res.data.usuario)
    setEmail(res.data.email)
    setPassword(res.data.password) // en texto plano (no recomendado)
  }

  const update = async (e) => {
    e.preventDefault()
    await axios.put(URI + id, { usuario, email, password })
    navigate('/usuarios')
  }

  return (
    <div>
      <h3>Editar Usuario</h3>
      <form onSubmit={update}>
        <div className='mb-3'>
          <label className='form-label'>Usuario</label>
          <input
            value={usuario}
            onChange={e => setUsuario(e.target.value)}
            type='text'
            className='form-control'
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Email</label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
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
        <button type='submit' className='btn btn-primary'>Actualizar</button>
      </form>
    </div>
  )
}

export default CompEditUser
