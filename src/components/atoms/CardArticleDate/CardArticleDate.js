import React from "react";
import { Link } from "react-router-dom";

import "./CardArticleDate.css";

function CardArticleDate(props) {
  const formatDate = date => {
    if (date) {
      let dateParts = date.split("T")[0].split("-");
      let newDate = new Date(dateParts);
      let options = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      return newDate.toLocaleDateString("es-ES", options);
    }
  };
  return (
    <React.Fragment>
      <h4 className="com-date">{formatDate(props.date)}</h4>
    </React.Fragment>
  );
}

export default CardArticleDate;
