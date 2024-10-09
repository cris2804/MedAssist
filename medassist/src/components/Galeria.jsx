import React from "react";
import Alumno1 from "../assets/andrei.png";
import Alumno2 from "../assets/cris.jpg";
import Alumno3 from "../assets/cleber.png";
import Alumno4 from "../assets/hugo.jpeg";
function Galeria() {
  return (
    <section className="galeria">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="foto">
            <img
              src={Alumno1}
              style={{ width: "100%", height: "100%" }}
              alt="Foto 1"
            />
          </div>
        </div>

        <div className="descripcion-foto">
          <p>
            Andrei Trujillo <br />
            Estudiante de Ciencia de la Computación <br />
            Backend Developer
          </p>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="foto">
            <img
              src={Alumno2}
              style={{ width: "100%", height: "100%" }}
              alt="Foto 2"
            />
          </div>
        </div>

        <div className="descripcion-foto">
          <p>
            Cristina Ruiz
            <br />
            Estudiante de Ciencia de la Computación <br />
            Frontend Developer
          </p>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="foto">
            <img
              src={Alumno3}
              style={{ width: "100%", height: "100%" }}
              alt="Foto 2"
            />
          </div>
        </div>
        <div className="descripcion-foto">
          <p>
            Cleber Aguado
            <br />
            Estudiante de Ciencia de la Computación <br />
            Especialista en IA Interactiva
          </p>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="foto">
            <img
              src={Alumno4}
              style={{ width: "100%", height: "100%" }}
              alt="Foto 2"
            />
          </div>
        </div>
        <div className="descripcion-foto">
          <p>
            Hugo Rivas
            <br />
            Estudiante de Ciencia de la Computación <br />
            Cybersecurity - Red Team
          </p>
        </div>
      </div>
    </section>
  );
}

export default Galeria;
