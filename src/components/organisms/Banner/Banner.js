import React from "react";

import "./Banner.css";

function Banner() {
  return (
    <React.Fragment>
      <div className="banner w-100 --bg-banner">
        <div className="banner --top --desktop"></div>
        <div className="banner --top --tablet sf-hidden"></div>
        <div className="banner --top --mobile sf-hidden"></div>
      </div>
      <div className="banner w-100 --bg-banner">
        <div className="banner --sticky --mobile sf-hidden"></div>
      </div>
    </React.Fragment>
  );
}

export default Banner;
