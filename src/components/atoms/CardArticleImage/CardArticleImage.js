import React from "react";
import { Link } from "react-router-dom";

import "./CardArticleImage.css";

function CardArticleImage(props) {
  return (
    <React.Fragment>
      <section className="cont-figure">
        <Link src={props.url} className="figure">
          <picture className="content-pic picture">
            <img
              src={props.src}
              alt={props.alt}
              className={"content-img figure-image".concat(props.className)}
            />
          </picture>
        </Link>
      </section>
    </React.Fragment>
  );
}

export default CardArticleImage;
