import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
const URI = 'http://localhost:3000/api/servicios/'

const CompShowSolicitudes = () => {
  const [solicitudes, setSolicitudes] = useState([])

  useEffect(() => {
    getSolicitudes()
  }, [])

  const getSolicitudes = async () => {
    const res = await axios.get(URI)
    setSolicitudes(res.data)
  }

  const deleteSolicitud = async (id) => {
    const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar esta solicitud?")
    if (confirmacion) {
      await axios.delete(`${URI}${id}`)
      getSolicitudes()
    }
  }

  const columns = [
    { name: 'Nombre', selector: row => row.nombre, sortable: true },
    { name: 'Correo', selector: row => row.correo },
    { name: 'Teléfono', selector: row => row.telefono },
    { name: 'Dirección', selector: row => row.direccion || '-' },
    { name: 'Tipo Servicio', selector: row => row.tipo_servicio || '-' },
    { name: 'Mensaje', selector: row => row.mensaje || '-' },
    { name: 'Fecha Solicitud', selector: row => row.fecha_solicitud },
    
    {

      name: 'Acciones',
      cell: row => (
        <div className="d-flex gap-2">
          <Link to={`/li/`} className="btn btn-sm btn-danger">
            <FaEye />
          </Link>
          <Link to={`/solicitud/edit/${row.id}`} className="btn btn-sm btn-warning">
            <FaEdit />
          </Link>
          <button onClick={() => deleteSolicitud(row.id)} className="btn btn-sm btn-danger">
            <FaTrash />
          </button>
        </div>
      )
    }
  ]

  return (
    <div className='container mt-4'>
      <Link to="/solicitud/create" className='btn btn-primary mb-3'>+ Nueva Solicitud</Link>
      <DataTable
        title="Listado de Solicitudes"
        columns={columns}
        data={solicitudes}
        pagination
        highlightOnHover
        responsive
      />
    </div>
  )
}

export default CompShowSolicitudes
