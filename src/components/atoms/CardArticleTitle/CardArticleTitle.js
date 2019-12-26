import React from "react";

import "./CardArticleTitle.css";

function CardArticleTitle(props) {
  return (
    <React.Fragment>
      <h2 className="com-title-acu">
        <a href={props.url}>
          <b>{props.title}</b>
        </a>
      </h2>
    </React.Fragment>
  );
}

export default CardArticleTitle;
