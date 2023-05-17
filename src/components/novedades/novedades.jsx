import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getAllNotices } from "../../Redux/Actions/Index";
import "./novedades.css";
import escudo from "./escudo.png"
const { Meta } = Card;

export default function Novedades() {
  const dispatch = useDispatch();

  const AllNotice = useSelector((state) => state.allNotices);

  useEffect(() => {
    dispatch(getAllNotices());
  }, []);

  const [open, setOpen] = useState(false);
  const [modalDescription, setModalDescription] = useState("");

  const handleModalOpen = (description) => {
    setModalDescription(description);
    console.log("que tengo?", modalDescription);
    setOpen(true);
  };

  return (
    <section id="novedades">
      <div>
        <h1 class="text-center" id="nove">
          Novedades
        </h1>
        <p class="text-center">
          En este apartado encontraras noticias recientes
        </p>
      </div>
      {AllNotice.length > 0 ? (
        <Row gutter={[20, 20]}>
          {AllNotice.map((noticia) => (
            <Col key={noticia.title} xs={24} sm={12} md={12} lg={12} xl={12}>
              <Card
                hoverable
                style={{ width: "100%" }}
                cover={<img alt={noticia.title} src={noticia.image} />}
              >
                <Meta title={noticia.title} description={noticia.subtitle} />
                <Button type="primary" onClick={() => handleModalOpen(noticia)}>
                  Leer noticia completa
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <div style={{ textAlign: "center", padding: "4rem" }}>
          <img
            src={escudo}
            alt="Logo de Instituto Secundario Jhon FItgeralz kennedy"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <h2>No hay novedades nuevas hasta la fecha</h2>
        </div>
      )}

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
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem", width: "100%" }}>
          {modalDescription.title}
        </h1>
        <p
          style={{
            width: "100%",
            textAlign: "left",
            fontSize: "0.9rem",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "1rem",
          }}
        >
          {modalDescription.subtitle}
        </p>
        <span
          style={{
            textAlign: "left",
            fontSize: "1.1rem",
            lineHeight: "1.5",
            color: "#333",
            marginBottom: "1.5rem",
            width: "100%",
          }}
        >
          {modalDescription.description}
        </span>
        <Button
          type="primary"
          style={{ width: "10%", margin: "auto" }}
          onClick={() => setOpen(false)}
        >
          Cerrar
        </Button>
      </Modal>
    </section>
  );
}
