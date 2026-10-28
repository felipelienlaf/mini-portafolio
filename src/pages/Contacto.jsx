import { useState } from 'react';

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setFormData({ nombre: '', email: '', mensaje: '' });
    
    // El mensaje de éxito desaparece después de 5 segundos
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <section>
      <h2>Contacto</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        ¿Tienes alguna consulta o propuesta de proyecto? Puedes escribirme directamente o enviarme un mensaje mediante el formulario.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {/* Información Directa */}
        <div className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <h3 style={{ color: '#38bdf8' }}>Información de contacto</h3>
          
          <div>
            <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Ubicación:</strong>
            <p style={{ margin: 0 }}>Temuco, Chile</p>
          </div>

          <div>
            <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Institución:</strong>
            <p style={{ margin: 0 }}>Universidad Católica de Temuco</p>
          </div>

          <div>
            <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Perfil Principal:</strong>
            <div style={{ marginTop: '0.5rem' }}>
              <a 
                href="https://github.com/felipelienlaf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary" 
                style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>

        {/* Formulario Interactivo */}
        <form onSubmit={handleSubmit} className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {enviado && (
            <div style={{ padding: '0.75rem', background: 'rgba(34, 197, 94, 0.15)', border: '1px solid #22c55e', color: '#4ade80', borderRadius: '8px', fontSize: '0.9rem' }}>
              ✓ ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
            </div>
          )}

          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem' }}>Nombre completo</label>
            <input
              type="text"
              required
              placeholder="Ej. Felipe Lienlaf"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'var(--bg-input, #1e293b)', border: '1px solid var(--border-color)', color: '#fff' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem' }}>Correo electrónico</label>
            <input
              type="email"
              required
              placeholder="tu.correo@ejemplo.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'var(--bg-input, #1e293b)', border: '1px solid var(--border-color)', color: '#fff' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem' }}>Mensaje</label>
            <textarea
              required
              rows="4"
              placeholder="Escribe tu mensaje aquí..."
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'var(--bg-input, #1e293b)', border: '1px solid var(--border-color)', color: '#fff', resize: 'vertical' }}
            />
          </div>

          <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem', width: '100%' }}>
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}