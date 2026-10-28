export default function SobreMi() {
  return (
    <section>
      <h2>Sobre mí</h2>
      
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
        <img 
          src={`${import.meta.env.BASE_URL}foto-perfil2.jpeg`} 
          alt="Felipe Lienlaf" 
          style={{
            width: '130px',
            height: '130px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid var(--border-glow)',
            flexShrink: 0
          }}
        />
        <div style={{ flex: '1 1 300px' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Soy <strong>Felipe Lienlaf</strong>, estudiante de Ingeniería Civil Informática en la Universidad Católica de Temuco. Me apasiona el desarrollo web y la creación de soluciones tecnológicas interactivas.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>¿Qué estudio?</h3>
        <p style={{ color: 'var(--text-muted)' }}>
          Ingeniería Civil Informática en la Universidad Católica de Temuco.
        </p>
      </div>

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