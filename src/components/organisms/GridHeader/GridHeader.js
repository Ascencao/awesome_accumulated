
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./GridHeader.css";
import "../../../global.css";

function GridHeader(props) {

  const [labels, setLabels] = useState([]);

  useEffect(() => {
    console.log("TCL: GridHeader -> props.labels", props.labels)
    setLabels((tagList => (
        tagList.map((label, id) => (
        <Link className="text-decoration-none" key={id} to={`/tema/${label.slug}`}>
            {label.text}
        </Link>
        ))
    )
    )(props.labels || []));
  }, [props.labels]);

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
