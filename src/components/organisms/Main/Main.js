import React from "react";

import "./Main.css";
import "../../../global.css";

import GridHeader from "../GridHeader/GridHeader";

function Main() {
  return (
    <React.Fragment>
      <div class="lay-sidebar">
        <div class="sidebar__main">
          <GridHeader />
        </div>
        <div class="sidebar__aside"></div>
      </div>
    </React.Fragment>
  );
}

export default Main;
