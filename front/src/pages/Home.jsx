import React from "react";
import NavBar from "../components/navbar/NavBar";
import './home.css'

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="contenedor">
        <h1 className="titulo">Bienvenido a la Tienda de Interiores</h1>
        <p p className="titulo-p">Explora nuestra colección de muebles y decoración.</p>

        {/* Contenedor de los cuadrados */}
        <div className="cuadrados-container">
          {/* Cuadrado 1 */}
          <div className="cuadrado" onClick={() => window.location.href = "/productos/sillas"}>
            <img
              src="https://cdn.pixabay.com/photo/2016/11/19/17/25/furniture-1840463_1280.jpg"
              alt="Sillas"
              className="imagen-cuadrado"
            />
            <div className="overlay">
              <h2 className="titulo-cuadrado">Sillas</h2>
            </div>
          </div>

          {/* Cuadrado 2 */}
          <div className="cuadrado" onClick={() => window.location.href = "/productos/mesas"}>
            <img
              src="https://cdn.pixabay.com/photo/2015/05/31/12/50/table-791584_1280.jpg"
              alt="Mesas"
              className="imagen-cuadrado"
            />
            <div className="overlay">
              <h2 className="titulo-cuadrado">Mesas</h2>
            </div>
          </div>

          {/* Cuadrado 3 */}
          <div className="cuadrado" onClick={() => window.location.href = "/productos/sofas"}>
            <img
              src="https://cdn.pixabay.com/photo/2024/11/07/18/48/sofa-9181557_1280.jpg"
              alt="Sofás"
              className="imagen-cuadrado"
            />
            <div className="overlay">
              <h2 className="titulo-cuadrado">Sofás</h2>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 Tienda de Interiores. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;