import React from "react";
import "./assets/scss/app.scss";
import logo from "./assets/react.svg"; // Asegúrate de que esta ruta sea correcta

const estudiantes = [
  {
    nombre: "Maikol Castaño",
    carrera: "Ingeniería de Sistemas",
    materia: "Desarrollo de software WEB Front-end",
  },
  {
    nombre: "Milena Chavez",
    carrera: "Ingeniería de Sistemas",
    materia: "Desarrollo de software WEB Front-end",
  },
  {
    nombre: "Juan Perez",
    carrera: "Ingeniería de Sistemas",
    materia: "Desarrollo de software WEB Front-end",
  },
];

function App() {
  return (
    <div className="contenedor">
      <img src={logo} alt="Logo" className="logo" />
      <table className="tabla">
        <thead>
          <tr>
            <th>Estudiante</th>
            <th>Carrera</th>
            <th>Materia</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((est, i) => (
            <tr key={i}>
              <td>{est.nombre}</td>
              <td>{est.carrera}</td>
              <td>{est.materia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
