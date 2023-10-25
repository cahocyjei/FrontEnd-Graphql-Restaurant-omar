import React from "react";

const Footer = () => {
  return (
    <div className="ui inverted olive vertical footer segment">
      <div className="ui center aligned container">
        <div className="ui stackable inverted divided grid">
          <div className="three wide column">
            <img
              src="/images/avocados.jpg"
              style={{ width: 100, borderRadius: 100, height: 100 }}
              alt="Avocado"
            />
            <p>&copy; {new Date().getFullYear()} Avocados. Todos los derechos reservados.</p>
          </div>
          <div className="five wide column"><p style={{fontSize:20}}>Ponte en contacto con nosotros en <a href={`mailto:cahocyjei@gmail.com`}>cahocyjei@gmail.com</a></p></div>
          <div className="four wide column">
            Contenido para la tercera sección del pie de página
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
