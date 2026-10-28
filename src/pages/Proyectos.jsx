import TarjetaProyecto from '../components/TarjetaProyecto';

export default function Proyectos() {
  const misProyectos = [
    {
      id: 1,
      titulo: 'Mini Portafolio React',
      descripcion: 'Aplicación SPA desarrollada con React, React Router y Vite en evaluación académica.',
      enlace: 'https://github.com/felipelienlaf/mini-portafolio'
    },
    {
      id: 2,
      titulo: 'Sistema Taller Backend',
      descripcion: 'API RESTful desarrollada para la gestión de talleres y servicios.',
      enlace: ''
    }
  ];

  return (
    <section>
      <h2>Mis Proyectos</h2>
      <div className="grid-cards">
        {misProyectos.map((p) => (
          <TarjetaProyecto key={p.id} titulo={p.titulo} descripcion={p.descripcion} enlace={p.enlace} />
        ))}
      </div>
    </section>
  );
}