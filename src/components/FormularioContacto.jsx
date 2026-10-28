import { useState } from 'react';

export default function FormularioContacto() {
  const [formData, setFormData] = useState({ nombre: '', correo: '', mensaje: '' });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validar = () => {
    let err = {};
    if (!formData.nombre.trim()) err.nombre = 'El nombre es obligatorio.';
    if (!formData.correo.trim()) {
      err.correo = 'El correo es obligatorio.';
    } else if (!formData.correo.includes('@') || !formData.correo.includes('.')) {
      err.correo = 'Ingresa un correo electrónico válido.';
    }
    if (!formData.mensaje.trim()) err.mensaje = 'El mensaje no puede estar vacío.';
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validacionErrores = validar();

    if (Object.keys(validacionErrores).length > 0) {
      setErrores(validacionErrores);
      setEnviado(false);
    } else {
      setErrores({});
      setEnviado(true);
      setFormData({ nombre: '', correo: '', mensaje: '' });
    }
  };

  return (
    <div>
      {enviado && <div className="success-msg">¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.</div>}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="nombre">Nombre completo</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ej: Felipe Lienlaf"
          />
          {errores.nombre && <span className="error-text">{errores.nombre}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="correo">Correo electrónico</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="tu-correo@ejemplo.com"
          />
          {errores.correo && <span className="error-text">{errores.correo}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="4"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí..."
          />
          {errores.mensaje && <span className="error-text">{errores.mensaje}</span>}
        </div>

        <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem' }}>
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}