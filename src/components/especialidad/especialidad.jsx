import React, { useState } from "react";
import { Carousel, Modal, Button } from "antd";

import economia from "./img/economia2.jpg";
import informatica from "./img/informa.jpg";

import "./especialidad.css";

export default function Especialidad() {
  const economiax = {
    titulo: "Bachiller en Economia",
    Duracion: "6 años",
    description:
      "En cuanto al bachillerato en economía y administración, los objetivos generales del ciclo básico son estudiar y complejizar las distintas áreas del conocimiento, desarrollar competencias básicas en cada área o disciplina, y promover acciones humanas éticas en el ambiente escolar, social, natural, político-económico y cultural. Los objetivos generales del ciclo de especialización incluyen lograr una capacidad de aprendizaje que propicie la autogestión, desarrollar competencias para interpretar y operar con los fenómenos económicos, participar, intervenir y aplicar conocimientos en circunstancias prácticas, y formar ética e integralmente para la incorporación al mundo laboral o a la prosecución de estudios superiores. ",
    image: economia,
  };

  const informaticax = {
    titulo: "Tecnico en Informatica",
    Duracion: "7 años",
    description:
      "El perfil del Técnico en Informática Profesional y Personal se enfoca en ofrecer soluciones y servicios de alta calidad a los usuarios de tecnología de la información. Este perfil cuenta con diversas habilidades técnicas y personales para garantizar el correcto funcionamiento de los equipos y sistemas informáticos, y brindar asesoría y apoyo técnico en todas las etapas del proceso.En primer lugar, el Técnico en Informática se encarga de facilitar la operación de los equipos y programas, instruyendo al usuario para eliminar cualquier problema operativo y sistematizando su operatoria mediante la estructuración de sus datos y programas. Además, este perfil es capaz de demostrar las funcionalidades y operatorias de los componentes, equipos y sistemas, asegurando la seguridad e integridad de los datos locales del usuario y la eficiencia de su acceso",
    image: informatica,
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const [open, setOpen] = useState(false);
  const [modalDescription, setModalDescription] = useState("");

  const handleModalOpen = (description) => {
    
    setModalDescription(description);
    setOpen(true);
  };

  return (
    <div id="especialiades">
    <Carousel  afterChange={onChange}>
      <div class="tecnico" id="especial">
        <div class="overlay-economia py-5 economia">
          <div class="container-fluid">
            <div class="row">
              <div class="col-6 ">
                <img src={economia} class="d-block w-100 img-fluid" />
              </div>
              <div class="col-6 text-center justify-content-center align-self-center text-white">
                <h6>
                  <em>Ofertas educativas</em>
                </h6>
                <h1 class="display-4">TECNICO EN INFORMATICA</h1>
                <p>
                  Facilitar la operatoria y asesorar al usuario, en la operación
                  y aprovechamiento de la funcionalidad de los equipos y
                  programas.
                </p>
                <a
                  onClick={() => handleModalOpen(informaticax)}
                  class="btn btn-outline-light btn-lg"
                >
                  {" "}
                  Conoce más
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="economia">
        <div class="overlay-economia py-5 economia">
          <div class="container-fluid">
            <div class="row">
              <div class="col-6 ">
                <img src={informatica} class="d-block w-100 img-fluid" />
              </div>
              <div class="col-6 text-center justify-content-center align-self-center text-white">
                <h6>
                  <em>Ofertas educativas</em>
                </h6>
                <h1 class="display-4">ECONOMIA Y ADMINISTRACIÓN</h1>
                <p>
                  Ofrecer a los estudiantes una formación que les permita
                  acceder a marcos interpretativos para la comprensión y
                  análisis de los fenómenos sociales, económicos y
                  organizacionales.
                </p>
                <a
                  onClick={() => handleModalOpen(economiax)}
                  class="btn btn-outline-light btn-lg"
                >
                  {" "}
                  Conoce más
                </a>
              </div>
            </div>
          </div>
        </div>
        <Modal
          centered
          visible={open}
          onOk={() => setOpen(false)}
          width={"80%"}
          bodyStyle={{
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#F2F2F2",
            padding: "1rem",
            borderRadius: "10px",
          }}
          style={{ overflowY: "scroll" }}
        >
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            {modalDescription.titulo}
          </h1>
          <img
            src={modalDescription.image}
            alt={modalDescription.titulo}
            style={{
              maxWidth: "100%",
              maxHeight: "250px",
              objectFit: "contain",
              marginBottom: "1.5rem",
              borderRadius: "5px",
            }}
          />
          <p
            style={{
              textAlign: "left",
              fontSize: "0.9rem",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "1rem",
            }}
          >
            Duración: {modalDescription.Duracion}
          </p>
          <span
            style={{
              textAlign: "left",
              fontSize: "1.1rem",
              lineHeight: "1.5",
              color: "#333",
              marginBottom: "1.5rem",
            }}
          >
            {modalDescription.description}
          </span>
          <Button
            type="primary"
            style={{ width: "50%", margin: "auto" }}
            onClick={() => setOpen(false)}
          >
            Cerrar
          </Button>
        </Modal>
      </div>
    </Carousel>
    </div>
  );
}
