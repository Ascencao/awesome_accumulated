import React from "react";

import GridHeader from "../GridHeader/GridHeader";
import headerData from "./header.json";
import CardArticleImage from "../../atoms/CardArticleImage/CardArticleImage";
import CardArticleTitle from "../../atoms/CardArticleTitle/CardArticleTitle";

import "./SidebarMain.css";

function SidebarMain() {
  return (
    <React.Fragment>
      <div className="sidebar__main">
        <GridHeader title={headerData.title} labels={headerData.labels} />
        <section class="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
          <article class="mod-caja-nota lugares w-100-mobile">
            <CardArticleImage
              src="https://bucket1.glanacion.com/anexos/fotos/22/3054322h600.jpg"
              alt="Pollo"
              className=""
              url="/"
            ></CardArticleImage>
            <div class="mod-caja-nota__descrip">
              <CardArticleTitle
                title="La escuela. que tiene de escudo al Che Guevara y donde izan la bandera de Cuba"
                url="/"
              ></CardArticleTitle>
              <h4 class="com-date">1 de Julio de 2019</h4>
            </div>
          </article>
        </section>
      </div>
    </React.Fragment>
  );
}

export default SidebarMain;
