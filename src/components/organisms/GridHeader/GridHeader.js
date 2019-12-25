import React from "react";

import "./GridHeader.css";
import "../../../global.css";

function GridHeader() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="com-titleWithfollow hlp-marginBottom-15">
          <h1 className="com-title-section-xl hlp-marginBottom-40">
            Acumulado Grilla
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="cont_tags com-secondary-tag hlp-marginBottom-20">
          <a href="http://especiales.lanacion.com.ar/arc-css/acumulado.asp">
            Platos principales
          </a>
          <a href="http://especiales.lanacion.com.ar/arc-css/acumulado.asp">
            Cerdo
          </a>
          <a href="http://especiales.lanacion.com.ar/arc-css/acumulado.asp">
            Papas
          </a>
          <a href="http://especiales.lanacion.com.ar/arc-css/acumulado.asp">
            Date un gustito
          </a>
          <a href="http://especiales.lanacion.com.ar/arc-css/acumulado.asp">
            La familia
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default GridHeader;
