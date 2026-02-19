import { useState } from "react";
import { Link } from "react-router-dom";
import "./quiz.css";

const preguntas = [
  {
    pregunta: "¿Qué comando se usa para crear un nuevo proyecto Laravel?",
    opciones: [
      "composer create-project laravel/laravel proyecto",
      "php artisan make:project",
      "laravel init proyecto",
      "php artisan new laravel"
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué carpeta contiene las vistas Blade?",
    opciones: ["resources/views", "app/templates", "storage/views", "public/views"],
    correcta: 0
  },
  {
    pregunta: "¿Qué ORM utiliza Laravel?",
    opciones: ["Propel", "Doctrine", "Eloquent", "RedBean"],
    correcta: 2
  },
  {
    pregunta: "¿Qué comando crea un controlador?",
    opciones: [
      "php artisan controller:create",
      "php artisan make:controller",
      "php artisan new:controller",
      "php artisan build:controller"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué archivo define las rutas web?",
    opciones: ["routes/web.php", "config/routes.php", "routes/api.php", "app/routes.php"],
    correcta: 0
  },
  {
    pregunta: "¿Qué método HTTP se usa para actualizar un recurso?",
    opciones: ["DELETE", "PUT/PATCH", "GET", "POST"],
    correcta: 1
  },
  {
    pregunta: "¿Qué comando ejecuta las migraciones?",
    opciones: [
      "php artisan migrate:run",
      "php artisan migrate",
      "php artisan db:run",
      "php artisan schema:apply"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué función devuelve una vista en un controlador?",
    opciones: ["template()", "blade()", "view()", "render()"],
    correcta: 2
  },
  {
    pregunta: "¿Qué archivo contiene la configuración principal de la app?",
    opciones: ["bootstrap/app.php", "config/app.php", "resources/config.php", "app/config.php"],
    correcta: 1
  },
  {
    pregunta: "¿Qué middleware se usa para verificar usuarios autenticados?",
    opciones: ["guest", "verified", "auth", "session"],
    correcta: 2
  }
];

export default function Quiz() {
  const [respuestas, setRespuestas] = useState(Array(10).fill(null));
  const [finalizado, setFinalizado] = useState(false);

  const seleccionarRespuesta = (preguntaIndex, opcionIndex) => {
    const nuevas = [...respuestas];
    nuevas[preguntaIndex] = opcionIndex;
    setRespuestas(nuevas);
  };

  const calcularPuntuacion = () => {
    return respuestas.filter((r, i) => r === preguntas[i].correcta).length;
  };

  const reiniciarQuiz = () => {
    setRespuestas(Array(10).fill(null));
    setFinalizado(false);
  };

  return (
    <main className="quiz-container">
      <h1>Quiz de Laravel</h1>


      <Link to="/menu" className="back-button">
        Volver al menú
      </Link>

      {!finalizado ? (
        <>
          {preguntas.map((p, index) => (
            <div key={index} className="quiz-card">
              <h3>{index + 1}. {p.pregunta}</h3>

              {p.opciones.map((op, i) => (
                <label key={i} className="quiz-option">
                  <input
                    type="radio"
                    name={`pregunta-${index}`}
                    checked={respuestas[index] === i}
                    onChange={() => seleccionarRespuesta(index, i)}
                  />
                  {op}
                </label>
              ))}
            </div>
          ))}

          <button className="quiz-btn" onClick={() => setFinalizado(true)}>
            Finalizar Quiz
          </button>
        </>
      ) : (
        <div className="quiz-resultado">
          <h2>Tu puntuación: {calcularPuntuacion()} / 10</h2>

          <button className="quiz-btn" onClick={reiniciarQuiz}>
            Reintentar Quiz
          </button>
        </div>
      )}
    </main>
  );
}
