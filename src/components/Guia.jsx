import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./guia.css";

export default function Guia() {
  const [temas, setTemas] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    fetch("/data/guias.json")
      .then((res) => res.json())
      .then((data) => setTemas(data));
  }, []);

//FiltroNombre
  const temasFiltrados = temas.filter((t) =>
    t.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <main className="guia-container">
      <h1>Guía de Laravel</h1>
      <p className="guia-subtitulo">Conceptos esenciales explicados de forma simple</p>

      
      <div className="buscador-guia">
        <input
          type="text"
          placeholder="Buscar tema..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

    {/*FiltroTemas*/}
    
      <div className="guia-grid">
        {temasFiltrados.map((tema) => (
          <Link key={tema.slug} to={`/guia/${tema.slug}`} className="guia-card">
            <h2>{tema.titulo}</h2>
            <p>{tema.descripcion}</p>
          </Link>
        ))}
      </div>

      <Link to="/menu" className="back-button">
        Volver al menú
      </Link>
    </main>
  );
}
