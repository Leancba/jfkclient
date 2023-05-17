import React from "react";  
import './navegacion.css'
import patio from "../navegacion/img/patiocentral.jpg";
import escudo from "../navegacion/img/escudo.png";

export default function navegacion() {
  return (
    <div class="header-container">
      <header class="header">
        <nav class="navbar navbar-expand-sm navbar-dark justify-content-between">
          <a class="navbar-brand" href="#"><img src={escudo}></img>Instituto John F. Kennedy
		  </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto ">
              .
              <li class="nav-item active">
                <a class="nav-link" href="index.html">
                  Inicio
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#especial">
                  Especialidades
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#nove">
                  Novedades
                </a>
              </li>
              <li class="nav-item active">
                <a
                  class="nav-link"
                  href="http://humerez-informatica.com.ar/kennedy/ingresar.php"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Autogestión
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#contact">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
