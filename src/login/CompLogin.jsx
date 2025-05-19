import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/login'

const CompLogin = () => {
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const login = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(URI, { usuario, password })
      if (res.data.success) {
        // Aquí puedes guardar token o user en localStorage si quieres
        navigate('/') // o a donde quieras después del login
      } else {
        setError('Usuario o contraseña incorrectos')
      }
    } catch (error) {
      setError('Error al conectar con el servidor')
    }
  }

  return (
    <div>
      <h3>Iniciar Sesión</h3>
      <form onSubmit={login}>
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
          <label className='form-label'>Password</label>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
            className='form-control'
            required
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type='submit' className='btn btn-primary'>Entrar</button>
      </form>
    </div>
  )
}

export default CompLogin
