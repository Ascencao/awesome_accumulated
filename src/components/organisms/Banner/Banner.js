import React from "react";

import "./Banner.css";

function Banner() {
  return (
    <React.Fragment>
      <div class="banner w-100 --bg-banner">
        <div class="banner --top --desktop"></div>
        <div class="banner --top --tablet sf-hidden"></div>
        <div class="banner --top --mobile sf-hidden"></div>
      </div>
      <div class="banner w-100 --bg-banner">
        <div class="banner --sticky --mobile sf-hidden"></div>
      </div>
    </React.Fragment>
  );
}

export default Banner;
