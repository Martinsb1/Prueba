import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./proyectos.css";

export default function Proyectos() {
  const [proyectos, setProyectos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [filtroDificultad, setFiltroDificultad] = useState("todos");

  useEffect(() => {
    fetch("/data/proyectos.json")
      .then((res) => res.json())
      .then((data) => setProyectos(data));
  }, []);

 
  const proyectosFiltrados = proyectos.filter((p) => {
    const coincideNombre = p.titulo.toLowerCase().includes(busqueda.toLowerCase());
    const coincideDificultad =
      filtroDificultad === "todos" ||
      p.dificultad.toLowerCase() === filtroDificultad.toLowerCase();

    return coincideNombre && coincideDificultad;
  });

  return (
    <main className="proyectos-container">
      <h1>Proyectos con Laravel</h1>
      <p className="proyectos-subtitulo">Ejemplos reales para demostrar tus habilidades</p>

      {/* Filtros */}
      <div className="buscador">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <select
          value={filtroDificultad}
          onChange={(e) => setFiltroDificultad(e.target.value)}
        >
          <option value="todos">Todas las dificultades</option>
          <option value="Baja">Baja</option>
          <option value="Media">Media</option>
          <option value="Alta">Alta</option>
        </select>
      </div>

      {/* grid proyectos */}
      <div className="proyectos-grid">
        {proyectosFiltrados.map((p) => (
          <div key={p.slug} className="proyecto-card">


            <img 
              src={`/images/${p.imagen}`} 
              alt={p.titulo} 
              className="proyecto-img"
            />

            <h2>{p.titulo}</h2>
            <p>{p.descripcion}</p>

            <div className="proyecto-info">
              <span className="badge">{p.stack}</span>
              <span className={`badge dificultad-${p.dificultad.toLowerCase()}`}>
                {p.dificultad}
              </span>
            </div>

            <Link to={`/proyectos/${p.slug}`} className="btn-ver">
              Ver proyecto
            </Link>
          </div>
        ))}
      </div>

      <Link to="/menu" className="back-button">
        Volver al menú
      </Link>
    </main>
  );
}
