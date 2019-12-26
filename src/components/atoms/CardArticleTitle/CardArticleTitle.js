import React from "react";

import "./CardArticleTitle.css";
import { Link } from "react-router-dom";

function CardArticleTitle(props) {
  return (
    <React.Fragment>
      <h2 className="com-title-acu">
        <Link to={props.url}>
          <b>{props.title}</b>
        </Link>
      </h2>
    </React.Fragment>
  );
}

export default CardArticleTitle;
