import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        404
      </h1>
      <h2 style={{ border: 'none', padding: 0, marginBottom: '1rem' }}>Página no encontrada</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
        La ruta que intentas visitar no existe o fue movida.
      </p>
      <Link to="/" className="btn-primary">
        Volver al Inicio
      </Link>
    </div>
  );
}