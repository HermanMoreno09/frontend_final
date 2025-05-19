import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Modal, Card } from 'react-bootstrap';

const Cotizacion = () => {
  const [showModalCliente, setShowModalCliente] = useState(false);
  const [showModalActividad, setShowModalActividad] = useState(false);
  const [showModalInsumo, setShowModalInsumo] = useState(false);

  const [nuevoCliente, setNuevoCliente] = useState({ nombre: '', nit: '', telefono: '', direccion: '' });
  const [clientes, setClientes] = useState([]);
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);

  const [actividades, setActividades] = useState([]);
  const [actividad, setActividad] = useState({ nombre: '', descripcion: '', precio: '', impuesto: '' });
  const [actividadSeleccionada, setActividadSeleccionada] = useState(null);

  const [insumos, setInsumos] = useState([]);
  const [insumo, setInsumo] = useState({ actividad_id: '', item: '', descripcion: '', costo: '' });
  const [insumoSeleccionado, setInsumoSeleccionado] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/clientes')
      .then(res => res.json())
      .then(data => setClientes(data));

    fetch('http://localhost:8000/actividades')
      .then(res => res.json())
      .then(data => setActividades(data));

    fetch('http://localhost:8000/insumos')
      .then(res => res.json())
      .then(data => setInsumos(data));
  }, []);

  // Cliente
  const handleClienteChange = e => {
    setNuevoCliente({ ...nuevoCliente, [e.target.name]: e.target.value });
  };

  const handleAddCliente = async () => {
    const res = await fetch('http://localhost:8000/clientes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoCliente),
    });
    const data = await res.json();
    setClientes([...clientes, data]);
    setNuevoCliente({ nombre: '', nit: '', telefono: '', direccion: '' });
    setShowModalCliente(false);
  };

  const handleClienteSeleccionado = e => {
    const cliente = clientes.find(c => c.id === Number(e.target.value));
    setClienteSeleccionado(cliente || null);
  };

  // Actividad
  const handleActividadChange = e => {
    setActividad({ ...actividad, [e.target.name]: e.target.value });
  };

  const handleAddActividad = async () => {
    const res = await fetch('http://localhost:8000/actividades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(actividad),
    });
    const data = await res.json();
    setActividades([...actividades, data]);
    setActividad({ nombre: '', descripcion: '', precio: '', impuesto: '' });
    setShowModalActividad(false);
  };

  const handleActividadSeleccionada = e => {
    const actividad = actividades.find(a => a.id === Number(e.target.value));
    setActividadSeleccionada(actividad || null);
    setInsumoSeleccionado(null); // reset insumo seleccionado al cambiar actividad
  };

  // Insumo
  const handleInsumoChange = e => {
    setInsumo({ ...insumo, [e.target.name]: e.target.value });
  };

  const handleAddInsumo = async () => {
  // Validar que actividad_id exista
  if (!insumo.actividad_id) {
    alert('Debe seleccionar una actividad para el insumo');
    return;
  }

  // Validar costo
  const costoNumber = Number(insumo.costo);
  if (isNaN(costoNumber) || costoNumber <= 0) {
    alert('Ingrese un costo válido mayor que 0');
    return;
  }

  try {
    const res = await fetch('http://localhost:8000/insumos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        actividad_id: insumo.actividad_id,
        item: insumo.item,
        descripcion: insumo.descripcion,
        costo: costoNumber,
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      alert(`Error: ${data.error || JSON.stringify(data)}`);
      return;
    }
    setInsumos([...insumos, data]);
    setInsumo({ actividad_id: '', item: '', descripcion: '', costo: '' });
    setShowModalInsumo(false);
  } catch (error) {
    alert(error.message);
  }
};


  // Mostrar insumos (sin filtro por actividad para tu caso)
  const insumosFiltrados = insumos;

  const handleInsumoSeleccionado = (e) => {
    const ins = insumosFiltrados.find(i => i.id === Number(e.target.value));
    setInsumoSeleccionado(ins || null);
  };

  return (
    <Container className="mt-4">
      <h3><strong><i>Cotización</i></strong></h3>

      {/* === CLIENTE === */}
      <Row className="mt-4">
        <Col md={4}>
          <Form.Label>Cliente</Form.Label>
          <div className="d-flex">
            <Form.Select onChange={handleClienteSeleccionado} defaultValue="">
              <option value="" disabled>Seleccione un cliente</option>
              {clientes.map(c => (
                <option key={c.id} value={c.id}>{c.nombre}</option>
              ))}
            </Form.Select>
            <Button variant="outline-primary" onClick={() => setShowModalCliente(true)} className="ms-2">Agregar</Button>
          </div>
        </Col>
        
        <Col md={4}>
          <Card className="p-2">
            {clienteSeleccionado ? (
              <>
                <div>{clienteSeleccionado.nombre}</div>
                <div>{clienteSeleccionado.direccion}</div>
                <div>{clienteSeleccionado.telefono}</div>
                <div>Dept. Munic.</div>
                <div>Email</div>
              </>
            ) : (
              <div>Seleccione un cliente para ver detalles</div>
            )}
          </Card>
        </Col>
      </Row>

      <hr />

      {/* === ACTIVIDADES === */}
      <h5><strong>Cuerpo de la cotización</strong></h5>
      <Row>
        <Col md={6}>
          <Form.Label>Actividad</Form.Label>
          <div className="d-flex mb-2">
            <Form.Select onChange={handleActividadSeleccionada} defaultValue="">
              <option value="" disabled>Seleccione una actividad</option>
              {actividades.map(a => (
                <option key={a.id} value={a.id}>{a.nombre}</option>
              ))}
            </Form.Select>
            <Button variant="outline-success" onClick={() => setShowModalActividad(true)} className="ms-2">Agregar</Button>
          </div>
        </Col>
        <Col md={6}>
          <Card className="p-2">
            {actividadSeleccionada ? (
              <>
                <div>{actividadSeleccionada.nombre}</div>
                <div>{actividadSeleccionada.descripcion}</div>
                <div>Precio: ${actividadSeleccionada.precio}</div>
                <div>Impuesto: {actividadSeleccionada.impuesto}%</div>
              </>
            ) : (
              <div>Seleccione una actividad para ver detalles</div>
            )}
          </Card>
        </Col>
      </Row>

      <hr />

      {/* === INSUMOS === */}
      <h5><strong>Suministros o insumos relacionados a una actividad</strong></h5>
      <Row>
        <Col md={6}>
          <Form.Label>Insumo</Form.Label>
          <div className="d-flex mb-2">
            <Form.Select onChange={handleInsumoSeleccionado} defaultValue="">
              <option value="" disabled>Seleccione un insumo</option>
              {insumosFiltrados.map(i => (
                <option key={i.id} value={i.id}>{i.item}</option>
              ))}
            </Form.Select>
            <Button variant="outline-success" onClick={() => setShowModalInsumo(true)} className="ms-2">Agregar</Button>
          </div>
        </Col>
        <Col md={6}>
          <Card className="p-2">
            {insumoSeleccionado ? (
              <>
                <div><strong>Item:</strong> {insumoSeleccionado.item}</div>
                <div><strong>Descripción:</strong> {insumoSeleccionado.descripcion}</div>
                <div><strong>Costo:</strong> ${parseFloat(insumoSeleccionado.costo).toFixed(2)}</div>
              </>
            ) : (
              <div>Seleccione un insumo para ver detalles</div>
            )}
          </Card>
        </Col>
      </Row>

      <hr />

      <div className="d-flex justify-content-between">
        <Form.Select style={{ width: '150px' }}>
          <option>Formato</option>
        </Form.Select>
        <Button variant="primary">Generar Documento</Button>
      </div>

      {/* === MODALES === */}
      <Modal show={showModalCliente} onHide={() => setShowModalCliente(false)}>
        <Modal.Header closeButton><Modal.Title>Nuevo Cliente</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group><Form.Label>Nombre</Form.Label><Form.Control name="nombre" value={nuevoCliente.nombre} onChange={handleClienteChange} /></Form.Group>
            <Form.Group><Form.Label>NIT</Form.Label><Form.Control name="nit" value={nuevoCliente.nit} onChange={handleClienteChange} /></Form.Group>
            <Form.Group><Form.Label>Teléfono</Form.Label><Form.Control name="telefono" value={nuevoCliente.telefono} onChange={handleClienteChange} /></Form.Group>
            <Form.Group><Form.Label>Dirección</Form.Label><Form.Control name="direccion" value={nuevoCliente.direccion} onChange={handleClienteChange} /></Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalCliente(false)}>Cancelar</Button>
          <Button variant="primary" onClick={handleAddCliente}>Guardar</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModalActividad} onHide={() => setShowModalActividad(false)}>
        <Modal.Header closeButton><Modal.Title>Nueva Actividad</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group><Form.Label>Nombre</Form.Label><Form.Control name="nombre" value={actividad.nombre} onChange={handleActividadChange} /></Form.Group>
            <Form.Group><Form.Label>Descripción</Form.Label><Form.Control name="descripcion" value={actividad.descripcion} onChange={handleActividadChange} /></Form.Group>
            <Form.Group><Form.Label>Precio</Form.Label><Form.Control name="precio" value={actividad.precio} onChange={handleActividadChange} /></Form.Group>
            <Form.Group><Form.Label>Impuesto</Form.Label><Form.Control name="impuesto" value={actividad.impuesto} onChange={handleActividadChange} /></Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalActividad(false)}>Cancelar</Button>
          <Button variant="primary" onClick={handleAddActividad}>Guardar</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModalInsumo} onHide={() => setShowModalInsumo(false)}>
        <Modal.Header closeButton><Modal.Title>Nuevo Insumo</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
            </Form.Group>
            <Form.Group><Form.Label>Item</Form.Label><Form.Control name="item" value={insumo.item} onChange={handleInsumoChange} /></Form.Group>
            <Form.Group><Form.Label>Descripción</Form.Label><Form.Control name="descripcion" value={insumo.descripcion} onChange={handleInsumoChange} /></Form.Group>
            <Form.Group><Form.Label>Costo</Form.Label><Form.Control
              name="costo"
              type="number"
              step="0.01"
              value={insumo.costo}
              onChange={handleInsumoChange}
            /></Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalInsumo(false)}>Cancelar</Button>
          <Button variant="primary" onClick={handleAddInsumo}>Guardar</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Cotizacion;