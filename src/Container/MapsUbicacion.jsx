import React from "react";
import { useLanguage } from "../Context/LanguageContext";

const MapsUbicacion = () => {

  const { language } = useLanguage();

  return (
    <>
      {" "}
      <section className="px-6 py-6 bg-gray-50">
        <h1 className="max-w-7xl mx-auto text-center mb-4">
          {language === "es" ? "UBICACION EN EL MAPA" : "LOCATION ON THE MAP"}
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          {language === "es"
            ? "Aquí puedes ver mi ubicación aproximada en Barranquilla. Si te interesa colaborar, tienes alguna pregunta o quieres agendar una reunión, contáctame. Estoy disponible para proyectos y colaboraciones."
            : "Here you can see my approximate location in Barranquilla. If you'd like to collaborate, have questions or want to schedule a meeting, get in touch. I'm available for projects and collaborations."}
        </p>
      </section>
      <section
        data-bs-version="5.1"
        className="contacts4 map1 cid-uxk1GImM79"
        id="contacts-3-uxk1GImM79"
        style={{ marginBottom: "20px" }}
      >
        <div className="main_wrapper">
          <div className="b_wrapper">
            <div className="container-fluid">
              <div className="col-md-5 col-lg-4 item-wrapper">
                <h5 className="cardTitle mbr-fonts-style mb-2 display-5">
                  <strong>
                    {language === "es"
                      ? "Datos de Contacto"
                      : "Contact Information"}
                  </strong>
                </h5>
                <ul className="list mbr-fonts-style display-7">
                  <li className="mbr-text item-wrap">
                    {language === "es" ? "Teléfono:" : "Phone:"}
                    <a href="tel:123-456-7890" className="text-black">
                      3012618709
                    </a>
                  </li>

                  <li className="mbr-text item-wrap">
                    {language === "es" ? "Correo:" : "Email:"}
                    <a
                      href="mailto:info@desarrolladorpro.com"
                      className="text-black"
                    >
                      luisacosta7417@gmail.com
                    </a>
                  </li>

                  <li className="mbr-text item-wrap">
                    {language === "es" ? "Dirección:" : "Address:"}{" "}
                    Barranquilla, Colombia
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="google-map">
            <iframe
              title="Ubicación en Google Maps: Barranquilla, Colombia"
              src="https://www.google.com/maps?q=Barranquilla,Colombia&output=embed"
              style={{
                width: "90%",
                height: "500px",
                borderRadius: "5%",
                marginLeft: "100px"
              }}
              className="google-map_frame"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default MapsUbicacion;
