import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Guia from "./components/Guia";
import CookBook from "./components/CookBook";
import CookBookDetalle from "./components/CookBookDetalle";
import Proyectos from "./components/Proyectos";
import Quiz from "./components/Quiz";
import GuiaDetalle from "./components/GuiaDetalle";
import ProyectoDetalle from "./components/ProyectoDetalle";
import "./styles.css";


export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />

              <main>
                <Section title="¿Qué es Laravel?">
                  <p>
                    Laravel es un <strong>framework de PHP</strong> diseñado para desarrollar aplicaciones web 
                    de forma estructurada, segura y eficiente. Se basa en el patrón 
                    <strong> MVC (Modelo–Vista–Controlador)</strong> y ofrece una sintaxis limpia que facilita 
                    el trabajo tanto a desarrolladores principiantes como a expertos.
                  </p>
                </Section>

                <Section title="¿Para qué se usa Laravel?">
                  <ul>
                    <li>APIs y servicios backend</li>
                    <li>Aplicaciones empresariales</li>
                    <li>E‑commerce</li>
                    <li>Sistemas de reservas</li>
                    <li>Plataformas educativas</li>
                    <li>Blogs y webs dinámicas</li>
                    <li>Aplicaciones SaaS</li>
                  </ul>
                </Section>

                <Section title="¿Qué encontrarás dentro de esta web?">
                  <ul>
                    <li><strong>Guías y tutoriales</strong></li>
                    <li><strong>Ejemplos prácticos</strong></li>
                    <li><strong>Componentes reutilizables</strong></li>
                    <li><strong>Recursos recomendados</strong></li>
                    <li><strong>Novedades</strong></li>
                    <li><strong>Cursos</strong></li>
                  </ul>
                </Section>

                <Section title="¿Listo para empezar?">
                  <p>Explora el contenido y comienza a aprender Laravel.</p>


                  <a href="/menu">
                    <button>Empezar ahora</button>
                  </a>
                </Section>
              </main>

              <Footer />
            </>
          }
        />


        <Route path="/menu" element={<Menu />} />
        <Route path="/guia" element={<Guia />} />
        <Route path="/cookbook" element={<CookBook />} />
        <Route path="/cookbook/:slug" element={<CookBookDetalle />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/proyectos/:slug" element={<ProyectoDetalle />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/guia/:slug" element={<GuiaDetalle />} />
        
      </Routes>
    </>
  );
}
