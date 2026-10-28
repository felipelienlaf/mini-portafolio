import { Link } from 'react-router-dom';

export default function Inicio() {
  const pilares = [
    { icono: '</>', titulo: 'Desarrollo Frontend', desc: 'Creación de interfaces interactivas y reactivas.' },
    { icono: '💻', titulo: 'Proyectos Reales', desc: 'Enfoque en código limpio y buenas prácticas.' },
    { icono: '👤', titulo: 'Aprendizaje Continuo', desc: 'Constante actualización en nuevas tecnologías.' },
    { icono: '⭐', titulo: 'Compromiso y Pasión', desc: 'Dedicación a la calidad del software.' }
  ];

  return (
    <div className="inicio-container">
      {/* Hero / Presentación */}
      <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        <div style={{ flex: '1 1 300px' }}>
          <h1>Hola, soy Felipe Lienlaf</h1>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--text-muted)', border: 'none', padding: 0 }}>
            Desarrollador Frontend / Estudiante de Informática
          </h2>
          <p style={{ margin: '1rem 0 1.5rem 0', color: 'var(--text-muted)' }}>
            Bienvenido a mi portafolio. Aquí puedes conocer más sobre mí, mis habilidades y mis proyectos.
          </p>
          <Link to="/proyectos" className="btn-primary">
            Explorar proyectos
          </Link>
        </div>

        {/* Imagen de presentación desde public/ */}
        <img 
          src={`${import.meta.env.BASE_URL}foto-perfil.jpg`} 
          alt="Presentación Felipe Lienlaf" 
          style={{
            flex: '0 1 280px',
            width: '100%',
            height: '220px',
            borderRadius: '16px',
            objectFit: 'cover',
            border: '1px solid var(--border-color)'
          }}
        />
      </section>

      {/* Grid de Pilares */}
      <div className="grid-cards">
        {pilares.map((pilar, index) => (
          <div key={index} className="card" style={{ textAlign: 'center', padding: '1.5rem' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{pilar.icono}</div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{pilar.titulo}</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{pilar.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}