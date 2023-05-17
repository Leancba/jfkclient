import React from "react";
import { Layout } from "antd";
import './footes.css'


const { Footer } = Layout;

export default function Footers() {
  return (
    <section>
    <div class="container text-center text-md-left ">
      <div class="row dark-grey-text">
        

        <div class="col-md-2 col-lg-2 col-xl-4 mx-auto mb-4">
          <h6 class="text-uppercase font-weight-bold">Mapa del sitio</h6>
          <hr class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
          <p>
            <a class="dark-grey-text" href="index.html">
              Inicio
            </a>
          </p>
          <p>
            <a class="dark-grey-text" href="#especial">
              Especialidades
            </a>
          </p>
          <p>
            <a class="dark-grey-text" href="#nove">
              Novedades{" "}
            </a>
          </p>
        </div>
        

       

        <div className="col-md-4 col-lg-3 col-xl-4 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 className="text-uppercase font-weight-bold">Ubicacion</h6>
          <hr
            className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
            style={{ width: "60px" }}
          />
          <p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.6185434034555!2d-64.23672958485166!3d-31.42463428140146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a20713263175%3A0xb294a7bb552ed2ce!2sHector%20Paniza%203619%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1636052226676!5m2!1ses-419!2sar"
              width="300"
              height="100"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </p>
        </div>
         <div class="col-md-3 col-lg-2 col-xl-4 mx-auto mb-4">
          <h6 class="text-uppercase font-weight-bold">Contacto</h6>
          <hr class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
          <p id="contact">
            direccion@institutosecundariokennedy.edu.ar
          </p>
          <p>
          0351 465-6132
          </p>
        </div>
      </div>
    </div>
    <Footer style={{ textAlign: 'left' }}>
      Ciclo lectivo 2023©
    </Footer>
    </section>
  );
}
