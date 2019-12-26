import React from "react";

import GridHeader from "../GridHeader/GridHeader";
import CardArticle from "../../molecules/CardArticle/CardArticle";

import headerData from "./header.json";
import gridData from "./grid.json";

import "./SidebarMain.css";

function SidebarMain() {
  const articles = gridData.articles.map((article, id) => {
    if (article.subtype == "7") {
      return (
        <CardArticle
          key={id}
          title={article.headlines.basic}
          date={article.display_date}
          image={article.promo_items ? article.promo_items.basic.url : ""}
          url={article.website_url}
        ></CardArticle>
      );
    }
  });

  return (
    <React.Fragment>
      <div className="sidebar__main">
        <GridHeader title={headerData.title} labels={headerData.labels} />
        <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
          {articles}
        </section>
      </div>
    </React.Fragment>
  );
}

export default SidebarMain;
