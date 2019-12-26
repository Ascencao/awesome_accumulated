import React from "react";

import "./CardArticle.css";

import CardArticleImage from "../../atoms/CardArticleImage/CardArticleImage";
import CardArticleTitle from "../../atoms/CardArticleTitle/CardArticleTitle";
import CardArticleDate from "../../atoms/CardArticleDate/CardArticleDate";

function CardArticle(props) {
  return (
    <React.Fragment>
      <article className="mod-caja-nota lugares w-100-mobile">
        <CardArticleImage
          src={props.image}
          alt={props.title}
          className=""
          url={props.url}
        ></CardArticleImage>
        <div className="mod-caja-nota__descrip">
          <CardArticleTitle
            title={props.title}
            url={props.url}
          ></CardArticleTitle>
          <CardArticleDate date={props.date}></CardArticleDate>
        </div>
      </article>
    </React.Fragment>
  );
}

export default CardArticle;
