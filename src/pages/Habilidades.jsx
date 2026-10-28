export default function Habilidades() {
  const habilidadesTecnicas = [
    { nombre: 'HTML5 & CSS3', nivel: 'Avanzado', desc: 'Diseño responsive, layouts con Flexbox y CSS Grid.' },
    { nombre: 'JavaScript (ES6+)', nivel: 'Intermedio', desc: 'Sintaxis moderna, promesas, async/await y manipulación del DOM.' },
    { nombre: 'React & Vite', nivel: 'Intermedio', desc: 'Desarrollo de componentes, hooks, routing SPA y consumo de APIs.' },
    { nombre: 'Git & GitHub', nivel: 'Intermedio', desc: 'Control de versiones, flujo de trabajo en ramas y CI/CD con GitHub Actions.' },
    { nombre: 'Backend Básicos', nivel: 'En proceso', desc: 'Nociones de Node.js, Express y bases de datos.' }
  ];

  return (
    <section>
      <h2>Habilidades</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Tecnologías y herramientas que utilizo en mis proyectos de desarrollo web:
      </p>

      <div className="grid-cards">
        {habilidadesTecnicas.map((hab, index) => (
          <div key={index} className="card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#38bdf8' }}>{hab.nombre}</h3>
              <span style={{ 
                fontSize: '0.75rem', 
                padding: '0.2rem 0.6rem', 
                borderRadius: '12px', 
                background: 'rgba(56, 189, 248, 0.1)', 
                color: '#38bdf8', 
                border: '1px solid rgba(56, 189, 248, 0.3)' 
              }}>
                {hab.nivel}
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>{hab.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}