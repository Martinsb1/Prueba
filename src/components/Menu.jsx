import { Link } from "react-router-dom";
import "./menu.css";

export default function Menu() {
  return (
    <main className="menu-container">
      <h1 className="menu-title">Explora el contenido</h1>

      <div className="menu-grid">

        <Link to="/guia" className="menu-card">
          <div className="menu-icon">📘</div>
          <h2>Guía Laravel</h2>
          <p>Aprende Laravel paso a paso desde cero.</p>
        </Link>

        <Link to="/cookbook" className="menu-card">
          <div className="menu-icon">🍳</div>
          <h2>Laravel CookBook</h2>
          <p>Recetas rápidas para resolver problemas comunes.</p>
        </Link>

        <Link to="/proyectos" className="menu-card">
          <div className="menu-icon">🛠️</div>
          <h2>Proyectos</h2>
          <p>Ejemplos reales para practicar y mejorar.</p>
        </Link>

        <Link to="/quiz" className="menu-card">
          <div className="menu-icon">❓</div>
          <h2>Quiz</h2>
          <p>Pon a prueba tus conocimientos de Laravel.</p>
        </Link>

      </div>


      <Link to="/" className="back-button">
        Volver a la página principal
      </Link>

      {/*Logo*/}
      <img 
        src="/images/milaravel.png"
        alt="Decoración menú"
        className="menu-image"
      />

    </main>
  );
}
