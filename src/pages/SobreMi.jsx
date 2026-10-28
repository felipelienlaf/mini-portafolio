export default function SobreMi() {
  return (
    <section>
      <h2>Sobre mí</h2>
      
      {/* Bloque superior con Foto/Avatar y Bio */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
        <div style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'var(--bg-card)',
          border: '2px solid var(--border-glow)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem',
          flexShrink: 0
        }}>
          👤
        </div>
        <div style={{ flex: '1 1 300px' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Soy <strong>Felipe Lienlaf</strong>, estudiante de Ingeniería Civil Informática. Me apasiona el desarrollo web y me interesa crear soluciones tecnológicas que mejoren la experiencia de las personas.
          </p>
        </div>
      </div>

      {/* Subsección: ¿Qué estudio? */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>¿Qué estudio?</h3>
        <p style={{ color: 'var(--text-muted)' }}>
          Estudio Ingeniería Civil Informática en la Universidad Católica de Temuco.
        </p>
      </div>

      {/* Subsección: ¿Qué me interesa? */}
      <div>
        <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>¿Qué me interesa?</h3>
        <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>Desarrollo web y tecnologías frontend.</li>
          <li>Aprender nuevas herramientas y frameworks.</li>
          <li>Construir proyectos que generen un impacto real.</li>
        </ul>
      </div>
    </section>
  );
}