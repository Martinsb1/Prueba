import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./proyectos.css";

export default function ProyectoDetalle() {
  const { slug } = useParams();
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    fetch("/data/proyectos.json")
      .then((res) => res.json())
      .then((data) => setProyectos(data));
  }, []);

  const proyecto = proyectos.find((p) => p.slug === slug);

  if (!proyecto) return <p>Cargando...</p>;

  return (
    <main className="proyecto-detalle">
      <h1>{proyecto.titulo}</h1>

      <section>
        <h2>🎯 Objetivo</h2>
        <p>{proyecto.objetivo}</p>
      </section>

      <section>
        <h2>🧩 Módulos de Laravel utilizados</h2>
        <ul>
          {proyecto.modulos.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>🛠️ Stack técnico</h2>
        <p>{proyecto.stack}</p>
      </section>

      <section>
        <h2>📈 Dificultad</h2>
        <p>{proyecto.dificultad}</p>
      </section>

      <section>
        <h2>🖼️ Capturas</h2>
        <div className="imagenes-grid">
          {proyecto.imagenes.map((img) => (
            <img key={img} src={`/images/${img}`} alt={proyecto.titulo} />
          ))}
        </div>
      </section>

      <Link to="/proyectos" className="back-button">
        Volver a proyectos
      </Link>
    </main>
  );
}
