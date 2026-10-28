export default function TarjetaProyecto({ titulo, descripcion, enlace }) {
  return (
    <article className="card">
      <div>
        <h3 style={{ marginBottom: '0.5rem', color: '#38bdf8' }}>{titulo}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{descripcion}</p>
      </div>
      <div style={{ marginTop: '1.25rem' }}>
        {enlace ? (
          <a
            href={enlace}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
          >
            Ver repositorio ↗
          </a>
        ) : (
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            Repositorio privado / En desarrollo
          </span>
        )}
      </div>
    </article>
  );
}