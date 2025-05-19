import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:3000/api/visitas/'

const CompShowVisitasEjecuciones = () => {
    const [solicitudes, setSolicitudes] = useState([])

    useEffect(() => {
        getSolicitudes()
    }, [])

    const getSolicitudes = async () => {
        const res = await axios.get(URI)
        setSolicitudes(res.data)
    }

    const deleteSolicitud = async (id) => {
        await axios.delete(`${URI}${id}`)
        getSolicitudes()
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    
                    <table className='table'>
                        <Link to="/la" className='btn btn-primary mt-2 mb-2'>
                        <i className="fas fa-plus">Crear</i>
                        </Link>
                        <thead className='table-primary'>
                            <tr>
                                <th>Visita Técnica</th>
                                <th>Ejecución Proyecto</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {solicitudes.map((s) => (
                                <tr key={s.id}>
                                    <td>{s.visita_tecnica}</td>
                                    <td>{s.ejecucion_proyecto}</td>
                                    <td>
                                        <Link to={`/le/${s.id}`} className='btn btn-info'>
                                            <i className="fas fa-edit">Editar</i>
                                        </Link>
                                        <button 
                                            onClick={() => deleteSolicitud(s.id)} 
                                            className='btn btn-danger'>
                                            <i className="fas fa-trash-alt">Eliminar</i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowVisitasEjecuciones
