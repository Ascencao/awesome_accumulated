import React from "react";

import "./Main.css";

import GridHeader from "../GridHeader/GridHeader";
import SidebarAside from "../SidebarAside/SidebarAside";

function Main() {
  return (
    <React.Fragment>
      <div class="lay-sidebar">
        <div class="sidebar__main">
          <GridHeader />
        </div>
        <SidebarAside />
      </div>
    </React.Fragment>
  );
}

export default Main;
