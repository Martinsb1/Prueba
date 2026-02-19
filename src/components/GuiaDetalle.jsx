import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { marked } from "marked";
import "./guia.css";

export default function GuiaDetalle() {
  const { slug } = useParams();
  const [temas, setTemas] = useState([]);

  useEffect(() => {
    fetch("/data/guias.json")
      .then((res) => res.json())
      .then((data) => setTemas(data));
  }, []);

  const tema = temas.find((t) => t.slug === slug);

  if (!tema) {
    return <p>Cargando...</p>;
  }

  const index = temas.findIndex((t) => t.slug === slug);
  const anterior = temas[index - 1];
  const siguiente = temas[index + 1];

  return (
    <main className="guia-detalle">
      <h1>{tema.titulo}</h1>

      <article
        className="guia-contenido"
        dangerouslySetInnerHTML={{ __html: marked.parse(tema.contenido) }}
      />

      <div className="guia-nav">
        {anterior && <Link to={`/guia/${anterior.slug}`}>← {anterior.titulo}</Link>}
        <Link to="/guia">Volver a la guía</Link>
        {siguiente && <Link to={`/guia/${siguiente.slug}`}>{siguiente.titulo} →</Link>}
      </div>
    </main>
  );
}
