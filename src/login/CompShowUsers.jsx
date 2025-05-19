import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/usuarios/'

const CompShowUsers = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const res = await axios.get(URI)
    setUsers(res.data)
  }

  const deleteUser = async (id) => {
    await axios.delete(`${URI}${id}`)
    getUsers()
  }

  return (
    <div className='container'>
      <h3>Lista de Usuarios</h3>
      <Link to="/usuarios/create" className='btn btn-primary mt-2 mb-2'>+ Nuevo Usuario</Link>
      <table className='table'>
        <thead className='table-primary'>
          <tr>
            <th>Usuario</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.usuario}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/usuarios/edit/${user.id}`} className='btn btn-info me-1'>Editar</Link>
                <button onClick={() => deleteUser(user.id)} className='btn btn-danger'>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CompShowUsers
