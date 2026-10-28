import TarjetaProyecto from '../components/TarjetaProyecto';

export default function Proyectos() {
  const misProyectos = [
    {
      id: 1,
      titulo: 'Mini Portafolio React',
      descripcion: 'Aplicación SPA desarrollada con React, React Router y Vite',
      enlace: 'https://github.com/felipelienlaf/mini-portafolio',
      imagen: `${import.meta.env.BASE_URL}proyecto1.png`
    },
    {
      id: 2,
      titulo: 'Sistema Taller Backend',
      descripcion: 'API RESTful desarrollada para la gestión de talleres y servicios.',
      enlace: 'https://github.com/felipelienlaf/mini-portafolio',
      imagen: `${import.meta.env.BASE_URL}apirest.jpg`
    },
    {
      id: 3,
      titulo: 'Modelación y Cálculo Básico (EID)',
      descripcion: 'Proyecto de calculadora de limites y trigonometricos'
      enlace: 'https://github.com/felipelienlaf/mini-portafolio',
      imagen: `${import.meta.env.BASE_URL}eidcalculo.jpg` 
  ];

  return (
    <section>
      <h2>Mis Proyectos</h2>
      <div className="grid-cards">
        {misProyectos.map((p) => (
          <TarjetaProyecto 
            key={p.id} 
            titulo={p.titulo} 
            descripcion={p.descripcion} 
            enlace={p.enlace}
            imagen={p.imagen}
          />
        ))}
      </div>
    </section>
  );
}