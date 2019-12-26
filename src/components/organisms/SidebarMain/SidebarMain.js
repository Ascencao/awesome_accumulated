import React from "react";

import GridHeader from "../GridHeader/GridHeader";
import headerData from "./header.json";

import "./SidebarMain.css";
import CardArticleImage from "../../atoms/CardArticleImage/CardArticleImage";

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
          </article>
        </section>
      </div>
    </React.Fragment>
  );
}

export default SidebarMain;
