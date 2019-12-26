import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./GridHeader.css";
import "../../../global.css";

function GridHeader(props) {
  const labels = tagList => {
    tagList.map((label, id) => {
      return (
        <Link className="text-decoration-none" key={id} to={label.slug}>
          {label.text}
        </Link>
      );
    });
  };

  useEffect(() => {
    if (props.labels) {
      console.log(props.labels);
      labels(props.labels);
    }
  });

  return (
    <React.Fragment>
      <div>
        <div className="com-titleWithfollow hlp-marginBottom-15">
          <h1 className="com-title-section-xl hlp-marginBottom-40">
            {props.title}
          </h1>
        </div>
      </div>
      <div>
        <div className="cont_tags com-secondary-tag hlp-marginBottom-20">
          {labels}
        </div>
      </div>
    </React.Fragment>
  );
}

export default GridHeader;
