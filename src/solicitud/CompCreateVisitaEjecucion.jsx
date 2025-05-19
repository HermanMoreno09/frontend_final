import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:3000/api/visitas/'

const CompCreateVisitaEjecucion = () => {
    const [solicitud_id, setSolicitudId] = useState('')
    const [visita_tecnica, setVisitaTecnica] = useState('')
    const [ejecucion_proyecto, setEjecucionProyecto] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()

        if (!solicitud_id || !visita_tecnica || !ejecucion_proyecto) {
            alert('Por favor completa todos los campos')
            return
        }

        try {
            await axios.post(URI, {
                solicitud_id,
                visita_tecnica,
                ejecucion_proyecto
            })
            navigate('/li')
        } catch (error) {
            console.error(error)
            alert('Error al crear la visita')
        }
    }

    return (
        <div>
            <h3>Crear Visita de Ejecución</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>ID Solicitud</label>
                    <input 
                        value={solicitud_id}
                        onChange={(e) => setSolicitudId(e.target.value)}
                        type="text"
                        className='form-control'
                        placeholder="Ingrese ID de la solicitud"
                        required
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Visita Técnica</label>
                    <input 
                        value={visita_tecnica}
                        onChange={(e) => setVisitaTecnica(e.target.value)}
                        type="date"
                        className='form-control'
                        required
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Ejecución Proyecto</label>
                    <input 
                        value={ejecucion_proyecto}
                        onChange={(e) => setEjecucionProyecto(e.target.value)}
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

export default CompCreateVisitaEjecucion
