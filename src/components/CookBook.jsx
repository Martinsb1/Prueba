import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./cookbook.css";

export default function CookBook() {
  const [recetas, setRecetas] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [tagSeleccionado, setTagSeleccionado] = useState(null);

  useEffect(() => {
    fetch("/data/recetas.json")
      .then((res) => res.json())
      .then((data) => setRecetas(data));
  }, []);

  const tags = [...new Set(recetas.flatMap((r) => r.tags))];

  const recetasFiltradas = recetas.filter((r) => {
    const coincideTexto = r.titulo.toLowerCase().includes(busqueda.toLowerCase());
    const coincideTag = !tagSeleccionado || r.tags.includes(tagSeleccionado);
    return coincideTexto && coincideTag;
  });

  return (
    <main className="cookbook-container">
      <h1>Laravel CookBook</h1>
      <p className="cookbook-subtitulo">Recetas rápidas para resolver problemas comunes</p>

      {/* Buscador*/}
      <input
        type="text"
        className="cookbook-buscador"
        placeholder="Buscar receta..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {/*Tags*/}
      <div className="cookbook-tags">
        <button
          className={!tagSeleccionado ? "tag active" : "tag"}
          onClick={() => setTagSeleccionado(null)}
        >
          Todos
        </button>

        {tags.map((t) => (
          <button
            key={t}
            className={tagSeleccionado === t ? "tag active" : "tag"}
            onClick={() => setTagSeleccionado(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Listadorecetas*/}
      <div className="cookbook-grid">
        {recetasFiltradas.map((r) => (
          <Link key={r.slug} to={`/cookbook/${r.slug}`} className="cookbook-card">
            <h2>{r.titulo}</h2>
            <p>{r.descripcion}</p>

            <div className="tag-list">
              {r.tags.map((t) => (
                <span key={t} className="tag-mini">{t}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <Link to="/menu" className="back-button">
        Volver al menú
      </Link>
    </main>
  );
}
