import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./cookbook.css";

export default function CookBookDetalle() {
  const { slug } = useParams();
  const [receta, setReceta] = useState(null);

  useEffect(() => {
    fetch("/data/recetas.json")
      .then((res) => res.json())
      .then((data) => {
        const encontrada = data.find((r) => r.slug === slug);
        setReceta(encontrada);
      });
  }, [slug]);

  if (!receta) return <p>Cargando...</p>;

  return (
    <main className="cookbook-detalle">
      <h1>{receta.titulo}</h1>
      <p>{receta.descripcion}</p>

      <h2>Pasos</h2>
      <ol>
        {receta.pasos.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ol>

      <h2>Código</h2>
      <pre><code>{receta.codigo}</code></pre>

      <Link to="/cookbook" className="back-button">
        Volver al CookBook
      </Link>
    </main>
  );
}
