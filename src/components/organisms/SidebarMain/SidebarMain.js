import React from "react";

import GridHeader from "../GridHeader/GridHeader";
import headerData from "./header.json";
import CardArticleImage from "../../atoms/CardArticleImage/CardArticleImage";
import CardArticleTitle from "../../atoms/CardArticleTitle/CardArticleTitle";
import CardArticleDate from "../../atoms/CardArticleDate/CardArticleDate";

import "./SidebarMain.css";

function SidebarMain() {
  return (
    <React.Fragment>
      <div className="sidebar__main">
        <GridHeader title={headerData.title} labels={headerData.labels} />
        <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
          <article className="mod-caja-nota lugares w-100-mobile">
            <CardArticleImage
              src="https://bucket1.glanacion.com/anexos/fotos/22/3054322h600.jpg"
              alt="Pollo"
              className=""
              url="/"
            ></CardArticleImage>
            <div className="mod-caja-nota__descrip">
              <CardArticleTitle
                title="La escuela. que tiene de escudo al Che Guevara y donde izan la bandera de Cuba"
                url="/"
              ></CardArticleTitle>
              <CardArticleDate date="2019-07-01T12:27:46.485Z"></CardArticleDate>
            </div>
          </article>
        </section>
      </div>
    </React.Fragment>
  );
}

export default SidebarMain;
