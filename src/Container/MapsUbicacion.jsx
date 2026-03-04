import React from "react";
import { useLanguage } from "../Context/LanguageContext";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const MapsUbicacion = () => {
  const { language } = useLanguage();

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(language === "es" ? "¡Copiado!" : "Copied!");
    });
  };

  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      label: language === "es" ? "Teléfono" : "Phone",
      value: "3012618709",
      href: "tel:+573012618709",
      color: "from-gray-900 to-gray-800",
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      label: language === "es" ? "Correo Electrónico" : "Email",
      value: "luisacosta7417@gmail.com",
      href: "mailto:luisacosta7417@gmail.com",
      color: "from-gray-900 to-gray-800",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === "es" ? "Contáctame" : "Get In Touch"}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            {language === "es"
              ? "Estoy siempre abierto a nuevas oportunidades y colaboraciones. No dudes en ponerte en contacto conmigo para discutir proyectos o simplemente para saludar."
              : "I'm always open to new opportunities and collaborations. Feel free to reach out to discuss projects or just say hello."}
          </p>
        </div>

        {/* Grid con Información de Contacto y Mapa */}
        <div className="grid lg:grid-cols-3 gap-8 items-start mb-12">
          {/* Tarjetas de Contacto */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-white"
                style={{ backgroundColor: "#111826" }}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white bg-opacity-20 shadow-lg group-hover:shadow-xl transition-shadow text-black flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs font-semibold uppercase tracking-wide mb-1 opacity-90">
                      {info.label}
                    </h3>
                    {info.href ? (
                      <button
                        onClick={() => handleCopyToClipboard(info.value)}
                        className="text-white font-bold text-base hover:text-blue-100 transition-colors break-words text-left bg-none border-none p-0 cursor-pointer"
                      >
                        {info.value}
                      </button>
                    ) : (
                      <p className="font-bold text-base">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Información Adicional */}
            <div className="p-4 rounded-lg bg-gray-900 text-white border border-gray-700 hover:border-gray-500 transition-all">
              <h3 className="font-bold text-base mb-2">
                {language === "es" ? "💡 Disponibilidad" : "💡 Availability"}
              </h3>
              <p className="text-xs text-gray-300">
                {language === "es"
                  ? "Disponible para trabajo remoto, proyectos freelance y colaboraciones."
                  : "Available for remote work, freelance projects and collaborations."}
              </p>
            </div>
          </div>

          {/* Mapa */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group hover:shadow-3xl transition-all duration-300">
              {/* use fixed smaller heights on small screens to prevent excessive scroll */}
              <div className="relative h-48 sm:h-64 md:h-96">
                <iframe
                  className="w-full h-full"
                  title="Ubicación en Google Maps: Barranquilla, Colombia"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62812.80471520811!2d-74.86437542499999!3d10.963640100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef5d2a127ca19d5%3A0x1fd65fc5e3b9e62e!2sBarranquilla!5e0!3m2!1ses!2sco!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapsUbicacion;
