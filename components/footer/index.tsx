import React from "react";
//import styles from '@/styles/footer.module.css';

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
          </div>
          <div className="three wide column">cahocyjei@gmail.com</div>
          <div className="seven wide column">
            Contenido para la tercera sección del pie de página
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
